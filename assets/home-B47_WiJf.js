import { S as c } from './slider-01Z2Rk7D.js';
import { T as l } from './tabs-K9tH8dLm.js';
(function () {
  const r = document.createElement('link').relList;
  if (r && r.supports && r.supports('modulepreload')) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
  new MutationObserver((e) => {
    for (const s of e)
      if (s.type === 'childList')
        for (const n of s.addedNodes)
          n.tagName === 'LINK' && n.rel === 'modulepreload' && i(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(e) {
    const s = {};
    return (
      e.integrity && (s.integrity = e.integrity),
      e.referrerPolicy && (s.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : e.crossOrigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    );
  }
  function i(e) {
    if (e.ep) return;
    e.ep = !0;
    const s = o(e);
    fetch(e.href, s);
  }
})();
function d() {
  const t = document.querySelector('.hero-section'),
    r = t == null ? void 0 : t.querySelector('.swiper');
  r && new c({ container: r }).init();
}
function a() {
  const t = document.querySelector('.product-slider-tab-section'),
    r = {
      slidesPerView: 'auto',
      centeredSlides: !0,
      centeredSlidesBounds: !0,
      spaceBetween: 15,
      breakpoints: {
        520: { slidesPerView: 2, spaceBetween: 20 },
        992: { slidesPerView: 3, spaceBetween: 30 },
        1200: { slidesPerView: 4, spaceBetween: 40 },
      },
    };
  if (t) {
    const o = new l({
      container: t,
      activeClass: ['tw-border-b-2', 'tw-border-b-black'],
      tabSelector: '.tab',
      tabContentSelector: '.tab-content',
    });
    o.tabsContent.forEach((i) => {
      new c({
        container: i,
        options: {
          ...r,
          pagination: {
            el: i.querySelector('.swiper-pagination'),
            type: 'progressbar',
          },
          navigation: {
            nextEl: i.querySelector('.swiper-button-next'),
            prevEl: i.querySelector('.swiper-button-prev'),
          },
        },
      }).init();
    }),
      o.init();
  }
}
function u() {
  const t = document.querySelector('.product-carousel-section'),
    r = t == null ? void 0 : t.querySelector('.swiper'),
    o = {
      slidesPerView: 'auto',
      centeredSlides: !0,
      centeredSlidesBounds: !0,
      spaceBetween: 15,
      breakpoints: {
        520: { slidesPerView: 2, spaceBetween: 20 },
        992: { slidesPerView: 3, spaceBetween: 30, centeredSlides: !1 },
        1200: { slidesPerView: 4, spaceBetween: 40 },
      },
    };
  r && new c({ container: r, options: { ...o } }).init();
}
d();
a();
u();
