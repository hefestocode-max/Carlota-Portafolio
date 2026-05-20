document.addEventListener('DOMContentLoaded', () => {

  /* NAV scroll */
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Gallery: thumbs + main swiper */
  if (typeof Swiper !== 'undefined') {
    const thumbsEl  = document.querySelector('.project-thumbs');
    const mainEl    = document.querySelector('.project-swiper');
    if (mainEl) {
      let thumbsSwiper = null;
      if (thumbsEl) {
        thumbsSwiper = new Swiper('.project-thumbs', {
          slidesPerView: 'auto',
          spaceBetween: 10,
          freeMode: true,
          watchSlidesProgress: true,
        });
      }
      new Swiper('.project-swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 700,
        autoplay: { delay: 4500, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        },
        thumbs: thumbsSwiper ? { swiper: thumbsSwiper } : undefined,
      });
    }
  }

});
