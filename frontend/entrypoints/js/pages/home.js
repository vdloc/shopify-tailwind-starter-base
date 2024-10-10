import 'vite/modulepreload-polyfill';
import Slider from '../components/slider.js';
import Tabs from '../components/tabs.js';

function renderHeroSection() {
  const heroSection = document.querySelector('.hero-section');
  const sliderContainer = heroSection?.querySelector('.swiper');

  if (sliderContainer) {
    const slider = new Slider({
      container: sliderContainer,
    });

    slider.init();
  }
}

function renderProductTabsSection() {
  const tabContainer = document.querySelector('.product-slider-tab-section');
  const sliderOptions = {
    slidesPerView: 'auto',
    centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 15,
    breakpoints: {
      520: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  };

  if (tabContainer) {
    const productsTabs = new Tabs({
      container: tabContainer,
      activeClass: ['tw-border-b-2', 'tw-border-b-black'],
      tabSelector: '.tab',
      tabContentSelector: '.tab-content',
    });

    productsTabs.tabsContent.forEach((tabContent) => {
      const slider = new Slider({
        container: tabContent,
        options: {
          ...sliderOptions,
          pagination: {
            el: tabContent.querySelector('.swiper-pagination'),
            type: 'progressbar',
          },
          navigation: {
            nextEl: tabContent.querySelector('.swiper-button-next'),
            prevEl: tabContent.querySelector('.swiper-button-prev'),
          },
        },
      });

      slider.init();
    });

    productsTabs.init();
  }
}

function renderProductCarouselSection() {
  const productCarouselSection = document.querySelector(
    '.product-carousel-section',
  );
  const sliderContainer = productCarouselSection?.querySelector('.swiper');
  const sliderOptions = {
    slidesPerView: 'auto',
    centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 15,
    breakpoints: {
      520: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  };

  if (sliderContainer) {
    const slider = new Slider({
      container: sliderContainer,
      options: {
        ...sliderOptions,
      },
    });

    slider.init();
  }
}

renderHeroSection();
renderProductTabsSection();
renderProductCarouselSection();
