const pages = document.querySelectorAll('.page');
const navButtons = document.querySelectorAll('.nav-btn');
const actionButtons = document.querySelectorAll('[data-page]');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginMessage = document.getElementById('loginMessage');
const registerMessage = document.getElementById('registerMessage');
const profileName = document.getElementById('profileName');
const profileEmail = document.getElementById('profileEmail');
const favoriteBooks = document.getElementById('favoriteBooks');
const borrowedBooks = document.getElementById('borrowedBooks');
const logoutBtn = document.getElementById('logoutBtn');
const bookGrid = document.getElementById('bookGrid');
const bestsellerGrid = document.getElementById('bestsellerGrid');
const profileEmailValue = document.getElementById('profileEmailValue');
const profileAvatar = document.getElementById('profileAvatar');
const updateProfileForm = document.getElementById('updateProfileForm');
const profileImageInput = document.getElementById('profileImageInput');
const profileNameInput = document.getElementById('profileNameInput');
const currentPasswordForProfile = document.getElementById('currentPasswordForProfile');
const profileUpdateMessage = document.getElementById('profileUpdateMessage');
const changePasswordForm = document.getElementById('changePasswordForm');
const currentPassword = document.getElementById('currentPassword');
const newPassword = document.getElementById('newPassword');
const confirmNewPassword = document.getElementById('confirmNewPassword');
const passwordUpdateMessage = document.getElementById('passwordUpdateMessage');
const favoriteCount = document.getElementById('favoriteCount');
const modal = document.getElementById('bookModal');
const modalTitle = document.getElementById('modalTitle');
const modalAuthor = document.getElementById('modalAuthor');
const modalCategory = document.getElementById('modalCategory');
const modalBio = document.getElementById('modalBio');
const modalDescription = document.getElementById('modalDescription');
const modalClose = document.getElementById('modalClose');
const toast = document.getElementById('toastMessage');
const themeToggle = document.getElementById('themeToggle');
const galleryCategories = document.getElementById('galleryCategories');
const searchCategories = document.getElementById('searchCategories');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const accountTabs = document.querySelectorAll('.account-tab');
const accountLinks = document.querySelectorAll('[data-account]');
let activeGalleryCategory = 'Todos';
let activeSearchCategory = 'Todos';
let activeSearchQuery = '';
const themeKey = 'livroCatalogoTheme';

const defaultUsers = [
  {
    name: 'Usuário Padrão',
    email: 'usuario@livroz.com',
    password: '123456',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    favorites: [],
    borrowed: []
  }
];

function initializeUsers() {
  const users = getUsers();
  if (!users.length) {
    saveUsers(defaultUsers);
  }
}

