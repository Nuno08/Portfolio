import { useEffect, useState } from 'react';

function TranslationById() {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en');

  const traducoes = {
    pt: {
      headingLogoIndex: 'Meu Portfólio',
      liHome: 'Início',
      liAboutMe: 'Sobre mim',
      liProjects: 'Projetos',
      liContact: 'Contacto',
      headingIndex: 'Desenvolvedor Full Stack Júnior',
      pIndex: 'Focado em criar soluções eficientes e inovadoras, com uma forte vontade de aprender e crescer em todas as etapas do desenvolvimento de software.',
    },
    en: {
      headingLogoIndex: 'My Portfolio',
      liHome: 'Home',
      liAboutMe: 'About Me',
      liProjects: 'Projects',
      liContact: 'Contact',
      headingIndex: 'Junior Full Stack Developer',
      pIndex: 'Focused on building efficient and innovative solutions, with a strong will to learn and grow through all stages of software development.',
    },
  };

  // Aplica as traduções sempre que o idioma muda
  useEffect(() => {
    const textos = traducoes[lang];

    Object.keys(textos).forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.textContent = textos[id];
      }
    });

    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  // Liga os botões ao setLang
  useEffect(() => {
    const btnPT = document.getElementById('btnPT');
    const btnEN = document.getElementById('btnEN');

    const handleClickPT = () => setLang('pt');
    const handleClickEN = () => setLang('en');

    if (btnPT) btnPT.addEventListener('click', handleClickPT);
    if (btnEN) btnEN.addEventListener('click', handleClickEN);

    // Limpa os event listeners ao desmontar
    return () => {
      if (btnPT) btnPT.removeEventListener('click', handleClickPT);
      if (btnEN) btnEN.removeEventListener('click', handleClickEN);
    };
  }, []);

  return null; // Não renderiza nada — só atua no DOM
}

export default TranslationById;