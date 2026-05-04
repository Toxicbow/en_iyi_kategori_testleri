// En İyi Kategori Testleri - Script.js (Tournament Version 2.1)
// Dinamik İçerik, Son 16 Modu ve Genişletilmiş Kategori Havuzu

const quizData = {
    categories: [
        {
            id: 'arabalar',
            title: 'Süper Arabalar',
            image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
            items: [
                { text: 'Ferrari F8', media: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae', type: 'image' },
                { text: 'Lamborghini Aventador', media: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b', type: 'image' },
                { text: 'Porsche 911 GT3', media: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70', type: 'image' },
                { text: 'Bugatti Chiron', media: 'https://images.unsplash.com/photo-1566008885218-90abf9200ddb', type: 'image' },
                { text: 'McLaren 720S', media: 'https://images.unsplash.com/photo-1621135802920-133df287f89c', type: 'image' },
                { text: 'Aston Martin DBS', media: 'https://images.unsplash.com/photo-1605515298946-d062f2e9da53', type: 'image' },
                { text: 'Koenigsegg Jesko', media: 'https://images.unsplash.com/photo-1614200187524-dc5b8ec2220a', type: 'image' },
                { text: 'Pagani Huayra', media: 'https://images.unsplash.com/photo-1534093607318-f025413f49cb', type: 'image' },
                { text: 'BMW M5 CS', media: 'https://images.unsplash.com/photo-1555215695-3004980ad54e', type: 'image' },
                { text: 'Mercedes-AMG GT', media: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8', type: 'image' },
                { text: 'Audi R8 V10', media: 'https://images.unsplash.com/photo-1603584173870-7f539f1201ad', type: 'image' },
                { text: 'Tesla Model S Plaid', media: 'https://images.unsplash.com/photo-1617788138017-80ad40651399', type: 'image' },
                { text: 'Rolls Royce Phantom', media: 'https://images.unsplash.com/photo-1631214503951-3751307425bb', type: 'image' },
                { text: 'Bentley Continental GT', media: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537', type: 'image' },
                { text: 'Nissan GT-R Nismo', media: 'https://images.unsplash.com/photo-1594911773159-325cce44454f', type: 'image' },
                { text: 'Toyota Supra Mk5', media: 'https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37', type: 'image' },
                { text: 'Ford Mustang Shelby', media: 'https://images.unsplash.com/photo-1584345604480-1a7f05596f2d', type: 'image' },
                { text: 'Chevrolet Corvette C8', media: 'https://images.unsplash.com/photo-1594038165780-69255a62f831', type: 'image' },
                { text: 'Lotus Emira', media: 'https://images.unsplash.com/photo-1637416067365-2b5e7e8fe8fa', type: 'image' },
                { text: 'Maserati MC20', media: 'https://images.unsplash.com/photo-1620803134913-050f2467d165', type: 'image' }
            ]
        },
        {
            id: 'sehirler',
            title: 'Dünya Şehirleri',
            image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800',
            items: [
                { text: 'İstanbul', media: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200', type: 'image' },
                { text: 'Paris', media: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34', type: 'image' },
                { text: 'New York', media: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9', type: 'image' },
                { text: 'Tokyo', media: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf', type: 'image' },
                { text: 'Roma', media: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5', type: 'image' },
                { text: 'Londra', media: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad', type: 'image' },
                { text: 'Dubai', media: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c', type: 'image' },
                { text: 'Barcelona', media: 'https://images.unsplash.com/photo-1583422409516-2895a77efded', type: 'image' },
                { text: 'Amsterdam', media: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4', type: 'image' },
                { text: 'Rio de Janeiro', media: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5', type: 'image' },
                { text: 'Venedik', media: 'https://images.unsplash.com/photo-1514890547357-a9ee2887ad8e', type: 'image' },
                { text: 'Singapur', media: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd', type: 'image' },
                { text: 'Sidney', media: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9', type: 'image' },
                { text: 'Prag', media: 'https://images.unsplash.com/photo-1519677100203-ad01df32135c', type: 'image' },
                { text: 'Atina', media: 'https://images.unsplash.com/photo-1503152397458-9962b774dfbe', type: 'image' },
                { text: 'Lizbon', media: 'https://images.unsplash.com/photo-1528114039593-4366cc08227d', type: 'image' },
                { text: 'Viyana', media: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af', type: 'image' },
                { text: 'Budapeşte', media: 'https://images.unsplash.com/photo-1551867633-194f125bddfa', type: 'image' },
                { text: 'Kudüs', media: 'https://images.unsplash.com/photo-1544971587-b842c27f8e14', type: 'image' },
                { text: 'Kyoto', media: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e', type: 'image' }
            ]
        },
        {
            id: 'rapciler',
            title: 'Türk Rap Efsaneleri',
            image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800',
            items: [
                { text: 'Ceza', media: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad', type: 'image' },
                { text: 'Sagopa Kajmer', media: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4', type: 'image' },
                { text: 'Ezhel', media: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9', type: 'image' },
                { text: 'Uzi', media: 'https://images.unsplash.com/photo-1514525253361-bee1455c082c', type: 'image' },
                { text: 'Motive', media: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81', type: 'image' },
                { text: 'Çakal', media: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745', type: 'image' },
                { text: 'Gazapizm', media: 'https://images.unsplash.com/photo-1459749411177-042180ce673c', type: 'image' },
                { text: 'Ben Fero', media: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a', type: 'image' },
                { text: 'Fuat Ergin', media: 'https://images.unsplash.com/photo-1504173010664-32509aaefe92', type: 'image' },
                { text: 'Allame', media: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1', type: 'image' },
                { text: 'Sansar Salvo', media: 'https://images.unsplash.com/photo-1520127877038-ed589574483b', type: 'image' },
                { text: 'Hidra', media: 'https://images.unsplash.com/photo-1514533212735-5df27d970db0', type: 'image' },
                { text: 'Şehinşah', media: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee', type: 'image' },
                { text: 'Patron', media: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3c', type: 'image' },
                { text: 'Anıl Piyancı', media: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7', type: 'image' },
                { text: 'Contra', media: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b', type: 'image' },
                { text: 'No.1', media: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4', type: 'image' },
                { text: 'Defkhan', media: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9', type: 'image' }
            ]
        },
        {
            id: 'dijital',
            title: 'Dijital Platformlar',
            image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=800',
            items: [
                { text: 'Netflix', media: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85', type: 'image' },
                { text: 'YouTube', media: 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28', type: 'image' },
                { text: 'Disney+', media: 'https://images.unsplash.com/photo-1605142859862-978be7eba909', type: 'image' },
                { text: 'Amazon Prime', media: 'https://images.unsplash.com/photo-1523474253046-2cd2c78b6ad1', type: 'image' },
                { text: 'HBO Max', media: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf', type: 'image' },
                { text: 'Twitch', media: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41', type: 'image' },
                { text: 'Spotify', media: 'https://images.unsplash.com/photo-1614680376739-414d95ff43df', type: 'image' },
                { text: 'Steam', media: 'https://images.unsplash.com/photo-1590845947376-2638caa89309', type: 'image' },
                { text: 'TikTok', media: 'https://images.unsplash.com/photo-1598124146163-36819847286d', type: 'image' },
                { text: 'Instagram', media: 'https://images.unsplash.com/photo-1611262588024-d12430b98920', type: 'image' },
                { text: 'Twitter (X)', media: 'https://images.unsplash.com/photo-1611605698335-8b1569810432', type: 'image' },
                { text: 'Discord', media: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41', type: 'image' }
            ]
        },
        {
            id: 'oyunlar',
            title: 'Efsane Oyunlar',
            image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=800',
            items: [
                { text: 'GTA V', media: 'https://images.unsplash.com/photo-1589241062272-c0a000072dfa', type: 'image' },
                { text: 'The Witcher 3', media: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf', type: 'image' },
                { text: 'Minecraft', media: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479', type: 'image' },
                { text: 'Red Dead Redemption 2', media: 'https://images.unsplash.com/photo-1509197367373-9bb92f3ef3c2', type: 'image' },
                { text: 'The Last of Us', media: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575', type: 'image' },
                { text: 'God of War', media: 'https://images.unsplash.com/photo-1580234811497-9bd7fd0f56ee', type: 'image' },
                { text: 'Skyrim', media: 'https://images.unsplash.com/photo-1542751371-adc38448a05e', type: 'image' },
                { text: 'Elden Ring', media: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400', type: 'image' },
                { text: 'League of Legends', media: 'https://images.unsplash.com/photo-1542751110-97427bbecf20', type: 'image' },
                { text: 'Valorant', media: 'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8', type: 'image' },
                { text: 'CS:GO / CS2', media: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f', type: 'image' },
                { text: 'Fortnite', media: 'https://images.unsplash.com/photo-1589241062272-c0a000072dfa', type: 'image' },
                { text: 'Call of Duty', media: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f', type: 'image' },
                { text: 'Doom Eternal', media: 'https://images.unsplash.com/photo-1542751371-adc38448a05e', type: 'image' },
                { text: 'Super Mario Odyssey', media: 'https://images.unsplash.com/photo-1612290823901-26f5f3e0984a', type: 'image' },
                { text: 'Zelda: Breath of the Wild', media: 'https://images.unsplash.com/photo-1612290823901-26f5f3e0984a', type: 'image' }
            ]
        },
        {
            id: 'kahramanlar',
            title: 'Süper Kahramanlar',
            image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=800',
            items: [
                { text: 'Iron Man', media: 'https://images.unsplash.com/photo-1623939012331-9994c9695751', type: 'image' },
                { text: 'Batman', media: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3', type: 'image' },
                { text: 'Spider-Man', media: 'https://images.unsplash.com/photo-1635805737707-575885ab0820', type: 'image' },
                { text: 'Superman', media: 'https://images.unsplash.com/photo-1534801738706-979ad51c5144', type: 'image' },
                { text: 'Thor', media: 'https://images.unsplash.com/photo-1636511116231-f199b51c162f', type: 'image' },
                { text: 'Wolverine', media: 'https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35', type: 'image' },
                { text: 'Wonder Woman', media: 'https://images.unsplash.com/photo-1639683400589-980164f77c0c', type: 'image' },
                { text: 'Captain America', media: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf', type: 'image' },
                { text: 'Deadpool', media: 'https://images.unsplash.com/photo-1623939012331-9994c9695751', type: 'image' },
                { text: 'Black Panther', media: 'https://images.unsplash.com/photo-1635805737707-575885ab0820', type: 'image' },
                { text: 'The Flash', media: 'https://images.unsplash.com/photo-1534801738706-979ad51c5144', type: 'image' },
                { text: 'Aquaman', media: 'https://images.unsplash.com/photo-1639683400589-980164f77c0c', type: 'image' }
            ]
        },
        {
            id: 'teknoloji',
            title: 'Teknoloji Markaları',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
            items: [
                { text: 'Apple', media: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9', type: 'image' },
                { text: 'Google', media: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd', type: 'image' },
                { text: 'Tesla', media: 'https://images.unsplash.com/photo-1617788138017-80ad40651399', type: 'image' },
                { text: 'Microsoft', media: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec', type: 'image' },
                { text: 'Samsung', media: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf', type: 'image' },
                { text: 'Sony', media: 'https://images.unsplash.com/photo-1591370874773-51d1a842b68e', type: 'image' },
                { text: 'Amazon', media: 'https://images.unsplash.com/photo-1523474253046-2cd2c78b6ad1', type: 'image' },
                { text: 'Nvidia', media: 'https://images.unsplash.com/photo-1591488320449-011701bb6704', type: 'image' },
                { text: 'Intel', media: 'https://images.unsplash.com/photo-1591488320449-011701bb6704', type: 'image' },
                { text: 'AMD', media: 'https://images.unsplash.com/photo-1591488320449-011701bb6704', type: 'image' },
                { text: 'Meta', media: 'https://images.unsplash.com/photo-1611605698335-8b1569810432', type: 'image' }
            ]
        },
        {
            id: 'meyveler',
            title: 'En Sevilen Meyveler',
            image: 'https://images.unsplash.com/photo-1619566636858-adb3ef26402b?auto=format&fit=crop&q=80&w=800',
            items: [
                { text: 'Karpuz', media: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38', type: 'image' },
                { text: 'Çilek', media: 'https://images.unsplash.com/photo-1464965211904-d72141f5976f', type: 'image' },
                { text: 'Muz', media: 'https://images.unsplash.com/photo-1571771894821-ad996211fdf4', type: 'image' },
                { text: 'Erik', media: 'https://images.unsplash.com/photo-1603184017968-9448ca5d5439', type: 'image' },
                { text: 'Kiraz', media: 'https://images.unsplash.com/photo-1528821128474-27f963b067bf', type: 'image' },
                { text: 'Şeftali', media: 'https://images.unsplash.com/photo-1521495084171-3ad639e3d525', type: 'image' },
                { text: 'Üzüm', media: 'https://images.unsplash.com/photo-1537640538966-79f369b41f8f', type: 'image' },
                { text: 'Mandalina', media: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b', type: 'image' },
                { text: 'Ananas', media: 'https://images.unsplash.com/photo-1550258114-b092e72dd3ef', type: 'image' },
                { text: 'Mango', media: 'https://images.unsplash.com/photo-1553279768-865429fa0078', type: 'image' }
            ]
        },
        {
            id: 'tatil',
            title: 'Tatil Cennetleri',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
            items: [
                { text: 'Bodrum', media: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c', type: 'image' },
                { text: 'Maldivler', media: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8', type: 'image' },
                { text: 'Bali', media: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4', type: 'image' },
                { text: 'Santorini', media: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff', type: 'image' },
                { text: 'İsviçre Alpleri', media: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e', type: 'image' },
                { text: 'Phuket', media: 'https://images.unsplash.com/photo-1589394815804-964ed96aebec', type: 'image' },
                { text: 'Hawaii', media: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d', type: 'image' },
                { text: 'Kapadokya', media: 'https://images.unsplash.com/photo-1643444265739-16629ec2e831', type: 'image' },
                { text: 'Bora Bora', media: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', type: 'image' },
                { text: 'Mikonos', media: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff', type: 'image' }
            ]
        },
        {
            id: 'gelecek',
            title: 'Gelecek Teknolojileri',
            image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
            items: [
                { text: 'Yapay Zeka (AI)', media: 'https://images.unsplash.com/photo-1677442136019-21780ecad995', type: 'image' },
                { text: 'Kuantum Bilgisayar', media: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb', type: 'image' },
                { text: 'Uçan Arabalar', media: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e', type: 'image' },
                { text: 'Mars Kolonisi', media: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9', type: 'image' },
                { text: 'Metaverse', media: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41', type: 'image' },
                { text: 'Nöral Bağlantılar', media: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31', type: 'image' },
                { text: 'Yenilenebilir Enerji', media: 'https://images.unsplash.com/photo-1509391366360-2e959784a276', type: 'image' },
                { text: 'Robotik Cerrahi', media: 'https://images.unsplash.com/photo-1516192511155-07447d483726', type: 'image' }
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
        this.startCount = 0;
        
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
                        <span><i data-lucide="zap" style="width:14px;height:14px;display:inline-block"></i> Dinamik Turnuva</span>
                        <span class="ai-badge" style="color:var(--primary); font-weight:bold">AI GÜNCEL</span>
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
        
        // Dinamik İçerik: Her seferinde farklı 16 veya 8 öğe seç (havuza göre)
        const pool = [...category.items].sort(() => Math.random() - 0.5);
        this.currentRoundItems = pool.length >= 16 ? pool.slice(0, 16) : pool.slice(0, 8); 
        this.startCount = this.currentRoundItems.length;
        
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
        }, 1200);
    }

    getRoundLabel() {
        const count = this.currentRoundItems.length;
        if (count === 16) return "Son 16 Turu";
        if (count === 8) return "Çeyrek Final";
        if (count === 4) return "Yarı Final";
        if (count === 2) return "Büyük Final";
        return `Sıralama`;
    }

    loadMatch() {
        const totalMatches = this.currentRoundItems.length / 2;
        const currentMatchNum = this.matchIndex + 1;
        
        this.elements.roundName.innerText = this.getRoundLabel();
        this.elements.questionCounter.innerText = `Maç: ${currentMatchNum} / ${totalMatches}`;
        
        const totalMatchesEver = this.startCount - 1;
        const progress = (this.history.length / totalMatchesEver) * 100;
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
            const imgUrl = item.media.includes('unsplash.com') 
                ? `${item.media}?auto=format&fit=crop&q=80&w=800` 
                : item.media;
                
            mediaHtml = `<img src="${imgUrl}" 
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
        
        const imgUrl = champion.media.includes('unsplash.com') 
                ? `${champion.media}?auto=format&fit=crop&q=80&w=800` 
                : champion.media;

        let champMedia = champion.type === 'video' 
            ? `<iframe src="${champion.media}?autoplay=1" allowfullscreen></iframe>`
            : `<img src="${imgUrl}" alt="${champion.text}">`;

        this.elements.winnerDisplay.innerHTML = `
            <div class="winner-card">
                <div class="winner-media">${champMedia}</div>
                <div class="winner-name">${champion.text}</div>
                <div style="color:var(--secondary); font-weight:bold; margin-top:0.5rem">🏆 SÜPER ŞAMPİYON 🏆</div>
            </div>
        `;
        
        this.elements.resultsSummary.innerHTML = `
            <p style="margin: 2rem 0 1rem; color: var(--text-muted)">Büyük Turnuva Yolculuğun:</p>
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
        const text = `En İyi Kategori Testleri Büyük Turnuvası'nda şampiyonum: ${this.history[this.history.length-1].winner.text}! 🏆 Sen de dene: ${window.location.href}`;
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