const books = [
  {
    title: 'O Pequeno Príncipe',
    author: 'Antoine de Saint-Exupéry',
    category: 'Ficção',
    description: 'Uma jornada poética sobre amizade e essência.',
    bio: 'Antoine de Saint-Exupéry foi um aviador e escritor francês, autor de um dos livros mais amados sobre imaginação e inocência.',
    image: 'https://covers.openlibrary.org/b/id/8570014-L.jpg',
    isBestSeller: true
  },
  {
    title: 'A Sombra do Vento',
    author: 'Carlos Ruiz Zafón',
    category: 'Ficção',
    description: 'Mistério literário ambientado em Barcelona dos anos 40.',
    bio: 'Carlos Ruiz Zafón foi um autor espanhol conhecido por suas obras de fantasia urbana e mistério.',
    image: 'https://covers.openlibrary.org/b/id/14032588-L.jpg'
  },
  {
    title: 'A Menina que Roubava Livros',
    author: 'Markus Zusak',
    category: 'Ficção',
    description: 'A história de coragem, livros e esperança durante a Segunda Guerra Mundial.',
    bio: 'Markus Zusak é um escritor australiano que explora temas profundos com sensibilidade e imaginação.',
    image: 'https://covers.openlibrary.org/b/id/8153054-L.jpg'
  },
  {
    title: 'O Conto da Aia',
    author: 'Margaret Atwood',
    category: 'Ficção',
    description: 'Um futuro distópico em que mulheres sobrevivem sob um regime opressor.',
    bio: 'Margaret Atwood é escritora canadense, autora de distopias feministas e premiadas.',
    image: 'https://covers.openlibrary.org/b/id/12369737-L.jpg'
  },
  {
    title: 'Ensaio sobre a Cegueira',
    author: 'José Saramago',
    category: 'Ficção',
    description: 'A humanidade reage ao surto de uma cegueira misteriosa.',
    bio: 'José Saramago foi prêmio Nobel de Literatura e escreveu com um estilo singular e envolvente.',
    image: 'https://covers.openlibrary.org/b/id/10482411-L.jpg'
  },
  {
    title: 'A Revolução dos Bichos',
    author: 'George Orwell',
    category: 'Ficção',
    description: 'Uma fábula política sobre poder e corrupção.',
    bio: 'George Orwell escreveu obras que misturam política, sociedade e crítica cultural.',
    image: 'https://covers.openlibrary.org/b/id/15200524-L.jpg'
  },
  {
    title: 'O Morro dos Ventos Uivantes',
    author: 'Emily Brontë',
    category: 'Ficção',
    description: 'Uma narrativa intensa de amor e vingança na Inglaterra rural.',
    bio: 'Emily Brontë foi poeta e romancista, conhecida por sua obra única e gótica.',
    image: 'https://covers.openlibrary.org/b/id/12818862-L.jpg'
  },
  {
    title: 'O Apanhador no Campo de Centeio',
    author: 'J. D. Salinger',
    category: 'Ficção',
    description: 'Um jovem em crise interior busca sentido no mundo adulto.',
    bio: 'J. D. Salinger escreveu romances marcantes sobre a adolescência americana.',
    image: 'https://covers.openlibrary.org/b/id/9273490-L.jpg'
  },
  {
    title: 'O Sol é para Todos',
    author: 'Harper Lee',
    category: 'Ficção',
    description: 'Um clássico sobre justiça, inocência e racismo no Sul dos EUA.',
    bio: 'Harper Lee escreveu um dos romances mais influentes do século XX.',
    image: 'https://covers.openlibrary.org/b/id/12394034-L.jpg',
    isBestSeller: true
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    category: 'História',
    description: 'Uma breve história da humanidade e seus grandes marcos.',
    bio: 'Yuval Noah Harari é historiador e professor, conhecido por contextualizar o passado humano de forma clara e instigante.',
    image: 'https://covers.openlibrary.org/b/id/8634250-L.jpg',
    isBestSeller: true
  },
  {
    title: 'Guns, Germs, and Steel',
    author: 'Jared Diamond',
    category: 'História',
    description: 'A evolução das sociedades humanas explicada pela geografia e biologia.',
    bio: 'Jared Diamond é cientista e geógrafo, autor de análises influentes sobre civilização.',
    image: 'https://covers.openlibrary.org/b/id/7884018-L.jpg'
  },
  {
    title: 'O Diário de Anne Frank',
    author: 'Anne Frank',
    category: 'História',
    description: 'Relatos de uma família judia escondida durante a Segunda Guerra Mundial.',
    bio: 'Anne Frank se tornou símbolo de resistência e esperança através de suas palavras.',
    image: 'https://covers.openlibrary.org/b/id/8584021-L.jpg'
  },
  {
    title: 'Alexander Hamilton',
    author: 'Ron Chernow',
    category: 'História',
    description: 'A vida do fundador americano que ajudou a criar o sistema financeiro.',
    bio: 'Ron Chernow é biógrafo renomado por suas publicações sobre grandes personalidades.',
    image: 'https://covers.openlibrary.org/b/id/8261375-L.jpg'
  },
  {
    title: 'O Fogo e a Fúria',
    author: 'Michael Wolff',
    category: 'História',
    description: 'Os primeiros 100 dias da administração de Donald Trump.',
    bio: 'Michael Wolff é jornalista investigativo conhecido por coberturas políticas incisivas.',
    image: 'https://covers.openlibrary.org/b/id/8231751-L.jpg'
  },
  {
    title: 'As Veias Abertas da América Latina',
    author: 'Eduardo Galeano',
    category: 'História',
    description: 'Um olhar crítico sobre exploração e colonialismo na América Latina.',
    bio: 'Eduardo Galeano foi escritor e jornalista uruguaio, mestre em história crítica.',
    image: 'https://covers.openlibrary.org/b/id/5416334-L.jpg'
  },
  {
    title: 'História do Século XX',
    author: 'Eric Hobsbawm',
    category: 'História',
    description: 'Panorama das transformações políticas e sociais do século passado.',
    bio: 'Eric Hobsbawm foi historiador britânico e um dos maiores analistas de seu tempo.',
    image: 'https://covers.openlibrary.org/b/id/12370492-L.jpg'
  },
  {
    title: 'A Segunda Guerra Mundial',
    author: 'Antony Beevor',
    category: 'História',
    description: 'Uma narrativa detalhada do conflito que mudou o mundo.',
    bio: 'Antony Beevor é autor de grandes obras históricas e militares.',
    image: 'https://covers.openlibrary.org/b/id/4920012-L.jpg'
  },
  {
    title: 'A História da Filosofia',
    author: 'Will Durant',
    category: 'História',
    description: 'As grandes ideias que moldaram o pensamento ocidental.',
    bio: 'Will Durant escreveu clássicos sobre a evolução cultural e filosófica.',
    image: 'https://covers.openlibrary.org/b/id/12372668-L.jpg'
  },
  {
    title: 'O Imperador',
    author: 'Ryszard Kapuściński',
    category: 'História',
    description: 'Relatos do último imperador etíope e seu regime caótico.',
    bio: 'Ryszard Kapuściński foi jornalista polonês e mestre do relato literário.',
    image: 'https://covers.openlibrary.org/b/id/15144524-L.jpg'
  },
  {
    title: '1984',
    author: 'George Orwell',
    category: 'Distopia',
    description: 'Um clássico sobre vigilância e controle social.',
    bio: 'George Orwell foi um escritor e jornalista britânico que descreveu, com grande visão, um futuro opressivo e totalitário.',
    image: 'https://covers.openlibrary.org/b/id/8745958-L.jpg',
    isBestSeller: true
  },
  {
    title: 'Admirável Mundo Novo',
    author: 'Aldous Huxley',
    category: 'Distopia',
    description: 'Uma sociedade uniforme e cientificamente controlada.',
    bio: 'Aldous Huxley escreveu sobre tecnologia, consciência e liberdade.',
    image: 'https://covers.openlibrary.org/b/id/13623695-L.jpg'
  },
  {
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    category: 'Distopia',
    description: 'Um futuro em que livros são proibidos e queimados pelos bombeiros.',
    bio: 'Ray Bradbury foi romancista e crítico dos perigos da tecnologia e da censura.',
    image: 'https://covers.openlibrary.org/b/id/12993656-L.jpg'
  },
  {
    title: 'O Conto da Aia',
    author: 'Margaret Atwood',
    category: 'Distopia',
    description: 'Um futuro autoritário em que mulheres perdem seus direitos.',
    bio: 'Margaret Atwood é escritora canadense, autora de distopias incisivas.',
    image: 'https://covers.openlibrary.org/b/id/12369737-L.jpg'
  },
  {
    title: 'Laranja Mecânica',
    author: 'Anthony Burgess',
    category: 'Distopia',
    description: 'Juventude violenta e a tentativa de controle social através da cura.',
    bio: 'Anthony Burgess escreveu obras provocativas sobre moralidade e livre-arbítrio.',
    image: 'https://covers.openlibrary.org/b/id/13711573-L.jpg'
  },
  {
    title: 'O Senhor das Moscas',
    author: 'William Golding',
    category: 'Distopia',
    description: 'Garotos perdidos em uma ilha enfrentam a selvageria humana.',
    bio: 'William Golding explorou a natureza humana e o caos social em seus romances.',
    image: 'https://covers.openlibrary.org/b/id/8684447-L.jpg'
  },
  {
    title: 'A Estrada',
    author: 'Cormac McCarthy',
    category: 'Distopia',
    description: 'Pai e filho viajam por uma terra devastada após um apocalipse.',
    bio: 'Cormac McCarthy era conhecido por prosa densa e histórias sombrias.',
    image: 'https://covers.openlibrary.org/b/id/14844146-L.jpg'
  },
  {
    title: 'Brave New World Revisited',
    author: 'Aldous Huxley',
    category: 'Distopia',
    description: 'Ensaios que refletem sobre as tendências sociais previstas no romance.',
    bio: 'Aldous Huxley escreveu não apenas ficção, mas também ensaios sobre cultura.',
    image: 'https://covers.openlibrary.org/b/id/41918-L.jpg'
  },
  {
    title: 'A Última Pergunta',
    author: 'Isaac Asimov',
    category: 'Distopia',
    description: 'História curta sobre inteligência artificial e sobrevivência da humanidade.',
    bio: 'Isaac Asimov foi um dos maiores nomes da ficção científica clássica.',
    image: 'https://covers.openlibrary.org/b/id/14612610-L.jpg'
  },
  {
    title: 'O Hobbit',
    author: 'J.R.R. Tolkien',
    category: 'Aventura',
    description: 'Uma aventura épica rumo ao coração da Terra Média.',
    bio: 'J.R.R. Tolkien foi um filólogo e escritor britânico, criador da Terra Média e de clássicos da fantasia.',
    image: 'https://covers.openlibrary.org/b/id/15121777-L.jpg'
  },
  {
    title: 'A Ilha do Tesouro',
    author: 'Robert Louis Stevenson',
    category: 'Aventura',
    description: 'A caça por um tesouro pirata em uma ilha misteriosa.',
    bio: 'Robert Louis Stevenson escreveu aventuras clássicas que encantam gerações.',
    image: 'https://covers.openlibrary.org/b/id/12370194-L.jpg'
  },
  {
    title: 'Viagem ao Centro da Terra',
    author: 'Jules Verne',
    category: 'Aventura',
    description: 'Uma expedição fantástica até o interior do planeta.',
    bio: 'Jules Verne é um dos pais da ficção científica e aventura literária.',
    image: 'https://covers.openlibrary.org/b/id/12390946-L.jpg'
  },
  {
    title: 'A Volta ao Mundo em 80 Dias',
    author: 'Jules Verne',
    category: 'Aventura',
    description: 'Uma corrida pelo planeta em uma aposta ousada e cheia de perigos.',
    bio: 'Jules Verne transformou ciência e aventura em grandes histórias populares.',
    image: 'https://covers.openlibrary.org/b/id/13689116-L.jpg'
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    category: 'Aventura',
    description: 'Caça ao gigantesco cachalote que simboliza obsessão e destino.',
    bio: 'Herman Melville escreveu narrativa marítima repleta de simbolismo e drama.',
    image: 'https://covers.openlibrary.org/b/id/10544254-L.jpg'
  },
  {
    title: 'As Aventuras de Tom Sawyer',
    author: 'Mark Twain',
    category: 'Aventura',
    description: 'As travessuras de um menino no interior americano do século XIX.',
    bio: 'Mark Twain é um dos maiores humoristas e cronistas da literatura americana.',
    image: 'https://covers.openlibrary.org/b/id/11123954-L.jpg'
  },
  {
    title: 'Robinson Crusoé',
    author: 'Daniel Defoe',
    category: 'Aventura',
    description: 'A luta pela sobrevivência de um náufrago em uma ilha deserta.',
    bio: 'Daniel Defoe escreveu um dos primeiros romances modernos sobre aventura e resiliência.',
    image: 'https://covers.openlibrary.org/b/id/368541-L.jpg'
  },
  {
    title: 'Os Três Mosqueteiros',
    author: 'Alexandre Dumas',
    category: 'Aventura',
    description: 'Heróis, intriga e duelos na corte francesa do século XVII.',
    bio: 'Alexandre Dumas escreveu romances históricos cheios de ação e romance.',
    image: 'https://covers.openlibrary.org/b/id/5277967-L.jpg'
  },
  {
    title: 'A Liga Extraordinária',
    author: 'Alan Moore',
    category: 'Aventura',
    description: 'Um grupo improvável de heróis vitorianos enfrenta perigos fantásticos.',
    bio: 'Alan Moore é autor de quadrinhos aclamados e narrativas ousadas.',
    image: 'https://covers.openlibrary.org/b/id/12755045-L.jpg'
  },
  {
    title: 'O Código Da Vinci',
    author: 'Dan Brown',
    category: 'Aventura',
    description: 'Mistério e suspense em uma corrida por segredos históricos.',
    bio: 'Dan Brown cria thrillers de suspense que misturam arte, história e conspiração.',
    image: 'https://covers.openlibrary.org/b/id/14181680-L.jpg'
  },
  {
    title: 'Mindset',
    author: 'Carol S. Dweck',
    category: 'Desenvolvimento',
    description: 'Como o modo de pensar impacta sucesso e aprendizado.',
    bio: 'Carol S. Dweck é psicóloga e pesquisadora, famosa por estudos sobre mentalidade fixa versus mentalidade de crescimento.',
    image: 'https://covers.openlibrary.org/b/id/746414-L.jpg'
  },
  {
    title: 'Os 7 Hábitos das Pessoas Altamente Eficazes',
    author: 'Stephen R. Covey',
    category: 'Desenvolvimento',
    description: 'Hábitos poderosos para melhorar produtividade e vida pessoal.',
    bio: 'Stephen R. Covey foi educador e autor de livros sobre liderança pessoal e profissional.',
    image: 'https://covers.openlibrary.org/b/id/13122863-L.jpg'
  },
  {
    title: 'Como Fazer Amigos e Influenciar Pessoas',
    author: 'Dale Carnegie',
    category: 'Desenvolvimento',
    description: 'Estratégias clássicas para melhorar comunicação e relacionamento.',
    bio: 'Dale Carnegie foi pioneiro em treinamentos de comunicação e liderança.',
    image: 'https://covers.openlibrary.org/b/id/14598570-L.jpg'
  },
  {
    title: 'A Startup Enxuta',
    author: 'Eric Ries',
    category: 'Desenvolvimento',
    description: 'Como construir empresas ágeis e enxutas em ambientes incertos.',
    bio: 'Eric Ries é empreendedor e autor de metodologias para startups e inovação.',
    image: 'https://covers.openlibrary.org/b/id/7258484-L.jpg'
  },
  {
    title: 'Pense e Enriqueça',
    author: 'Napoleon Hill',
    category: 'Desenvolvimento',
    description: 'Princípios de mentalidade e riqueza que influenciaram milhões.',
    bio: 'Napoleon Hill escreveu um dos primeiros grandes livros de autoajuda financeira.',
    image: 'https://covers.openlibrary.org/b/id/9380637-L.jpg'
  },
  {
    title: 'Essencialismo',
    author: 'Greg McKeown',
    category: 'Desenvolvimento',
    description: 'O poder de focar no que realmente importa para fazer menos, porém melhor.',
    bio: 'Greg McKeown é consultor e autor sobre foco e produtividade.',
    image: 'https://covers.openlibrary.org/b/id/10401970-L.jpg'
  },
  {
    title: 'O Poder do Hábito',
    author: 'Charles Duhigg',
    category: 'Desenvolvimento',
    description: 'Como hábitos moldam nosso comportamento e como mudar rotinas.',
    bio: 'Charles Duhigg é jornalista premiado por explorar ciência e comportamento.',
    image: 'https://covers.openlibrary.org/b/id/13752488-L.jpg'
  },
  {
    title: 'Trabalhe 4 Horas por Semana',
    author: 'Tim Ferriss',
    category: 'Desenvolvimento',
    description: 'Estratégias para ganhar mais tempo e construir negócios leves.',
    bio: 'Tim Ferriss é autor e empreendedor conhecido por seu trabalho em produtividade e estilo de vida.',
    image: 'https://covers.openlibrary.org/b/id/539652-L.jpg'
  },
  {
    title: 'Quem Pensa, Enriquece',
    author: 'Napoleon Hill',
    category: 'Desenvolvimento',
    description: 'Dicas práticas para cultivar uma mentalidade de sucesso.',
    bio: 'Napoleon Hill ajudou a popularizar o conceito de pensamento positivo para resultados.',
    image: 'https://covers.openlibrary.org/b/id/14542536-L.jpg'
  },
  {
    title: 'O Lado Difícil das Situações Difíceis',
    author: 'Ben Horowitz',
    category: 'Desenvolvimento',
    description: 'Lições reais sobre liderança e tomada de decisões em empresas.',
    bio: 'Ben Horowitz é empreendedor e investidor de tecnologia.',
    image: 'https://covers.openlibrary.org/b/id/8436126-L.jpg'
  },
  {
    title: 'Os Segredos da Mente Milionária',
    author: 'T. Harv Eker',
    category: 'Desenvolvimento',
    description: 'Como padrões mentais influenciam riqueza e prosperidade.',
    bio: 'T. Harv Eker é escritor e coach financeiro com foco em mudança de mentalidade.',
    image: 'https://covers.openlibrary.org/b/id/13876089-L.jpg'
  },
  {
    title: 'O Gestor Eficaz',
    author: 'Peter F. Drucker',
    category: 'Desenvolvimento',
    description: 'Princípios de gestão que permanecem relevantes para qualquer líder.',
    bio: 'Peter Drucker foi um dos maiores pensadores de gestão do século XX.',
    image: 'https://covers.openlibrary.org/b/id/12372561-L.jpg'
  },
  {
    title: 'A Arte da Felicidade',
    author: 'Dalai Lama',
    category: 'Desenvolvimento',
    description: 'Reflexões sobre como cultivar uma vida mais plena e compassiva.',
    bio: 'Dalai Lama é líder espiritual tibetano e autor de livros de sabedoria.',
    image: 'https://covers.openlibrary.org/b/id/13710386-L.jpg'
  },
  {
    title: 'O Jeito Harvard de Ser Feliz',
    author: 'Shawn Achor',
    category: 'Desenvolvimento',
    description: 'Ciência da felicidade aplicada ao trabalho e à vida cotidiana.',
    bio: 'Shawn Achor pesquisa como a felicidade influencia sucesso e produtividade.',
    image: 'https://covers.openlibrary.org/b/id/6938464-L.jpg'
  }
];

