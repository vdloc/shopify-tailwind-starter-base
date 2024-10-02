import './slider-CI2ofp6W.js';
import { T as c } from './tabs-T9UuDaT1.js';
(function () {
  const r = document.createElement('link').relList;
  if (r && r.supports && r.supports('modulepreload')) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === 'childList')
        for (const o of t.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && i(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === 'use-credentials'
        ? (t.credentials = 'include')
        : e.crossOrigin === 'anonymous'
        ? (t.credentials = 'omit')
        : (t.credentials = 'same-origin'),
      t
    );
  }
  function i(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = s(e);
    fetch(e.href, t);
  }
})();
const n = new c({
  containerSelector: '.product-slider-tab-section',
  activeClass: ['tw-border-b-2', 'tw-border-b-black'],
  tabSelector: '.tab',
  tabContentSelector: '.tab-content',
});
n.init();
