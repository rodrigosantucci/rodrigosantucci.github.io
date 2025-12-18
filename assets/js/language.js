const translations = {
  "pt-BR": {
    "subtitle": "Transformando Desafios Complexos em Soluções",
    "welcome_text": "Seja bem-vindo ao meu espaço pessoal. Aqui compartilho minha jornada no meio da tecnologia, explorando arquitetura de software, boas práticas e as ferramentas que impulsionam o desenvolvimento moderno. Fique à vontade para explorar os artigos e projetos.",
    "btn_about": "Sobre Mim",
    "btn_posts": "Minhas Postagens",
    "nav_home": "Início",
    "nav_about": "Sobre",
    "nav_about_btn": "Sobre",
    "nav_posts": "Posts",
    "nav_all_posts": "Todas as postagens",
    "nav_all_tags": "Todas as tags"
  },
  "en-US": {
    "subtitle": "Transforming Complex Challenges into Solutions",
    "welcome_text": "Welcome to my personal space. Here I share my journey in technology, exploring software architecture, best practices, and the tools that drive modern development. Feel free to explore articles and projects.",
    "btn_about": "About Me",
    "btn_posts": "My Posts",
    "nav_home": "Home",
    "nav_about": "About",
    "nav_about_btn": "About",
    "nav_posts": "Posts",
    "nav_all_posts": "All Posts",
    "nav_all_tags": "All Tags"
  }
};

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('lang', lang);
  
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update toggle button text
  const langIcon = document.getElementById('lang-icon');
  if (langIcon) {
    langIcon.textContent = lang === 'pt-BR' ? 'EN' : 'PT';
  }
}

function toggleLanguage() {
  const currentLang = localStorage.getItem('lang') || 'pt-BR';
  const newLang = currentLang === 'pt-BR' ? 'en-US' : 'pt-BR';
  setLanguage(newLang);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'pt-BR';
  setLanguage(savedLang);
});