const storageKey = 'livroCatalogoUsers';
const sessionKey = 'livroCatalogoSession';

function changePage(pageId) {
  pages.forEach((page) => page.classList.toggle('active-page', page.id === pageId));
  navButtons.forEach((button) => button.classList.toggle('active', button.dataset.page === pageId));
  renderPanel();
  if (pageId === 'gallery') {
    renderBooks();
  }
  if (pageId === 'bestsellers') {
    renderBestSellers();
  }
  if (pageId === 'search') {
    renderSearchResults();
  }
}

function getUsers() {
  return JSON.parse(localStorage.getItem(storageKey) || '[]');
}

function saveUsers(users) {
  localStorage.setItem(storageKey, JSON.stringify(users));
}

function getSession() {
  return JSON.parse(localStorage.getItem(sessionKey) || 'null');
}

function saveSession(user) {
  localStorage.setItem(sessionKey, JSON.stringify(user));
}

function clearSession() {
  localStorage.removeItem(sessionKey);
}

function renderBooks() {
  if (!bookGrid) return;
  const filteredBooks = getFilteredBooks('', activeGalleryCategory).slice(0, 12);
  bookGrid.innerHTML = '';
  if (!filteredBooks.length) {
    bookGrid.innerHTML = '<p class="empty-state">Nenhum livro encontrado nessa categoria.</p>';
    return;
  }
  filteredBooks.forEach(({ book, index }) => {
    const card = document.createElement('article');
    card.className = 'book-card';
    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}" />
      <div class="card-body">
        <span class="tag">${book.category}</span>
        <h3>${book.title}</h3>
        <p>${book.description}</p>
        <div class="button-row">
          <button class="save-btn" data-action="save" data-index="${index}">Salvar na estante</button>
          <button class="borrow-btn" data-action="borrow" data-index="${index}">Emprestar</button>
          <button class="info-btn" data-action="info" data-index="${index}">Ver detalhes</button>
        </div>
      </div>
    `;
    bookGrid.appendChild(card);
  });
}

function renderBestSellers() {
  if (!bestsellerGrid) return;
  bestsellerGrid.innerHTML = '';
  books.forEach((book, index) => {
    if (!book.isBestSeller) return;
    const card = document.createElement('article');
    card.className = 'book-card';
    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}" />
      <div class="card-body">
        <span class="tag bestseller">Top</span>
        <h3>${book.title}</h3>
        <p>${book.description}</p>
        <div class="button-row">
          <button class="save-btn" data-action="save" data-index="${index}">Salvar na estante</button>
          <button class="borrow-btn" data-action="borrow" data-index="${index}">Emprestar</button>
          <button class="info-btn" data-action="info" data-index="${index}">Ver detalhes</button>
        </div>
      </div>
    `;
    bestsellerGrid.appendChild(card);
  });
}

