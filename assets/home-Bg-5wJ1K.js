import { S as c } from './slider-01Z2Rk7D.js';
import { T as a } from './tabs-K9tH8dLm.js';
(function () {
  const r = document.createElement('link').relList;
  if (r && r.supports && r.supports('modulepreload')) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
  new MutationObserver((e) => {
    for (const o of e)
      if (o.type === 'childList')
        for (const s of o.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && i(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(e) {
    const o = {};
    return (
      e.integrity && (o.integrity = e.integrity),
      e.referrerPolicy && (o.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : e.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function i(e) {
    if (e.ep) return;
    e.ep = !0;
    const o = n(e);
    fetch(e.href, o);
  }
})();
function u() {
  const t = document.querySelector('.hero-section'),
    r = t == null ? void 0 : t.querySelector('.swiper');
  r && new c({ container: r }).init();
}
function p() {
  const t = document.querySelector('.product-slider-tab-section'),
    r = {
      slidesPerView: 'auto',
      centeredSlides: !0,
      centeredSlidesBounds: !0,
      spaceBetween: 15,
      breakpoints: {
        520: { slidesPerView: 2, spaceBetween: 20, centeredSlides: !1 },
        992: { slidesPerView: 3, spaceBetween: 43 },
      },
    };
  if (t) {
    const n = new a({
      container: t,
      activeClass: ['tw-border-b-2', 'tw-border-b-black'],
      tabSelector: '.tab',
      tabContentSelector: '.tab-content',
    });
    n.tabsContent.forEach((i) => {
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
      n.init();
  }
}
function f() {
  const t = document.querySelector('.product-carousel-section'),
    r = t == null ? void 0 : t.querySelector('.swiper'),
    n = {
      slidesPerView: 1,
      centeredSlides: !0,
      centeredSlidesBounds: !0,
      spaceBetween: 15,
    };
  r && new c({ container: r, options: { ...n } }).init();
}
function w() {
  const t = document.querySelector('.testimonials-section'),
    r = t == null ? void 0 : t.querySelectorAll('.cover-text'),
    n = t == null ? void 0 : t.querySelector('.swiper'),
    i = {
      slidesPerView: 1,
      spaceBetween: 15,
      breakpoints: {
        520: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 43 },
      },
      autoHeight: !0,
    };
  n &&
    new c({
      container: n,
      options: {
        ...i,
        pagination: {
          el: n.querySelector('.swiper-pagination'),
          type: 'progressbar',
        },
        navigation: {
          nextEl: n.querySelector('.swiper-button-next'),
          prevEl: n.querySelector('.swiper-button-prev'),
        },
      },
    }).init(),
    r.forEach((e) => {
      const o = e.textContent;
      e.textContent = o
        .trim()
        .replace(
          /^(\w)(.+)/g,
          (s, l, d) => `${l}${[...d].map((y) => '*').join('')}`,
        );
    });
}
u();
p();
f();
w();
