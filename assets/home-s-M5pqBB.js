import { S as c } from './slider-01Z2Rk7D.js';
import { T as l } from './tabs-K9tH8dLm.js';
(function () {
  const r = document.createElement('link').relList;
  if (r && r.supports && r.supports('modulepreload')) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) o(e);
  new MutationObserver((e) => {
    for (const i of e)
      if (i.type === 'childList')
        for (const n of i.addedNodes)
          n.tagName === 'LINK' && n.rel === 'modulepreload' && o(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(e) {
    const i = {};
    return (
      e.integrity && (i.integrity = e.integrity),
      e.referrerPolicy && (i.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : e.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function o(e) {
    if (e.ep) return;
    e.ep = !0;
    const i = s(e);
    fetch(e.href, i);
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
    const s = new l({
      container: t,
      activeClass: ['tw-border-b-2', 'tw-border-b-black'],
      tabSelector: '.tab',
      tabContentSelector: '.tab-content',
    });
    s.tabsContent.forEach((o) => {
      new c({
        container: o,
        options: {
          ...r,
          pagination: {
            el: o.querySelector('.swiper-pagination'),
            type: 'progressbar',
          },
          navigation: {
            nextEl: o.querySelector('.swiper-button-next'),
            prevEl: o.querySelector('.swiper-button-prev'),
          },
        },
      }).init();
    }),
      s.init();
  }
}
function u() {
  const t = document.querySelector('.product-carousel-section'),
    r = t == null ? void 0 : t.querySelector('.swiper'),
    s = {
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
  r && new c({ container: r, options: { ...s } }).init();
}
d();
a();
u();
