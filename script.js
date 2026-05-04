// En İyi Kategori Testleri - Script.js (Tournament Version)

const quizData = {
    categories: [
        {
            id: 'arabalar',
            title: 'Süper Arabalar',
            image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
            items: [
                { text: 'Ferrari', media: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Lamborghini', media: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Porsche', media: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Bugatti', media: 'https://images.unsplash.com/photo-1566008885218-90abf9200ddb?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'McLaren', media: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Aston Martin', media: 'https://images.unsplash.com/photo-1605515298946-d062f2e9da53?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Koenigsegg', media: 'https://images.unsplash.com/photo-1614200187524-dc5b8ec2220a?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Pagani', media: 'https://images.unsplash.com/photo-1534093607318-f025413f49cb?auto=format&fit=crop&q=80&w=800', type: 'image' }
            ]
        },
        {
            id: 'sehirler',
            title: 'Dünya Şehirleri',
            image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800',
            items: [
                { text: 'İstanbul', media: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Paris', media: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'New York', media: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Tokyo', media: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Roma', media: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Londra', media: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Dubai', media: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Barcelona', media: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=80&w=800', type: 'image' }
            ]
        },
        {
            id: 'mutfaklar',
            title: 'Dünya Mutfakları',
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
            items: [
                { text: 'Türk Mutfağı', media: 'https://images.unsplash.com/photo-1562967962-63e012e63f3e?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'İtalyan Mutfağı', media: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Japon Mutfağı', media: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Meksika Mutfağı', media: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Fransız Mutfağı', media: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Çin Mutfağı', media: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Hint Mutfağı', media: 'https://images.unsplash.com/photo-1585937421612-71a00555665b?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Yunan Mutfağı', media: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=800', type: 'image' }
            ]
        },
        {
            id: 'futbolcular',
            title: 'Efsane Futbolcular',
            image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800',
            items: [
                { text: 'Lionel Messi', media: 'https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'C. Ronaldo', media: 'https://images.unsplash.com/photo-1520038410233-7141f7b9c9ca?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Pele', media: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Maradona', media: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Zidane', media: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Ronaldinho', media: 'https://images.unsplash.com/photo-1579952318543-7bb54c66bca9?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Cruyff', media: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Ronaldo Nazario', media: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&q=80&w=800', type: 'image' }
            ]
        },
        {
            id: 'oyunlar',
            title: 'Efsane Oyunlar',
            image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=800',
            items: [
                { text: 'GTA V', media: 'https://images.unsplash.com/photo-1589241062272-c0a000072dfa?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'The Witcher 3', media: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Minecraft', media: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Red Dead Redemption 2', media: 'https://images.unsplash.com/photo-1509197367373-9bb92f3ef3c2?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'The Last of Us', media: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'God of War', media: 'https://images.unsplash.com/photo-1580234811497-9bd7fd0f56ee?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Skyrim', media: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Elden Ring', media: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800', type: 'image' }
            ]
        },
        {
            id: 'kahramanlar',
            title: 'Süper Kahramanlar',
            image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=800',
            items: [
                { text: 'Iron Man', media: 'https://images.unsplash.com/photo-1623939012331-9994c9695751?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Batman', media: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Spider-Man', media: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Superman', media: 'https://images.unsplash.com/photo-1534801738706-979ad51c5144?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Thor', media: 'https://images.unsplash.com/photo-1636511116231-f199b51c162f?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Wolverine', media: 'https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Wonder Woman', media: 'https://images.unsplash.com/photo-1639683400589-980164f77c0c?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Captain America', media: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=800', type: 'image' }
            ]
        },
        {
            id: 'teknoloji',
            title: 'Teknoloji Markaları',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
            items: [
                { text: 'Apple', media: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Google', media: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Tesla', media: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Microsoft', media: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Samsung', media: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Sony', media: 'https://images.unsplash.com/photo-1591370874773-51d1a842b68e?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Amazon', media: 'https://images.unsplash.com/photo-1523474253046-2cd2c78b6ad1?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Nvidia', media: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800', type: 'image' }
            ]
        },
        {
            id: 'meyveler',
            title: 'En Sevilen Meyveler',
            image: 'https://images.unsplash.com/photo-1619566636858-adb3ef26402b?auto=format&fit=crop&q=80&w=800',
            items: [
                { text: 'Karpuz', media: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Çilek', media: 'https://images.unsplash.com/photo-1464965211904-d72141f5976f?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Muz', media: 'https://images.unsplash.com/photo-1571771894821-ad996211fdf4?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Erik', media: 'https://images.unsplash.com/photo-1603184017968-9448ca5d5439?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Kiraz', media: 'https://images.unsplash.com/photo-1528821128474-27f963b067bf?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Şeftali', media: 'https://images.unsplash.com/photo-1521495084171-3ad639e3d525?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Üzüm', media: 'https://images.unsplash.com/photo-1537640538966-79f369b41f8f?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Mandalina', media: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&q=80&w=800', type: 'image' }
            ]
        },
        {
            id: 'tatil',
            title: 'Tatil Cennetleri',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
            items: [
                { text: 'Bodrum', media: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Maldivler', media: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Bali', media: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Santorini', media: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'İsviçre Alpleri', media: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Phuket', media: 'https://images.unsplash.com/photo-1589394815804-964ed96aebec?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Hawaii', media: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?auto=format&fit=crop&q=80&w=800', type: 'image' },
                { text: 'Kapadokya', media: 'https://images.unsplash.com/photo-1643444265739-16629ec2e831?auto=format&fit=crop&q=80&w=800', type: 'image' }
            ]
        }
    ]
};

class QuizApp {
    constructor() {
        this.currentCategory = null;
        this.currentRoundItems = [];
        this.winners = [];
        this.matchIndex = 0;
        this.history = [];
        
        this.elements = {
            categoriesGrid: document.getElementById('categories-grid'),
            homeView: document.getElementById('home-view'),
            loadingView: document.getElementById('loading-view'),
            quizView: document.getElementById('quiz-view'),
            resultsView: document.getElementById('results-view'),
            currentQuizTitle: document.getElementById('current-quiz-title'),
            roundName: document.getElementById('round-name'),
            quizProgress: document.getElementById('quiz-progress'),
            optionA: document.getElementById('option-a'),
            optionB: document.getElementById('option-b'),
            questionCounter: document.getElementById('question-counter'),
            resultsSummary: document.getElementById('results-summary'),
            winnerDisplay: document.getElementById('winner-display'),
            searchBar: document.getElementById('category-search')
        };

        this.init();
    }

    init() {
        this.renderCategories(quizData.categories);
        this.elements.searchBar.addEventListener('input', (e) => this.handleSearch(e));
        
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
                        <span><i data-lucide="trophy" style="width:14px;height:14px;display:inline-block"></i> Turnuva Modu</span>
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
        const category = quizData.categories.find(c => c.id === categoryId);
        this.currentCategory = category;
        this.currentRoundItems = [...category.items].sort(() => Math.random() - 0.5).slice(0, 8);
        this.winners = [];
        this.matchIndex = 0;
        this.history = [];
        
        this.elements.homeView.classList.add('hidden');
        this.elements.loadingView.classList.remove('hidden');
        this.elements.resultsView.classList.add('hidden');
        this.elements.quizView.classList.add('hidden');

        setTimeout(() => {
            this.elements.loadingView.classList.add('hidden');
            this.elements.quizView.classList.remove('hidden');
            this.elements.currentQuizTitle.innerText = this.currentCategory.title;
            this.loadMatch();
        }, 1500);
    }

    getRoundLabel() {
        const count = this.currentRoundItems.length;
        if (count === 8) return "Çeyrek Final";
        if (count === 4) return "Yarı Final";
        if (count === 2) return "Büyük Final";
        return `Son ${count}`;
    }

    loadMatch() {
        const totalMatches = this.currentRoundItems.length / 2;
        const currentMatchNum = this.matchIndex + 1;
        
        this.elements.roundName.innerText = this.getRoundLabel();
        this.elements.questionCounter.innerText = `Maç: ${currentMatchNum} / ${totalMatches}`;
        
        const progress = (this.history.length / 7) * 100;
        this.elements.quizProgress.style.width = `${progress}%`;
        
        const itemA = this.currentRoundItems[this.matchIndex * 2];
        const itemB = this.currentRoundItems[this.matchIndex * 2 + 1];
        
        this.renderOption(this.elements.optionA, itemA);
        this.renderOption(this.elements.optionB, itemB);
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    renderOption(container, item) {
        let mediaHtml = '';
        if(item.type === 'video') {
            mediaHtml = `<iframe src="${item.media}?autoplay=0" allowfullscreen loading="lazy"></iframe>`;
        } else {
            mediaHtml = `<img src="${item.media}" 
                loading="lazy"
                onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800';" 
                alt="${item.text}">`;
        }

        container.innerHTML = `
            <div class="option-media">
                ${mediaHtml}
            </div>
            <div class="option-text">${item.text}</div>
        `;
    }

    handleChoice(choice) {
        const itemA = this.currentRoundItems[this.matchIndex * 2];
        const itemB = this.currentRoundItems[this.matchIndex * 2 + 1];
        const winner = choice === 'a' ? itemA : itemB;
        const loser = choice === 'a' ? itemB : itemA;
        
        this.winners.push(winner);
        this.history.push({ winner, loser, round: this.getRoundLabel() });
        this.matchIndex++;

        if (this.matchIndex * 2 >= this.currentRoundItems.length) {
            if (this.winners.length === 1) {
                this.showResults(this.winners[0]);
            } else {
                this.currentRoundItems = [...this.winners];
                this.winners = [];
                this.matchIndex = 0;
                this.elements.quizView.style.opacity = '0';
                setTimeout(() => {
                    this.loadMatch();
                    this.elements.quizView.style.opacity = '1';
                }, 400);
            }
        } else {
            this.loadMatch();
        }
    }

    showResults(champion) {
        this.elements.quizView.classList.add('hidden');
        this.elements.resultsView.classList.remove('hidden');
        
        let champMedia = champion.type === 'video' 
            ? `<iframe src="${champion.media}?autoplay=1" allowfullscreen></iframe>`
            : `<img src="${champion.media}" alt="${champion.text}">`;

        this.elements.winnerDisplay.innerHTML = `
            <div class="winner-card">
                <div class="winner-media">${champMedia}</div>
                <div class="winner-name">${champion.text}</div>
                <div style="color:var(--secondary); font-weight:bold; margin-top:0.5rem">🏆 ŞAMPİYON 🏆</div>
            </div>
        `;
        
        this.elements.resultsSummary.innerHTML = `
            <p style="margin: 2rem 0 1rem; color: var(--text-muted)">Turnuva Özeti:</p>
            <div class="choices-list" style="text-align: left; margin-bottom: 2rem;">
                ${[...this.history].reverse().map(h => `
                    <div style="background: rgba(255,255,255,0.05); padding: 12px; border-radius: 12px; margin-bottom: 8px; border-left: 4px solid var(--primary); display:flex; justify-content:space-between; align-items:center">
                        <div>
                            <span style="color:var(--text-muted); font-size:0.8rem">${h.round}:</span><br>
                            <strong style="color:var(--primary)">${h.winner.text}</strong>
                        </div>
                        <div style="color:var(--text-muted); font-size:0.8rem">vs ${h.loser.text}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    showHome() {
        location.reload();
    }

    shareResults() {
        const text = `En İyi Kategori Testleri'nde turnuvayı kazananım: ${this.history[this.history.length-1].winner.text}! 🏆 Sen de dene: ${window.location.href}`;
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

const app = new QuizApp();
