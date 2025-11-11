// Quiz Application
class QuizApp {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.selectedAnswer = null;
        this.stats = this.loadStats();
        this.init();
    }

    async init() {
        await this.loadQuestions();
        this.setupEventListeners();
        this.displayQuestion();
    }

    async loadQuestions() {
        try {
            // Try to fetch README.md
            const response = await fetch('README.md');
            if (!response.ok) throw new Error('Failed to fetch');
            const text = await response.text();
            
            console.log('README.md loaded, length:', text.length);
            console.log('First 500 chars:', text.substring(0, 500));
            
            this.questions = this.parseQuestions(text);
            
            if (this.questions.length === 0) {
                throw new Error('No questions parsed from README.md');
            }
            
            // Shuffle questions if starting fresh
            if (this.stats.answeredQuestions.length === 0) {
                this.shuffleQuestions();
            }
            
            document.getElementById('loading').style.display = 'none';
            
            if (this.stats.answeredQuestions.length >= this.questions.length) {
                this.showCompletionScreen();
            } else {
                document.getElementById('quiz-container').style.display = 'block';
                this.updateStats();
            }
        } catch (error) {
            console.error('Error loading questions:', error);
            document.getElementById('loading').innerHTML = `
                <div style="color: #ef4444; text-align: left; max-width: 600px; margin: 0 auto;">
                    <h3 style="margin-bottom: 15px;">❌ Cannot Load README.md</h3>
                    <p style="margin-bottom: 20px;">Browsers block direct file access for security. Please use one of these methods:</p>
                    
                    <div style="background: #f3f4f6; padding: 20px; border-radius: 10px; margin-bottom: 15px;">
                        <h4 style="margin-bottom: 10px;">Method 1: Using Python (Recommended)</h4>
                        <p style="margin-bottom: 10px;">Open PowerShell/Terminal in this folder and run:</p>
                        <code style="background: #1f2937; color: #10b981; padding: 10px; display: block; border-radius: 5px; font-family: monospace;">python -m http.server 8000</code>
                        <p style="margin-top: 10px;">Then open: <a href="http://localhost:8000" style="color: #667eea;">http://localhost:8000</a></p>
                    </div>
                    
                    <div style="background: #f3f4f6; padding: 20px; border-radius: 10px; margin-bottom: 15px;">
                        <h4 style="margin-bottom: 10px;">Method 2: Using Node.js</h4>
                        <p style="margin-bottom: 10px;">Install http-server globally:</p>
                        <code style="background: #1f2937; color: #10b981; padding: 10px; display: block; border-radius: 5px; font-family: monospace;">npm install -g http-server</code>
                        <p style="margin-top: 10px;">Then run in this folder:</p>
                        <code style="background: #1f2937; color: #10b981; padding: 10px; display: block; border-radius: 5px; font-family: monospace;">http-server</code>
                    </div>
                    
                    <div style="background: #f3f4f6; padding: 20px; border-radius: 10px;">
                        <h4 style="margin-bottom: 10px;">Method 3: Using VS Code</h4>
                        <p>Install "Live Server" extension, then right-click index.html → "Open with Live Server"</p>
                    </div>
                </div>
            `;
        }
    }

    parseQuestions(text) {
        const questions = [];
        
        console.log('Starting to parse questions...');
        
        // Split the text by the ### markers to get each question section
        const sections = text.split(/(?=### )/);
        
        console.log(`Found ${sections.length} sections`);
        
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            
            // Skip if it doesn't start with ###
            if (!section.trim().startsWith('###')) continue;
            
            // Extract question text (first line after ###)
            const lines = section.split('\n');
            const questionLine = lines[0].replace(/^###\s+/, '').trim();
            
            if (!questionLine) continue;
            
            // Find all option lines
            const options = [];
            let correctIndex = -1;
            
            for (let j = 1; j < lines.length; j++) {
                const line = lines[j].trim();
                
                // Check if it's an option line
                if (line.startsWith('- [x]') || line.startsWith('- [ ]')) {
                    const isCorrect = line.startsWith('- [x]');
                    const optionText = line.replace(/^- \[[x ]\]\s*/, '').trim();
                    
                    if (optionText) {
                        options.push({
                            text: optionText,
                            isCorrect: isCorrect
                        });
                        
                        if (isCorrect) {
                            correctIndex = options.length - 1;
                        }
                    }
                }
                
                // Stop at the "Back to Top" marker
                if (line.includes('Back to Top')) break;
            }
            
            // Only add question if it has options and a correct answer
            if (options.length > 0 && correctIndex !== -1) {
                questions.push({
                    id: this.generateQuestionId(questionLine),
                    question: questionLine,
                    options: options,
                    correctIndex: correctIndex
                });
            }
        }
        
        console.log(`Parsed ${questions.length} valid questions from README`);
        
        if (questions.length === 0) {
            console.error('No questions found! Checking README format...');
            const sampleSection = text.substring(text.indexOf('###'), text.indexOf('###') + 500);
            console.log('Sample section:', sampleSection);
        }
        
        return questions;
    }

    generateQuestionId(questionText) {
        // Simple hash function to generate unique ID
        let hash = 0;
        for (let i = 0; i < questionText.length; i++) {
            const char = questionText.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash).toString();
    }

    shuffleQuestions() {
        for (let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
        }
    }

    loadStats() {
        const saved = localStorage.getItem('awsQuizStats');
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            answeredQuestions: [],
            correctAnswers: 0,
            incorrectAnswers: 0
        };
    }

    saveStats() {
        localStorage.setItem('awsQuizStats', JSON.stringify(this.stats));
    }

    getCurrentQuestion() {
        // Find next unanswered question
        const unanswered = this.questions.find(q => 
            !this.stats.answeredQuestions.includes(q.id)
        );
        return unanswered;
    }

    displayQuestion() {
        const question = this.getCurrentQuestion();
        
        if (!question) {
            this.showCompletionScreen();
            return;
        }

        this.selectedAnswer = null;
        this.answerSubmitted = false;
        
        // Update question number
        const answeredCount = this.stats.answeredQuestions.length;
        document.getElementById('question-number').textContent = 
            `Question ${answeredCount + 1} of ${this.questions.length}`;
        
        // Display question text
        document.getElementById('question-text').textContent = question.question;
        
        // Display options
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.dataset.index = index;
            
            const letter = String.fromCharCode(65 + index); // A, B, C, D...
            
            optionElement.innerHTML = `
                <span class="option-letter">${letter}</span>
                <span class="option-text">${option.text}</span>
            `;
            
            optionElement.addEventListener('click', () => this.selectOption(index));
            optionsContainer.appendChild(optionElement);
        });
        
        // Reset buttons
        document.getElementById('submit-btn').style.display = 'block';
        document.getElementById('submit-btn').disabled = true;
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('result-feedback').style.display = 'none';
    }

    selectOption(index) {
        // Don't allow selection if answer has been submitted
        if (this.answerSubmitted) return;
        
        const options = document.querySelectorAll('.option');
        
        // If clicking the same option, deselect it
        if (this.selectedAnswer === index) {
            options[index].classList.remove('selected');
            this.selectedAnswer = null;
            document.getElementById('submit-btn').disabled = true;
            return;
        }
        
        // Remove previous selection
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Mark new selection
        options[index].classList.add('selected');
        this.selectedAnswer = index;
        
        // Enable submit button
        document.getElementById('submit-btn').disabled = false;
    }

    setupEventListeners() {
        document.getElementById('submit-btn').addEventListener('click', () => {
            this.submitAnswer();
        });
        
        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextQuestion();
        });
        
        document.getElementById('reset-btn').addEventListener('click', () => {
            this.resetProgress();
        });
        
        document.getElementById('restart-btn').addEventListener('click', () => {
            this.resetProgress();
        });
    }

    submitAnswer() {
        if (this.selectedAnswer === null) return;
        
        // Mark as submitted
        this.answerSubmitted = true;
        
        const question = this.getCurrentQuestion();
        const isCorrect = this.selectedAnswer === question.correctIndex;
        
        // Update stats
        this.stats.answeredQuestions.push(question.id);
        if (isCorrect) {
            this.stats.correctAnswers++;
        } else {
            this.stats.incorrectAnswers++;
        }
        this.saveStats();
        this.updateStats();
        
        // Show result
        const options = document.querySelectorAll('.option');
        options.forEach((opt, index) => {
            opt.classList.add('disabled');
            if (index === question.correctIndex) {
                opt.classList.add('correct');
            } else if (index === this.selectedAnswer && !isCorrect) {
                opt.classList.add('incorrect');
            }
        });
        
        // Show feedback
        const feedback = document.getElementById('result-feedback');
        feedback.style.display = 'block';
        feedback.className = `result-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        
        if (isCorrect) {
            feedback.innerHTML = `
                <h3>✓ Correct!</h3>
                <p>Great job! You selected the right answer.</p>
            `;
        } else {
            const correctOption = question.options[question.correctIndex].text;
            feedback.innerHTML = `
                <h3>✗ Incorrect</h3>
                <p>The correct answer is: <strong>${correctOption}</strong></p>
            `;
        }
        
        // Switch buttons
        document.getElementById('submit-btn').style.display = 'none';
        document.getElementById('next-btn').style.display = 'block';
    }

    nextQuestion() {
        if (this.stats.answeredQuestions.length >= this.questions.length) {
            this.showCompletionScreen();
        } else {
            this.displayQuestion();
        }
    }

    updateStats() {
        document.getElementById('progress').textContent = 
            `${this.stats.answeredQuestions.length}/${this.questions.length}`;
        document.getElementById('correct').textContent = this.stats.correctAnswers;
        document.getElementById('incorrect').textContent = this.stats.incorrectAnswers;
    }

    showCompletionScreen() {
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('completion-screen').style.display = 'block';
        
        const accuracy = this.stats.answeredQuestions.length > 0 
            ? Math.round((this.stats.correctAnswers / this.stats.answeredQuestions.length) * 100)
            : 0;
        
        document.getElementById('final-total').textContent = this.stats.answeredQuestions.length;
        document.getElementById('final-correct').textContent = this.stats.correctAnswers;
        document.getElementById('final-accuracy').textContent = `${accuracy}%`;
    }

    resetProgress() {
        if (confirm('Are you sure you want to reset your progress? This will clear all your statistics.')) {
            // Clear stats
            this.stats = {
                answeredQuestions: [],
                correctAnswers: 0,
                incorrectAnswers: 0
            };
            this.saveStats();
            
            // Reload the page to start fresh
            window.location.reload();
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
