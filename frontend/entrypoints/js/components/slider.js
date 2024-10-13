import Swiper from 'swiper/bundle';
class Slider {
  constructor({ container, options = {} }) {
    this.container = container;
    this.options = options;
    this.slider = null;
  }

  init() {
    this.slider = new Swiper(this.container, this.options);
  }
}

export default Slider;
