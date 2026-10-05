/* Navegación y elementos compartidos para la portada y las páginas internas. */
(() => {
  const pages = [
    ['index.html', 'Inicio'],
    ['pages/biografia.html', 'Biografía'],
    ['pages/queen.html', 'Queen'],
    ['pages/musica.html', 'Música'],
    ['pages/presentaciones.html', 'Presentaciones'],
    ['pages/legado.html', 'Legado'],
    ['pages/fuentes.html', 'Fuentes'],
  ];
  const inPages = window.location.pathname.replace(/\\/g, '/').includes('/pages/');
  const prefix = inPages ? '../' : '';
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('[data-site-nav]').forEach((mount, index) => {
    const nav = document.createElement('nav');
    nav.className = index === 0 ? 'site-nav' : 'footer-nav';
    nav.setAttribute('aria-label', index === 0 ? 'Navegación principal' : 'Navegación del pie de página');
    pages.forEach(([path, label]) => {
      const link = document.createElement('a');
      link.href = prefix + path;
      link.textContent = label;
      if (currentPage === path.split('/').pop()) link.setAttribute('aria-current', 'page');
      nav.append(link);
    });
    mount.replaceWith(nav);
    if (index === 0) {
      const toggle = document.createElement('button');
      toggle.className = 'menu-toggle';
      toggle.type = 'button';
      toggle.setAttribute('aria-label', 'Abrir menú de navegación');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-controls', 'main-navigation');
      toggle.innerHTML = '<span></span><span></span><span></span>';
      nav.id = 'main-navigation';
      nav.before(toggle);
      toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        toggle.setAttribute('aria-label', expanded ? 'Abrir menú de navegación' : 'Cerrar menú de navegación');
        nav.classList.toggle('is-open', !expanded);
      });
      nav.addEventListener('click', (event) => {
        if (event.target.closest('a')) {
          nav.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.setAttribute('aria-label', 'Abrir menú de navegación');
        }
      });
    }
  });

  document.querySelectorAll('[data-site-footer]').forEach((mount) => {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `<div class="footer-main"><div><p class="footer-title">Freddie Mercury — Una vida detrás de una leyenda</p><p class="footer-copy">Proyecto educativo realizado para la materia de Lenguaje.</p></div><div data-site-nav></div></div><div class="footer-bottom"><p>Este sitio tiene fines educativos.</p><p>La música y su historia siguen vivas.</p></div>`;
    mount.replaceWith(footer);
    const navMount = footer.querySelector('[data-site-nav]');
    const nav = document.createElement('nav');
    nav.className = 'footer-nav';
    nav.setAttribute('aria-label', 'Navegación del pie de página');
    pages.forEach(([path, label]) => {
      const link = document.createElement('a');
      link.href = prefix + path;
      link.textContent = label;
      nav.append(link);
    });
    navMount.replaceWith(nav);
  });

  /* Cada año controla una sola ficha abierta y sincroniza su estado accesible. */
  const timeline = document.querySelector('[data-timeline]');
  if (timeline) {
    timeline.addEventListener('click', (event) => {
      const button = event.target.closest('.timeline-year');
      if (!button) return;
      const item = button.closest('.timeline-item');
      timeline.querySelectorAll('.timeline-item').forEach((entry) => {
        const selected = entry === item;
        entry.classList.toggle('active', selected);
        entry.querySelector('.timeline-year').setAttribute('aria-expanded', String(selected));
      });
    });
  }

  /* La cuadrícula conserva visibles a los cuatro músicos; la ficha cambia al seleccionar. */
  const memberContent = {
    freddie: {
      name: 'Freddie Mercury', role: 'Vocalista y pianista',
      description: 'Freddie Mercury fue el vocalista principal de Queen y una de las figuras centrales de su identidad artística. Su voz, creatividad y presencia escénica fueron elementos fundamentales para el desarrollo de la banda.',
      image: 'https://s03.s3c.es/imag/_v0/640x600/8/c/3/freddie-mercury.jpg',
    },
    brian: {
      name: 'Brian May', role: 'Guitarrista y compositor',
      description: 'Brian May es el guitarrista de Queen y uno de sus principales compositores. Su estilo de guitarra y el característico sonido de su instrumento se convirtieron en elementos fundamentales de la identidad musical de la banda.',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9oPSdDlP0hpTQQYQ4u6JUGwzLGtiORTEwIhyEi3gNNkpR25JPtftSB-V9WAmkXciFDTFVijASfI7w23TBVnQZrjDtbdfg0GooO_g6LyHEJ2E4QwiJqaSyd5xzQCBNeFxd9DLArFd1hX5C/s1600/Brian_may.jpg',
    },
    roger: {
      name: 'Roger Taylor', role: 'Baterista y compositor',
      description: 'Roger Taylor fue el baterista de Queen y también participó como compositor y vocalista. Su personalidad musical aportó otra dimensión al sonido de la banda.',
      image: 'https://thisisrock.es/web2020/wp-content/uploads/2021/08/Roger-Taylor-con-KT-TunstallLa-revista-con-la-m%C3%BAsica-que-es-importante-en-tu-vida-Classic-Rock-Hard-Rock-Heavy-Metal-Prog-Rock-Blues.jpeg',
    },
    john: {
      name: 'John Deacon', role: 'Bajista y compositor',
      description: 'John Deacon fue el bajista de Queen y uno de sus compositores. Aunque mantuvo una personalidad más reservada que sus compañeros, participó en algunas de las canciones más reconocidas de la banda.',
      image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Queen_News_Of_The_World_%281977_Press_Kit_Photo_07%29_John_Deacon.jpg/960px-Queen_News_Of_The_World_%281977_Press_Kit_Photo_07%29_John_Deacon.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail',
    },
  };
  const memberCard = document.querySelector('[data-member-card]');
  if (memberCard) {
    const buttons = document.querySelectorAll('[data-member]');
    buttons.forEach((button) => button.addEventListener('click', () => {
      const member = memberContent[button.dataset.member];
      if (!member) return;
      buttons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      memberCard.querySelector('[data-member-image]').src = member.image;
      memberCard.querySelector('[data-member-image]').alt = member.name;
      memberCard.querySelector('[data-member-title]').textContent = member.name;
      memberCard.querySelector('[data-member-role]').textContent = member.role;
      memberCard.querySelector('[data-member-description]').textContent = member.description;
      memberCard.style.animation = 'none';
      requestAnimationFrame(() => { memberCard.style.animation = ''; });
    }));
  }

  /* Reveal discreto al entrar al viewport; conserva el contenido si se reduce el movimiento. */
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          activeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }
})();
