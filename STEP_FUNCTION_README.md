# Définition AWS Step Function - Traitement de Messages HTTP

## Vue d'ensemble

Cette Step Function implémente le workflow dessiné dans le diagramme pour traiter des messages HTTP par lots avec enrichissement et stockage.

## Architecture du Workflow

### 1. **RecupererMessagesHTTP** (Task)
- Récupère jusqu'à 100 messages depuis une file de messages HTTP
- Retourne un tableau contenant tous les messages
- Lambda Function: `RecupererMessagesHTTP`

### 2. **TraiterParLotsDe20** (Map State)
- Traite les messages par lots de 20 en parallèle
- MaxConcurrency: 5 (traite 5 lots simultanément)
- Chaque message passe par les étapes suivantes :

#### 2.1 **EnrichirMessage** (Task)
- Enrichit chaque message avec de nouveaux IDs
- Lambda Function: `EnrichirMessageAvecNouveauxIDs`

#### 2.2 **StockerDansS3** (Task)
- Stocke les données dans un fichier zip dans S3
- Lambda Function: `StockerDansZipS3`

#### 2.3 **EcrireDansDynamoDB** (Task)
- Écrit le message enrichi dans DynamoDB
- Table: `MessagesTable`
- Attributs stockés :
  - `messageId`: ID du message
  - `timestamp`: Horodatage
  - `data`: Données complètes du message (JSON stringifié)
  - `s3Location`: Emplacement du fichier dans S3
  - `status`: "SUCCESS"

#### 2.4 **GererErreur** (Task - Catch Handler)
- Activé en cas d'erreur lors du traitement
- Envoie le message problématique vers une Dead Letter Queue (DLQ) SQS
- Permet de retraiter les messages en échec ultérieurement

#### 2.5 **Echec** (Fail State)
- État terminal en cas d'échec du traitement

### 3. **Succes** (Succeed State)
- État terminal indiquant que tous les messages ont été traités avec succès

## Prérequis

### Lambda Functions à créer :
1. **RecupererMessagesHTTP**
   - Récupère les messages depuis une source HTTP
   - Retourne: `{ messages: [...] }`

2. **EnrichirMessageAvecNouveauxIDs**
   - Enrichit un message avec de nouveaux identifiants
   - Input: Message original
   - Output: Message enrichi

3. **StockerDansZipS3**
   - Compresse et stocke les données dans S3
   - Input: Message enrichi
   - Output: `{ s3Key: "...", s3Bucket: "..." }`

### Ressources AWS :
- **DynamoDB Table**: `MessagesTable`
  - Clé primaire: `messageId` (String)
  
- **SQS Queue**: Dead Letter Queue pour les messages en erreur
  - URL à configurer dans la définition

- **S3 Bucket**: Pour stocker les fichiers zip

## Déploiement

### Via AWS CLI :

```bash
# Créer la Step Function
aws stepfunctions create-state-machine \
  --name "TraitementMessagesHTTP" \
  --definition file://step-function-definition.json \
  --role-arn "arn:aws:iam::ACCOUNT_ID:role/StepFunctionExecutionRole"
```

### Via AWS Console :
1. Ouvrir AWS Step Functions
2. Cliquer sur "Create state machine"
3. Choisir "Write your workflow in code"
4. Copier le contenu de `step-function-definition.json`
5. Configurer le rôle IAM avec les permissions nécessaires

## Permissions IAM Requises

Le rôle d'exécution de la Step Function doit avoir :

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "lambda:InvokeFunction"
      ],
      "Resource": [
        "arn:aws:lambda:*:*:function:RecupererMessagesHTTP",
        "arn:aws:lambda:*:*:function:EnrichirMessageAvecNouveauxIDs",
        "arn:aws:lambda:*:*:function:StockerDansZipS3"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "dynamodb:PutItem"
      ],
      "Resource": "arn:aws:dynamodb:*:*:table/MessagesTable"
    },
    {
      "Effect": "Allow",
      "Action": [
        "sqs:SendMessage"
      ],
      "Resource": "arn:aws:sqs:*:*:dead-letter-queue"
    }
  ]
}
```

## Exécution

### Démarrer une exécution :

```bash
aws stepfunctions start-execution \
  --state-machine-arn "arn:aws:states:REGION:ACCOUNT_ID:stateMachine:TraitementMessagesHTTP" \
  --input '{}'
```

### Surveiller l'exécution :

```bash
aws stepfunctions describe-execution \
  --execution-arn "arn:aws:states:REGION:ACCOUNT_ID:execution:TraitementMessagesHTTP:EXECUTION_ID"
```

## Gestion des Erreurs

- Les erreurs lors de l'écriture dans DynamoDB sont capturées
- Les messages en erreur sont envoyés vers la DLQ
- La DLQ permet de retraiter les messages problématiques manuellement ou automatiquement

## Optimisations Possibles

1. **Ajuster MaxConcurrency** : Augmenter ou diminuer selon la charge
2. **Batch Processing** : Utiliser DynamoDB BatchWriteItem pour améliorer les performances
3. **Retry Logic** : Ajouter des stratégies de retry avant d'envoyer vers la DLQ
4. **Monitoring** : Ajouter des métriques CloudWatch personnalisées

## Structure des Données

### Input attendu :
```json
{}
```

### Output de RecupererMessagesHTTP :
```json
{
  "messages": [
    {
      "id": "msg-123",
      "content": "...",
      "timestamp": 1699401600
    }
  ]
}
```

### Output de EnrichirMessageAvecNouveauxIDs :
```json
{
  "messageId": "enriched-msg-123",
  "originalId": "msg-123",
  "newIds": ["id1", "id2"],
  "content": "...",
  "timestamp": 1699401600
}
```