function buildCategories() {
  return ['Todos', ...new Set(books.map((book) => book.category))];
}

function renderCategoryFilters(container, type) {
  if (!container) return;
  container.innerHTML = '';
  buildCategories().forEach((category) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'category-pill';
    button.textContent = category;
    button.dataset.category = category;
    const isActive = (type === 'gallery' && category === activeGalleryCategory) || (type === 'search' && category === activeSearchCategory);
    if (isActive) {
      button.classList.add('active');
    }
    container.appendChild(button);
  });
}

function getFilteredBooks(query = '', category = 'Todos') {
  return books
    .map((book, index) => ({ book, index }))
    .filter(({ book }) => {
      const searchTerm = `${book.title} ${book.author} ${book.category}`.toLowerCase();
      const matchesQuery = !query || searchTerm.includes(query.toLowerCase());
      const matchesCategory = category === 'Todos' || book.category === category;
      return matchesQuery && matchesCategory;
    });
}

function renderSearchResults() {
  if (!searchResults) return;
  const results = getFilteredBooks(activeSearchQuery, activeSearchCategory);
  searchResults.innerHTML = '';
  if (!results.length) {
    searchResults.innerHTML = '<p class="empty-state">Nenhum livro encontrado para sua pesquisa.</p>';
    return;
  }
  results.forEach(({ book, index }) => {
    const card = document.createElement('article');
    card.className = 'book-card';
    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}" />
      <div class="card-body">
        <span class="tag">${book.category}</span>
        <h3>${book.title}</h3>
        <p>${book.description}</p>
        <div class="button-row">
          <button class="save-btn" data-action="save" data-index="${index}">Salvar na estante</button>
          <button class="borrow-btn" data-action="borrow" data-index="${index}">Emprestar</button>
          <button class="info-btn" data-action="info" data-index="${index}">Ver detalhes</button>
        </div>
      </div>
    `;
    searchResults.appendChild(card);
  });
}

function switchAccountForm(type) {
  if (!loginForm || !registerForm) return;
  accountTabs.forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.account === type);
  });
  loginForm.classList.toggle('active-form', type === 'login');
  registerForm.classList.toggle('active-form', type === 'register');
  loginMessage.textContent = '';
  registerMessage.textContent = '';
}

function showMessage(element, text, type = 'danger') {
  element.textContent = text;
  element.style.color = type === 'success' ? 'var(--success)' : 'var(--danger)';
}

function handleProfileUpdate(event) {
  event.preventDefault();
  const user = getSession();
  if (!user) {
    showToast('Faça login para alterar o perfil.');
    return;
  }

  const currentPasswordValue = currentPasswordForProfile.value.trim();
  const newNameValue = profileNameInput.value.trim();
  const avatarUrlValue = profileImageInput.value.trim();
  if (!currentPasswordValue) {
    showMessage(profileUpdateMessage, 'Digite a senha atual para atualizar o perfil.');
    return;
  }

  if (currentPasswordValue !== user.password) {
    showMessage(profileUpdateMessage, 'Senha atual incorreta.');
    return;
  }

  const users = getUsers();
  const storedUser = users.find((item) => item.email === user.email);
  if (!storedUser) return;

  let changed = false;
  if (newNameValue && newNameValue !== storedUser.name) {
    storedUser.name = newNameValue;
    changed = true;
  }

  if (avatarUrlValue && avatarUrlValue !== storedUser.avatar) {
    storedUser.avatar = avatarUrlValue;
    changed = true;
  }

  if (!changed) {
    showMessage(profileUpdateMessage, 'Nenhuma alteração encontrada.', 'danger');
    return;
  }

  saveUsers(users);
  saveSession(storedUser);
  renderPanel();
  profileUpdateMessage.textContent = '';
  currentPasswordForProfile.value = '';
  showToast('Perfil atualizado com sucesso!');
}

function handleChangePassword(event) {
  event.preventDefault();
  const user = getSession();
  if (!user) {
    showToast('Faça login para alterar a senha.');
    return;
  }

  const currentPasswordValue = currentPassword.value.trim();
  const newPasswordValue = newPassword.value.trim();
  const confirmNewPasswordValue = confirmNewPassword.value.trim();

  if (!currentPasswordValue || !newPasswordValue || !confirmNewPasswordValue) {
    showMessage(passwordUpdateMessage, 'Preencha todos os campos de senha.');
    return;
  }

  if (currentPasswordValue !== user.password) {
    showMessage(passwordUpdateMessage, 'Senha atual incorreta.');
    return;
  }

  if (newPasswordValue.length < 6) {
    showMessage(passwordUpdateMessage, 'A nova senha deve ter pelo menos 6 caracteres.');
    return;
  }

  if (newPasswordValue !== confirmNewPasswordValue) {
    showMessage(passwordUpdateMessage, 'A confirmação da nova senha não coincide.');
    return;
  }

  const users = getUsers();
  const storedUser = users.find((item) => item.email === user.email);
  if (!storedUser) return;
  storedUser.password = newPasswordValue;
  saveUsers(users);
  saveSession(storedUser);
  changePasswordForm.reset();
  showMessage(passwordUpdateMessage, 'Senha alterada com sucesso!', 'success');
}

function renderPanel() {
  const user = getSession();
  if (user) {
    profileName.textContent = user.name;
    profileEmail.textContent = user.email;
    if (profileEmailValue) profileEmailValue.textContent = user.email;
    if (profileAvatar) profileAvatar.src = user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80';
    if (profileNameInput) profileNameInput.value = user.name || '';
    if (profileImageInput) profileImageInput.value = user.avatar || '';
    if (profileEmailValue) profileEmailValue.textContent = user.email;
    if (favoriteCount) favoriteCount.textContent = (user.favorites || []).length;
    logoutBtn.style.display = 'inline-block';
    renderFavorites(user.favorites || []);
    renderBorrowed(user.borrowed || []);
  } else {
    profileName.textContent = 'Visitante';
    profileEmail.textContent = 'Faça login para acessar sua conta.';
    if (profileEmailValue) profileEmailValue.textContent = '-';
    if (favoriteCount) favoriteCount.textContent = '0';
    logoutBtn.style.display = 'none';
    renderFavorites([]);
    renderBorrowed([]);
  }
}

function saveTheme(theme) {
  localStorage.setItem(themeKey, theme);
}

function getSavedTheme() {
  return localStorage.getItem(themeKey) || 'dark';
}

function updateThemeButton(theme) {
  if (!themeToggle) return;
  themeToggle.textContent = theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro';
}

function applyTheme(theme) {
  document.body.classList.toggle('light-mode', theme === 'light');
  document.documentElement.dataset.theme = theme;
  updateThemeButton(theme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  saveTheme(nextTheme);
  applyTheme(nextTheme);
}

function renderFavorites(favorites) {
  favoriteBooks.innerHTML = '';
  if (!favorites.length) {
    favoriteBooks.innerHTML = '<p class="empty-state">Adicione livros à estante a partir da galeria.</p>';
    return;
  }
  favorites.forEach((book) => {
    const item = document.createElement('div');
    item.className = 'favorite-item';
    item.innerHTML = `
      <strong>${book.title}</strong>
      <p>${book.author}</p>
      <div class="button-row">
        <button class="details-btn" type="button" data-book-index="${book.bookIndex ?? ''}" data-book-title="${book.title}">Detalhes</button>
      </div>
    `;
    favoriteBooks.appendChild(item);
  });
}

function renderBorrowed(borrowed) {
  if (!borrowedBooks) return;
  borrowedBooks.innerHTML = '';
  if (!borrowed.length) {
    borrowedBooks.innerHTML = '<p class="empty-state">Empreste livros na galeria para ver aqui.</p>';
    return;
  }
  borrowed.forEach((book, index) => {
    const item = document.createElement('div');
    item.className = 'favorite-item';
    item.innerHTML = `
      <strong>${book.title}</strong>
      <p>${book.author}</p>
      <div class="button-row">
        <button class="details-btn" type="button" data-book-index="${book.bookIndex ?? ''}" data-book-title="${book.title}">Detalhes</button>
        <button class="return-btn" data-return-index="${index}">Devolver</button>
      </div>
    `;
    borrowedBooks.appendChild(item);
  });
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('active');
  clearTimeout(toast.hideTimeout);
  toast.hideTimeout = setTimeout(() => {
    toast.classList.remove('active');
  }, 2200);
}

function showBookInfo(index) {
  const book = books[index];
  if (!book || !modal) return;
  modalTitle.textContent = book.title;
  modalAuthor.textContent = book.author;
  modalCategory.textContent = book.category;
  modalBio.textContent = book.bio;
  modalDescription.textContent = book.description;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeBookModal() {
  if (!modal) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function addFavorite(bookIndex, button) {
  const user = getSession();
  if (!user) {
    changePage('login');
    return;
  }

  const selectedBook = books[bookIndex];
  const users = getUsers();
  const storedUser = users.find((item) => item.email === user.email);
  if (!storedUser) return;

  storedUser.favorites = storedUser.favorites || [];
  const alreadySaved = storedUser.favorites.some((book) => book.title === selectedBook.title);
  if (!alreadySaved) {
    storedUser.favorites.push({ title: selectedBook.title, author: selectedBook.author, bookIndex });
    saveUsers(users);
    saveSession(storedUser);
    renderPanel();
    showToast('Livro salvo na estante!');
    if (button) {
      button.textContent = 'Adicionado';
      button.classList.add('added');
      button.disabled = true;
      setTimeout(() => {
        button.textContent = 'Salvar na estante';
        button.classList.remove('added');
        button.disabled = false;
      }, 1800);
    }
  } else {
    showToast('Livro já está na sua estante');
  }
}

function borrowBook(bookIndex, button) {
  const user = getSession();
  if (!user) {
    changePage('login');
    return;
  }

  const selectedBook = books[bookIndex];
  const users = getUsers();
  const storedUser = users.find((item) => item.email === user.email);
  if (!storedUser) return;

  storedUser.borrowed = storedUser.borrowed || [];
  const alreadyBorrowed = storedUser.borrowed.some((book) => book.title === selectedBook.title);
  if (!alreadyBorrowed) {
    storedUser.borrowed.push({ title: selectedBook.title, author: selectedBook.author, bookIndex });
    saveUsers(users);
    saveSession(storedUser);
    renderPanel();
    showToast('Livro emprestado! Você pode devolvê-lo no painel.');
    if (button) {
      button.textContent = 'Emprestado';
      button.classList.add('added');
      button.disabled = true;
      setTimeout(() => {
        button.textContent = 'Emprestar';
        button.classList.remove('added');
        button.disabled = false;
      }, 1800);
    }
  } else {
    showToast('Você já pegou este livro emprestado');
  }
}

function returnBorrowed(index) {
  const user = getSession();
  if (!user) return;
  const users = getUsers();
  const storedUser = users.find((item) => item.email === user.email);
  if (!storedUser || !storedUser.borrowed) return;
  storedUser.borrowed.splice(index, 1);
  saveUsers(users);
  saveSession(storedUser);
  renderPanel();
  showToast('Livro devolvido com sucesso');
}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  const users = getUsers();
  const user = users.find((item) => item.email === email && item.password === password);
  if (user) {
    saveSession(user);
    showMessage(loginMessage, 'Login realizado com sucesso!', 'success');
    changePage('userPanel');
    loginForm.reset();
  } else {
    showMessage(loginMessage, 'E-mail ou senha inválidos. Tente novamente.');
  }
});

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('registerName').value.trim();
  const email = document.getElementById('registerEmail').value.trim();
  const password = document.getElementById('registerPassword').value.trim();
  const users = getUsers();

  if (users.some((user) => user.email === email)) {
    showMessage(registerMessage, 'Já existe uma conta com esse e-mail.');
    return;
  }

  const newUser = {
    name,
    email,
    password,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    favorites: [],
    borrowed: []
  };
  users.push(newUser);
  saveUsers(users);
  saveSession(newUser);
  showMessage(registerMessage, 'Conta criada com sucesso!', 'success');
  registerForm.reset();
  changePage('userPanel');
});

if (updateProfileForm) {
  updateProfileForm.addEventListener('submit', handleProfileUpdate);
}

if (changePasswordForm) {
  changePasswordForm.addEventListener('submit', handleChangePassword);
}

logoutBtn.addEventListener('click', () => {
  clearSession();
  renderPanel();
  changePage('home');
});

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    toggleTheme();
  });
}

actionButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const pageId = event.currentTarget.dataset.page;
    if (pageId) {
      changePage(pageId);
    }
  });
});

accountTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    switchAccountForm(tab.dataset.account);
  });
});

accountLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetAccount = link.dataset.account;
    if (targetAccount) {
      switchAccountForm(targetAccount);
    }
  });
});

if (galleryCategories) {
  galleryCategories.addEventListener('click', (event) => {
    const button = event.target.closest('.category-pill');
    if (!button) return;
    activeGalleryCategory = button.dataset.category;
    renderCategoryFilters(galleryCategories, 'gallery');
    renderBooks();
  });
}

if (searchCategories) {
  searchCategories.addEventListener('click', (event) => {
    const button = event.target.closest('.category-pill');
    if (!button) return;
    activeSearchCategory = button.dataset.category;
    renderCategoryFilters(searchCategories, 'search');
    renderSearchResults();
  });
}

if (searchInput) {
  searchInput.addEventListener('input', (event) => {
    activeSearchQuery = event.target.value.trim();
    renderSearchResults();
  });
}

const bookGrids = [bookGrid, bestsellerGrid, searchResults].filter(Boolean);
bookGrids.forEach((grid) => {
  grid.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;
    const action = button.dataset.action;
    const index = Number(button.dataset.index);
    if (action === 'save' && !Number.isNaN(index)) {
      addFavorite(index, button);
    }
    if (action === 'borrow' && !Number.isNaN(index)) {
      borrowBook(index, button);
    }
    if (action === 'info' && !Number.isNaN(index)) {
      showBookInfo(index);
    }
  });
});

if (favoriteBooks) {
  favoriteBooks.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;
    const bookIndex = Number(button.dataset.bookIndex);
    const bookTitle = button.dataset.bookTitle;
    if (!Number.isNaN(bookIndex) && button.dataset.bookIndex !== '') {
      showBookInfo(bookIndex);
      return;
    }
    if (bookTitle) {
      const fallbackIndex = books.findIndex((book) => book.title === bookTitle);
      if (fallbackIndex >= 0) {
        showBookInfo(fallbackIndex);
      }
    }
  });
}

if (borrowedBooks) {
  borrowedBooks.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;
    const bookIndex = Number(button.dataset.bookIndex);
    const bookTitle = button.dataset.bookTitle;
    if (!Number.isNaN(bookIndex) && button.dataset.bookIndex !== '') {
      showBookInfo(bookIndex);
      return;
    }
    if (bookTitle) {
      const fallbackIndex = books.findIndex((book) => book.title === bookTitle);
      if (fallbackIndex >= 0) {
        showBookInfo(fallbackIndex);
        return;
      }
    }
    const returnIndex = Number(button.dataset.returnIndex);
    if (!Number.isNaN(returnIndex)) {
      returnBorrowed(returnIndex);
    }
  });
}

if (modalClose) {
  modalClose.addEventListener('click', closeBookModal);
}

if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target.dataset.close === 'true') {
      closeBookModal();
    }
  });
}

window.addEventListener('load', () => {
  initializeUsers();
  renderCategoryFilters(galleryCategories, 'gallery');
  renderCategoryFilters(searchCategories, 'search');
  renderBooks();
  renderBestSellers();
  renderSearchResults();
  switchAccountForm('login');
  renderPanel();
  applyTheme(getSavedTheme());
});
