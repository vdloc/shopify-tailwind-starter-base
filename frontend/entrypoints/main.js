import 'vite/modulepreload-polyfill';
import './slider.js';
import Tabs from './tabs.js';

const productsTabs = new Tabs({
  containerSelector: '.product-slider-tab-section',
  activeClass: ['tw-border-b-2', 'tw-border-b-black'],
  tabSelector: '.tab',
  tabContentSelector: '.tab-content',
});

productsTabs.init();
