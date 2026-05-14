/* =====================================================
   ANDREW CUSSENS — CLONE
   main.js — Nav scroll, video toggle, portfolio filter,
             Swiper testimonials, scroll reveal, accordion,
             Lottie icons (on-scroll play)
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- NAV: scroll-based background ---- */
  const nav = document.getElementById('nav');
  const onNavScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 80);
  };
  window.addEventListener('scroll', onNavScroll, { passive: true });
  onNavScroll();

  /* ---- NAV: mobile menu toggle ---- */
  const menuToggle = document.getElementById('menuToggle');
  const navMenu    = document.getElementById('navMenu');
  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  navMenu.querySelectorAll('.nav_link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  /* ---- VIDEO: play/pause toggle ---- */
  const videoToggle = document.getElementById('videoToggle');
  const heroVideo   = document.querySelector('.home_header_video');
  if (videoToggle && heroVideo) {
    const iconPause = videoToggle.querySelector('.icon-pause');
    const iconPlay  = videoToggle.querySelector('.icon-play');
    videoToggle.addEventListener('click', () => {
      if (heroVideo.paused) {
        heroVideo.play();
        iconPause.style.display = '';
        iconPlay.style.display  = 'none';
        videoToggle.setAttribute('aria-label', 'Pause video');
      } else {
        heroVideo.pause();
        iconPause.style.display = 'none';
        iconPlay.style.display  = '';
        videoToggle.setAttribute('aria-label', 'Play video');
      }
    });
  }

  /* ---- PORTFOLIO: filter tabs ---- */
  const filterBtns   = document.querySelectorAll('.common_work_radio-label');
  const portfolioItems = document.querySelectorAll('.common_work_item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      portfolioItems.forEach(item => {
        if (filter === 'all') {
          item.classList.remove('hidden');
        } else {
          const cats = (item.dataset.category || '').toLowerCase();
          item.classList.toggle('hidden', !cats.includes(filter));
        }
      });
    });
  });

  /* ---- SWIPER: testimonials ---- */
  let testimonialsSwiper;
  if (typeof Swiper !== 'undefined') {
    testimonialsSwiper = new Swiper('.testimonials-swiper', {
      slidesPerView: 3,
      spaceBetween: 24,
      loop: true,
      speed: 500,
      autoplay: { delay: 4000, disableOnInteraction: false },
      breakpoints: {
        0:   { slidesPerView: 1, spaceBetween: 16 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        992: { slidesPerView: 3, spaceBetween: 24 },
      },
    });
    const prevBtn = document.getElementById('testimonialsNavPrev');
    const nextBtn = document.getElementById('testimonialsNavNext');
    if (prevBtn) prevBtn.addEventListener('click', () => testimonialsSwiper.slidePrev());
    if (nextBtn) nextBtn.addEventListener('click', () => testimonialsSwiper.slideNext());
  }

  /* ---- SCROLL REVEAL: IntersectionObserver ---- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        // Stagger for grid items
        const siblings = [...(el.parentElement?.querySelectorAll('.js-reveal-item') || [])];
        const idx = siblings.indexOf(el);
        const delay = idx * 80;
        el.style.transitionDelay = delay + 'ms';
        el.classList.add('visible');
        revealObserver.unobserve(el);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.js-reveal, .js-reveal-item').forEach(el => {
    revealObserver.observe(el);
  });

  // CTA parallax-light image on scroll
  const ctaImages = document.querySelectorAll('.common_cta_image');
  window.addEventListener('scroll', () => {
    ctaImages.forEach(img => {
      const rect  = img.closest('.section_common_cta').getBoundingClientRect();
      const ratio = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const clamp = Math.min(Math.max(ratio, 0), 1);
      img.style.transform = `scale(1) translateY(${(clamp - 0.5) * -20}px)`;
    });
  }, { passive: true });

  /* ---- ACCORDION: process section ---- */
  const accordionHeaders = document.querySelectorAll('.common_process_accordion_header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.common_process_accordion_item');
      const body = item.querySelector('.common_process_accordion_body');
      const isOpen = item.classList.contains('open');

      // Close all others
      document.querySelectorAll('.common_process_accordion_item.open').forEach(openItem => {
        openItem.classList.remove('open');
        openItem.querySelector('.common_process_accordion_body').style.display = 'none';
        openItem.querySelector('.common_process_accordion_header').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        body.style.display = 'flex';
        header.setAttribute('aria-expanded', 'true');
      }
    });

    // Keyboard
    header.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); header.click(); }
    });
  });

  /* ---- LOTTIE: load icons on scroll into view ---- */
  const lottieConfigs = [
    { id: 'lottie-ideas',          src: 'https://cdn.prod.website-files.com/67320a38c98681c8990e5633/67320a38c98681c8990e56aa_Ideas%20%26%20Concepts.json' },
    { id: 'lottie-premium',        src: 'https://cdn.prod.website-files.com/67320a38c98681c8990e5633/67320a38c98681c8990e568d_Premium%20Productions.json' },
    { id: 'lottie-budget',         src: 'https://cdn.prod.website-files.com/67320a38c98681c8990e5633/67320a38c98681c8990e56a6_On-Budget.json' },
    { id: 'lottie-trust',          src: 'https://cdn.prod.website-files.com/67320a38c98681c8990e5633/67320a38c98681c8990e56a7_Trust%20%26%20Experience.json' },
    { id: 'lottie-personal',       src: 'https://cdn.prod.website-files.com/67320a38c98681c8990e5633/67320a38c98681c8990e56a8_Personal%20Service.json' },
    { id: 'lottie-award',          src: 'https://cdn.prod.website-files.com/67320a38c98681c8990e5633/67320a38c98681c8990e56a9_Award%20Winning%20Director.json' },
    { id: 'lottie-consultation',   src: 'https://cdn.prod.website-files.com/67320a38c98681c8990e5633/67320a38c98681c8990e56c5_Free%20Consultation.json' },
    { id: 'lottie-conceptual',     src: 'https://cdn.prod.website-files.com/67320a38c98681c8990e5633/67320a38c98681c8990e56c6_Conceptual%20Development.json' },
    { id: 'lottie-preproduction',  src: 'https://cdn.prod.website-files.com/67320a38c98681c8990e5633/67320a38c98681c8990e56ad_Pre-Production%20Planning.json' },
    { id: 'lottie-editing',        src: 'https://cdn.prod.website-files.com/67320a38c98681c8990e5633/67320a38c98681c8990e56ac_Video%20Editing.json' },
    { id: 'lottie-postproduction', src: 'https://cdn.prod.website-files.com/67320a38c98681c8990e5633/67320a38c98681c8990e56ab_Post%20Production%20Editing.json' },
  ];

  const lottieObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && typeof lottie !== 'undefined') {
        const el  = entry.target;
        const cfg = lottieConfigs.find(c => c.id === el.id);
        if (!cfg || el.dataset.lottieLoaded) return;
        el.dataset.lottieLoaded = '1';
        lottie.loadAnimation({
          container: el,
          renderer: 'svg',
          loop: false,
          autoplay: true,
          path: cfg.src,
        });
        lottieObserver.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  lottieConfigs.forEach(cfg => {
    const el = document.getElementById(cfg.id);
    if (el) lottieObserver.observe(el);
  });

  /* ---- HERO: rotating typewriter text ---- */
  const rotatingEl = document.getElementById('heroRotatingText');
  if (rotatingEl) {
    const words     = ['Storyteller', 'Filmmaker', 'Producer'];
    let   wordIdx   = 0;
    let   charIdx   = 0;
    let   deleting  = false;
    const TYPE_MS   = 110;
    const DELETE_MS = 60;
    const PAUSE_MS  = 1800;

    function typeStep() {
      const current = words[wordIdx];
      if (!deleting) {
        charIdx++;
        rotatingEl.textContent = current.slice(0, charIdx);
        if (charIdx === current.length) {
          deleting = true;
          setTimeout(typeStep, PAUSE_MS);
          return;
        }
        setTimeout(typeStep, TYPE_MS);
      } else {
        charIdx--;
        rotatingEl.textContent = current.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          wordIdx  = (wordIdx + 1) % words.length;
          setTimeout(typeStep, 400);
          return;
        }
        setTimeout(typeStep, DELETE_MS);
      }
    }
    setTimeout(typeStep, 800);
  }

  /* ---- SMOOTH ANCHOR SCROLL with nav offset ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH   = nav ? nav.offsetHeight : 80;
      const top    = target.getBoundingClientRect().top + window.scrollY - navH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

});
