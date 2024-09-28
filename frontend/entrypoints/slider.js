import EmblaCarousel from 'embla-carousel';

const emblaNode = document.querySelectorAll('.embla');

emblaNode.forEach((node) => {
  const options = { loop: false, align: 'center' };
  const emblaApi = EmblaCarousel(node, options);
});
