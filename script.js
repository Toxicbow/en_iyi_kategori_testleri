// En İyi Kategori Testleri - Script.js

const quizData = {
    categories: [
        {
            id: 'yemekler',
            title: 'Sokak Lezzetleri',
            image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
            count: 10,
            questions: [
                {
                    a: { text: 'Adana Kebap', media: 'https://images.unsplash.com/photo-1562967962-63e012e63f3e?auto=format&fit=crop&q=80&w=800', type: 'image' },
                    b: { text: 'İskender Kebap', media: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800', type: 'image' }
                },
                {
                    a: { text: 'Kokoreç', media: 'https://images.unsplash.com/photo-1633383718081-22ac93e3dbf1?auto=format&fit=crop&q=80&w=800', type: 'image' },
                    b: { text: 'Midye Dolma', media: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=800', type: 'image' }
                },
                {
                    a: { text: 'Baklava', media: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800', type: 'image' },
                    b: { text: 'Künefe', media: 'https://images.unsplash.com/photo-1614707267537-b85af6b42b02?auto=format&fit=crop&q=80&w=800', type: 'image' }
                }
            ]
        },
        {
            id: 'diziler',
            title: 'Efsane Türk Dizileri',
            image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=800',
            count: 8,
            questions: [
                {
                    a: { text: 'Kurtlar Vadisi', media: 'https://www.youtube.com/embed/jZ_vG7Y8s0k', type: 'video' },
                    b: { text: 'Ezel', media: 'https://www.youtube.com/embed/S2qU6VvS0W0', type: 'video' }
                },
                {
                    a: { text: 'Behzat Ç.', media: 'https://www.youtube.com/embed/zHIdC8E_G_w', type: 'video' },
                    b: { text: 'Şahsiyet', media: 'https://www.youtube.com/embed/h3D7C66W8A8', type: 'video' }
                },
                {
                    a: { text: 'Aşk-ı Memnu', media: 'https://www.youtube.com/embed/1W9fT8q0h6U', type: 'video' },
                    b: { text: 'Muhteşem Yüzyıl', media: 'https://www.youtube.com/embed/fD_K89-k5_s', type: 'video' }
                }
            ]
        },
        {
            id: 'teknoloji',
            title: 'Teknoloji Dünyası',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
            count: 12,
            questions: [
                {
                    a: { text: 'iPhone (Apple)', media: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800', type: 'image' },
                    b: { text: 'Samsung (Android)', media: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800', type: 'image' }
                },
                {
                    a: { text: 'PlayStation 5', media: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=800', type: 'image' },
                    b: { text: 'Xbox Series X', media: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&q=80&w=800', type: 'image' }
                }
            ]
        },
        {
            id: 'tatil',
            title: 'Rüya Tatil Yerleri',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
            count: 15,
            questions: [
                {
                    a: { text: 'Bodrum', media: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800', type: 'image' },
                    b: { text: 'Çeşme', media: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&q=80&w=800', type: 'image' }
                },
                {
                    a: { text: 'Maldivler', media: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800', type: 'image' },
                    b: { text: 'İsviçre Alpleri', media: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&q=80&w=800', type: 'image' }
                }
            ]
        },
        {
            id: 'kahramanlar',
            title: 'Süper Kahramanlar',
            image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=800',
            count: 10,
            questions: [
                {
                    a: { text: 'Iron Man', media: 'https://images.unsplash.com/photo-1623939012331-9994c9695751?auto=format&fit=crop&q=80&w=800', type: 'image' },
                    b: { text: 'Batman', media: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&q=80&w=800', type: 'image' }
                },
                {
                    a: { text: 'Spider-Man', media: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=800', type: 'image' },
                    b: { text: 'Superman', media: 'https://images.unsplash.com/photo-1534801738706-979ad51c5144?auto=format&fit=crop&q=80&w=800', type: 'image' }
                }
            ]
        },
        {
            id: 'muzik',
            title: 'Müzik Dünyası',
            image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
            count: 20,
            questions: [
                {
                    a: { text: 'Tarkan', media: 'https://www.youtube.com/embed/S2pU6VvS0W0', type: 'video' },
                    b: { text: 'Barış Manço', media: 'https://www.youtube.com/embed/V6Wv_DInO_U', type: 'video' }
                },
                {
                    a: { text: 'Rock Müzik', media: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&q=80&w=800', type: 'image' },
                    b: { text: 'Pop Müzik', media: 'https://images.unsplash.com/photo-1514525253361-bee1455c082c?auto=format&fit=crop&q=80&w=800', type: 'image' }
                }
            ]
        }
    ]
};

class QuizApp {
    constructor() {
        this.currentCategory = null;
        this.currentQuestionIndex = 0;
        this.userChoices = [];
        
        this.elements = {
            categoriesGrid: document.getElementById('categories-grid'),
            homeView: document.getElementById('home-view'),
            loadingView: document.getElementById('loading-view'),
            quizView: document.getElementById('quiz-view'),
            resultsView: document.getElementById('results-view'),
            currentQuizTitle: document.getElementById('current-quiz-title'),
            quizProgress: document.getElementById('quiz-progress'),
            optionA: document.getElementById('option-a'),
            optionB: document.getElementById('option-b'),
            questionCounter: document.getElementById('question-counter'),
            resultsSummary: document.getElementById('results-summary'),
            searchBar: document.getElementById('category-search')
        };

        this.init();
    }

    init() {
        this.renderCategories(quizData.categories);
        this.elements.searchBar.addEventListener('input', (e) => this.handleSearch(e));
        
        // Dark mode toggle
        document.getElementById('theme-toggle').addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const icon = document.querySelector('#theme-toggle i');
            if(document.body.classList.contains('light-mode')) {
                icon.setAttribute('data-lucide', 'sun');
            } else {
                icon.setAttribute('data-lucide', 'moon');
            }
            lucide.createIcons();
        });
    }

    renderCategories(categories) {
        this.elements.categoriesGrid.innerHTML = categories.map(cat => `
            <div class="category-card" onclick="app.startQuiz('${cat.id}')">
                <img src="${cat.image}" class="category-image" alt="${cat.title}">
                <div class="category-info">
                    <h3 class="category-title">${cat.title}</h3>
                    <div class="category-stats">
                        <span><i data-lucide="help-circle" style="width:14px;height:14px;display:inline-block"></i> ${cat.count} Soru</span>
                        <span class="ai-badge" style="color:var(--primary); font-weight:bold">AI DESTEKLİ</span>
                    </div>
                </div>
            </div>
        `).join('');
        lucide.createIcons();
    }

    handleSearch(e) {
        const term = e.target.value.toLowerCase();
        const filtered = quizData.categories.filter(c => 
            c.title.toLowerCase().includes(term)
        );
        this.renderCategories(filtered);
    }

    startQuiz(categoryId) {
        this.currentCategory = quizData.categories.find(c => c.id === categoryId);
        this.currentQuestionIndex = 0;
        this.userChoices = [];
        
        // Switch to Loading View
        this.elements.homeView.classList.add('hidden');
        this.elements.loadingView.classList.remove('hidden');
        this.elements.resultsView.classList.add('hidden');
        this.elements.quizView.classList.add('hidden');

        // Simulate AI "generating" content
        setTimeout(() => {
            this.elements.loadingView.classList.add('hidden');
            this.elements.quizView.classList.remove('hidden');
            this.elements.currentQuizTitle.innerText = this.currentCategory.title;
            this.loadQuestion();
        }, 2500);
    }

    loadQuestion() {
        const question = this.currentCategory.questions[this.currentQuestionIndex];
        const total = this.currentCategory.questions.length;
        
        this.elements.questionCounter.innerText = `Soru: ${this.currentQuestionIndex + 1} / ${total}`;
        this.elements.quizProgress.style.width = `${((this.currentQuestionIndex) / total) * 100}%`;
        
        this.renderOption(this.elements.optionA, question.a);
        this.renderOption(this.elements.optionB, question.b);
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    renderOption(container, option) {
        let mediaHtml = '';
        if(option.type === 'video') {
            mediaHtml = `<iframe src="${option.media}?autoplay=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        } else {
            mediaHtml = `<img src="${option.media}" alt="${option.text}">`;
        }

        container.innerHTML = `
            <div class="option-media">
                ${mediaHtml}
            </div>
            <div class="option-text">${option.text}</div>
        `;
    }

    handleChoice(choice) {
        const question = this.currentCategory.questions[this.currentQuestionIndex];
        this.userChoices.push({
            question: `${question.a.text} vs ${question.b.text}`,
            choice: choice === 'a' ? question.a.text : question.b.text
        });

        if (this.currentQuestionIndex < this.currentCategory.questions.length - 1) {
            this.currentQuestionIndex++;
            this.loadQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        this.elements.quizView.classList.add('hidden');
        this.elements.resultsView.classList.remove('hidden');
        
        this.elements.resultsSummary.innerHTML = `
            <p style="margin-bottom: 2rem; color: var(--text-muted)">İşte senin tercihlerine göre seçimlerin:</p>
            <div class="choices-list" style="text-align: left; margin-bottom: 2rem;">
                ${this.userChoices.map(c => `
                    <div style="background: rgba(255,255,255,0.05); padding: 12px; border-radius: 12px; margin-bottom: 8px; border-left: 4px solid var(--primary)">
                        <strong style="color:var(--text-muted)">${c.question}:</strong> <span style="color:var(--primary)">${c.choice}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    showHome() {
        this.elements.homeView.classList.remove('hidden');
        this.elements.loadingView.classList.add('hidden');
        this.elements.quizView.classList.add('hidden');
        this.elements.resultsView.classList.add('hidden');
    }

    shareResults() {
        const text = `En İyi Kategori Testleri'nde ${this.currentCategory.title} testini çözdüm! Sen de dene: ${window.location.href}`;
        if (navigator.share) {
            navigator.share({
                title: 'En İyi Kategori Testleri',
                text: text,
                url: window.location.href
            });
        } else {
            alert('Sonuçlar kopyalandı! Arkadaşlarınla paylaşabilirsin.');
            navigator.clipboard.writeText(text);
        }
    }
}

// Global App Instance
const app = new QuizApp();
