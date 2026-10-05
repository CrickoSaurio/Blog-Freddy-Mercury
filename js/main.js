/* Navegación compartida, reproducción persistente y pequeñas interacciones. */
(() => {
  const pages = [
    ['index.html', 'Inicio'], ['pages/biografia.html', 'Biografía'],
    ['pages/queen.html', 'Queen'], ['pages/musica.html', 'Música'],
    ['pages/presentaciones.html', 'Presentaciones'], ['pages/legado.html', 'Legado'],
    ['pages/fuentes.html', 'Fuentes'],
  ];
  const normalizedPath = () => window.location.pathname.replace(/\\/g, '/');
  const rootPath = () => {
    const path = normalizedPath();
    return path.includes('/pages/') ? path.slice(0, path.indexOf('/pages/') + 1) : path.slice(0, path.lastIndexOf('/') + 1);
  };
  const siteRoot = `${window.location.origin}${rootPath()}`;
  const currentFile = () => normalizedPath().split('/').pop() || 'index.html';
  const pageUrl = (path) => `${siteRoot}${path}`;

  function buildNavigation(mount, className, label, markCurrent = false) {
    const nav = document.createElement('nav');
    nav.className = className;
    nav.setAttribute('aria-label', label);
    pages.forEach(([path, text]) => {
      const link = document.createElement('a');
      link.href = pageUrl(path);
      link.textContent = text;
      if (markCurrent && currentFile() === path.split('/').pop()) link.setAttribute('aria-current', 'page');
      nav.append(link);
    });
    mount.replaceWith(nav);
    return nav;
  }

  const header = document.querySelector('.site-header');
  if (header) {
    const nav = buildNavigation(header.querySelector('[data-site-nav]'), 'site-nav', 'Navegación principal', true);
    const menuButton = document.createElement('button');
    menuButton.className = 'menu-toggle';
    menuButton.type = 'button';
    menuButton.setAttribute('aria-label', 'Abrir menú de navegación');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-controls', 'main-navigation');
    menuButton.innerHTML = '<span></span><span></span><span></span>';
    nav.id = 'main-navigation';
    nav.before(menuButton);
    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!expanded));
      menuButton.setAttribute('aria-label', expanded ? 'Abrir menú de navegación' : 'Cerrar menú de navegación');
      nav.classList.toggle('is-open', !expanded);
    });

    /* El mismo elemento de audio vive en la cabecera, fuera del contenido que se navega. */
    const audio = new Audio(pageUrl('files/dont_stop_me_now_original.mp3'));
    audio.preload = 'auto';
    audio.loop = true;
    audio.volume = 0.025;
    const controls = document.createElement('div');
    controls.className = 'audio-controls';
    controls.innerHTML = '<button class="audio-play" type="button" aria-label="Reproducir música de fondo" aria-pressed="false"><span aria-hidden="true">▶</span></button><label class="volume-control"><span class="volume-icon" aria-hidden="true">♪</span><span class="sr-only">Volumen de la música de fondo</span><input type="range" min="0" max="1" step="0.01" value="0.1" aria-label="Volumen de la música de fondo"></label>';
    header.append(controls);
    const playButton = controls.querySelector('.audio-play');
    const volumeSlider = controls.querySelector('input[type="range"]');

    function syncAudioControls() {
      const playing = !audio.paused;
      playButton.setAttribute('aria-pressed', String(playing));
      playButton.setAttribute('aria-label', playing ? 'Pausar música de fondo' : 'Reproducir música de fondo');
      playButton.querySelector('span').textContent = playing ? 'Ⅱ' : '▶';
      volumeSlider.value = String(audio.volume);
      volumeSlider.style.setProperty('--volume-level', `${audio.volume * 100}%`);
    }
    playButton.addEventListener('click', async () => {
      if (audio.paused) {
        try { await audio.play(); } catch (error) { console.warn('No se pudo reproducir el audio:', error); }
      } else audio.pause();
      syncAudioControls();
    });
    volumeSlider.addEventListener('input', () => {
      audio.volume = Number(volumeSlider.value);
      syncAudioControls();
    });
    audio.addEventListener('play', syncAudioControls);
    audio.addEventListener('pause', syncAudioControls);
    syncAudioControls();
    window.__freddieBackgroundAudio = audio;
  }

  function renderFooter() {
    const existing = document.querySelector('.site-footer');
    if (existing) return;
    const mount = document.querySelector('[data-site-footer]');
    if (!mount) return;
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `<div class="footer-main"><div><p class="footer-title">Freddie Mercury — Una vida detrás de una leyenda</p><p class="footer-copy">Proyecto educativo realizado para la materia de Lenguaje.</p><p class="footer-copy student-credit">ADEMAR ALEXANDER ALVAREZ GUARACHI · 6TO B</p></div><div data-site-nav></div></div><div class="footer-bottom"><p>Este sitio tiene fines educativos.</p><p>La música y su historia siguen vivas.</p></div>`;
    mount.replaceWith(footer);
    buildNavigation(footer.querySelector('[data-site-nav]'), 'footer-nav', 'Navegación del pie de página');
  }
  renderFooter();

  function updateCurrentNavigation() {
    const file = currentFile();
    document.querySelectorAll('.site-nav a').forEach((link) => {
      const isCurrent = new URL(link.href).pathname.split('/').pop() === file;
      if (isCurrent) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  const memberContent = {
    freddie: { name: 'Freddie Mercury', role: 'Vocalista y pianista', description: 'Freddie Mercury fue el vocalista principal de Queen y una de las figuras centrales de su identidad artística. Su voz, creatividad y presencia escénica fueron elementos fundamentales para el desarrollo de la banda.', image: 'https://s03.s3c.es/imag/_v0/640x600/8/c/3/freddie-mercury.jpg' },
    brian: { name: 'Brian May', role: 'Guitarrista y compositor', description: 'Brian May es el guitarrista de Queen y uno de sus principales compositores. Su estilo de guitarra y el característico sonido de su instrumento se convirtieron en elementos fundamentales de la identidad musical de la banda.', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9oPSdDlP0hpTQQYQ4u6JUGwzLGtiORTEwIhyEi3gNNkpR25JPtftSB-V9WAmkXciFDTFVijASfI7w23TBVnQZrjDtbdfg0GooO_g6LyHEJ2E4QwiJqaSyd5xzQCBNeFxd9DLArFd1hX5C/s1600/Brian_may.jpg' },
    roger: { name: 'Roger Taylor', role: 'Baterista y compositor', description: 'Roger Taylor fue el baterista de Queen y también participó como compositor y vocalista. Su personalidad musical aportó otra dimensión al sonido de la banda.', image: 'https://thisisrock.es/web2020/wp-content/uploads/2021/08/Roger-Taylor-con-KT-TunstallLa-revista-con-la-m%C3%BAsica-que-es-importante-en-tu-vida-Classic-Rock-Hard-Rock-Heavy-Metal-Prog-Rock-Blues.jpeg' },
    john: { name: 'John Deacon', role: 'Bajista y compositor', description: 'John Deacon fue el bajista de Queen y uno de sus compositores. Aunque mantuvo una personalidad más reservada que sus compañeros, participó en algunas de las canciones más reconocidas de la banda.', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Queen_News_Of_The_World_%281977_Press_Kit_Photo_07%29_John_Deacon.jpg/960px-Queen_News_Of_The_World_%281977_Press_Kit_Photo_07%29_John_Deacon.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail' },
  };

  function initPageContent() {
    const timeline = document.querySelector('[data-timeline]');
    if (timeline) {
      const items = [...timeline.querySelectorAll('.timeline-item')];
      const selectItem = (item) => {
        if (!item) return;
        items.forEach((entry) => {
          const selected = entry === item;
          entry.classList.toggle('active', selected);
          entry.querySelector('.timeline-year').setAttribute('aria-expanded', String(selected));
        });
      };
      timeline.addEventListener('click', (event) => {
        const button = event.target.closest('.timeline-year');
        if (button) selectItem(button.closest('.timeline-item'));
      });

      /* El año más próximo al centro del viewport recibe el foco durante el scroll. */
      if ('IntersectionObserver' in window) {
        const timelineObserver = new IntersectionObserver((entries) => {
          const visible = entries.filter((entry) => entry.isIntersecting);
          if (!visible.length) return;
          const focusY = window.innerHeight * 0.46;
          const closest = visible.reduce((best, entry) => {
            const distance = Math.abs(entry.boundingClientRect.top + entry.boundingClientRect.height / 2 - focusY);
            return !best || distance < best.distance ? { item: entry.target.closest('.timeline-item'), distance } : best;
          }, null);
          if (closest) selectItem(closest.item);
        }, { rootMargin: '-35% 0px -45% 0px', threshold: 0 });
        items.forEach((item) => timelineObserver.observe(item.querySelector('.timeline-year')));
      }
    }

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

    const revealItems = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealItems.forEach((item) => revealObserver.observe(item));
    } else revealItems.forEach((item) => item.classList.add('is-visible'));
  }
  initPageContent();

  /* Navegación interna por fetch: el main cambia y el Audio de la cabecera sigue sonando. */
  async function navigate(url, { push = true } = {}) {
    const destination = new URL(url, window.location.href);
    if (destination.origin !== window.location.origin) return;
    const response = await fetch(destination.href);
    if (!response.ok) throw new Error(`No se pudo abrir ${destination.href}`);
    const markup = await response.text();
    const nextDocument = new DOMParser().parseFromString(markup, 'text/html');
    const nextMain = nextDocument.querySelector('main');
    const currentMain = document.querySelector('main');
    if (!nextMain || !currentMain) return;
    if (push) history.pushState({}, '', destination.href);
    currentMain.replaceWith(document.importNode(nextMain, true));
    document.title = nextDocument.title;
    updateCurrentNavigation();
    const nav = document.querySelector('.site-nav');
    nav?.classList.remove('is-open');
    const menu = document.querySelector('.menu-toggle');
    menu?.setAttribute('aria-expanded', 'false');
    menu?.setAttribute('aria-label', 'Abrir menú de navegación');
    window.scrollTo({ top: 0, behavior: 'instant' });
    initPageContent();
  }

  document.addEventListener('click', async (event) => {
    const link = event.target.closest('a[href]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target || link.hasAttribute('download')) return;
    const destination = new URL(link.href, window.location.href);
    if (destination.origin !== window.location.origin || !destination.pathname.toLowerCase().endsWith('.html')) return;
    event.preventDefault();
    const beginsMusic = link.matches('.hero-content .button-primary') && currentFile() === 'index.html';
    if (beginsMusic && window.__freddieBackgroundAudio) {
      window.__freddieBackgroundAudio.currentTime = 0;
      try { await window.__freddieBackgroundAudio.play(); } catch (error) { console.warn('No se pudo iniciar la música de fondo:', error); }
    }
    try { await navigate(destination.href); }
    catch (error) {
      console.error(error);
      window.location.href = destination.href;
    }
  });

  window.addEventListener('popstate', () => {
    navigate(window.location.href, { push: false }).catch((error) => {
      console.error(error);
      window.location.reload();
    });
  });
})();
