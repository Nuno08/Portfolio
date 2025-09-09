const traducoes = {
      pt: {
        anchorLogoIndex: 'Meu Portfólio',
        liHome: 'Início',
        liAboutMe: 'Sobre mim',
        liProjects: 'Projetos',
        liContact: 'Contacto',
        headingIndex: 'Desenvolvedor Full Stack Júnior',
        pIndex: 'Focado em criar soluções eficientes e inovadoras, com uma forte vontade de aprender e crescer em todas as etapas do desenvolvimento de software.',
        headingAboutMe: 'Sobre mim',
        pAboutMe: 'Desenvolvedor Full Stack Júnior com formação técnica e superior em Tecnologias e Programação de Sistemas de Informação. Tenho experiência prática em desenvolvimento front-end e back-end, adquirida por meio de estágios, projetos próprios e estudos contínuos. Trabalho com HTML, CSS, JavaScript, React, Bootstrap, Kotlin, C, C++ e Figma na construção de interfaces funcionais e responsivas. No back-end, utilizo PHP, Node.js, Java, SQL e Supabase, com foco em criação de APIs, autenticação e integração com bancos de dados relacionais. Também tenho familiaridade com ferramentas como Postman para testes de APIs e Git para versionamento de código. Sou autodidata, adaptável e movido por desafios. Busco oportunidades como desenvolvedor júnior ou estagiário para aplicar os meus conhecimentos, colaborar com profissionais experientes e seguir evoluindo na área.',
        headingContact: 'Contacto',
        pPhone: 'Telemovel : +351 960328740',
        pInfo: 'Para mais informação baixar o curriculo:',
        anchorDownloadCV: 'Baixar',
        headingCardTitle1: 'Projeto Guia de Transporte',
        pCard1: 'Protótipo de gestão de guias de transporte com integração ao Supabase para autenticação. Tecnologias utilizadas: HTML, CSS, JS, Bootstrap, SQL, Supabase.',
        headingCardTitle2:'Projeto CSS',
        pCard2:'Animações em css. Tecnologias utilizadas: HTML, CSS.',
        headingCardTitle3:'Projeto Login',
        pCard3:'Protótipo de página de login. Tecnologias utilizadas: HTML, CSS, JS, PHP, Bootstrap, SQL, Supabase.',
        anchorGitHub1:'Ver Repositório',
        anchorGitHub2:'Ver Repositório',
        anchorGitHub3:'Ver Repositório'
    },
      en: {
        anchorLogoIndex: 'My Portfolio',
        liHome: 'Home',
        liAboutMe: 'About Me',
        liProjects: 'Projects',
        liContact: 'Contact',
        headingIndex: 'Junior Full Stack Developer',
        pIndex: 'Focused on building efficient and innovative solutions, with a strong will to learn and grow through all stages of software development.',
        headingAboutMe: 'About Me',
        pAboutMe:'Junior Full Stack Developer with technical and higher education in Information Systems Technologies and Programming. I have practical experience in front-end and back-end development, gained through internships, personal projects, and continuous studies. I work with HTML, CSS, JavaScript, React, Bootstrap, Kotlin, C, C++, and Figma to build functional and responsive interfaces. On the back-end, I use PHP, Node.js, Java, SQL, and Supabase, focusing on API creation, authentication, and integration with relational databases. I am also familiar with tools like Postman for API testing and Git for code versioning. I am self-taught, adaptable, and driven by challenges. I am seeking opportunities as a junior developer or intern to apply my knowledge, collaborate with experienced professionals, and continue growing in the field.',
        headingContact: 'Contact',
        pPhone: 'Phone number : +351 960328740',
        pInfo: 'For more information, download the resume:',
        anchorDownloadCV: 'Download',
        headingCardTitle1: 'Transport Guide Project',
        pCard1: 'Prototype for managing transport guides with Supabase integration for authentication. Technologies used: HTML, CSS, JS, Bootstrap, SQL, Supabase.',
        headingCardTitle2:'CSS Project',
        pCard2:'CSS animations. Technologies used: HTML, CSS.',
        headingCardTitle3:'Login Project',
        pCard3:'Login page prototype. Technologies used: HTML, CSS, JS, PHP, Bootstrap, SQL, Supabase.',
        anchorGitHub1:'View Repository',
        anchorGitHub2:'View Repository',
        anchorGitHub3:'View Repository'

    }
    };

    // Função que aplica as traduções
    function aplicarTraducoes(lang) {
      const textos = traducoes[lang];
      Object.keys(textos).forEach(id => {
        const el = document.getElementById(id);
        if(el) {
          el.textContent = textos[id];
        }
      });
      const cvLink = document.getElementById('anchorDownloadCV');
    if(cvLink){
        if(lang === 'pt'){
            document.getElementById('anchorDownloadCV').href='assets/NunoCV.pdf';
        }else if (lang === 'en') {
            document.getElementById('anchorDownloadCV').href = 'assets/NunoCV_EN_Final.pdf';
        }
    }
      document.documentElement.lang = lang;
      localStorage.setItem('lang', lang);
    }

    // Detecta idioma salvo ou usa inglês por padrão
    const idiomaAtual = localStorage.getItem('lang') || 'en';
    aplicarTraducoes(idiomaAtual);

    // Configura os botões para trocar idioma
    document.getElementById('btnPT').addEventListener('click', () => aplicarTraducoes('pt'));
    document.getElementById('btnEN').addEventListener('click', () => aplicarTraducoes('en'));