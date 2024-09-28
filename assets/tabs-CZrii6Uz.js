class c {
  constructor({
    containerSelector: t,
    activeClass: e = [],
    tabSelector: a,
    tabContentSelector: s,
  }) {
    (this.container = document.querySelector(t)),
      (this.tabs = this.container.querySelectorAll(a)),
      (this.tabsContent = this.container.querySelectorAll(s)),
      (this.classes = { active: e, tab: a, content: s }),
      this.init();
  }
  init() {
    (this.onTabClick = this.onTabClick.bind(this)),
      this.tabs.forEach((t) => {
        t.addEventListener('click', this.onTabClick);
      });
  }
  onTabClick(t) {
    const e = t.currentTarget,
      a = e.dataset.tabId,
      s = this.container.querySelector(`#${a}`);
    this.tabs.forEach((i) => {
      i.classList.remove(...this.classes.active);
    }),
      this.tabsContent.forEach((i) => {
        i.style.display = 'none';
      }),
      s && (s.style.display = 'block'),
      e.classList.add(...this.classes.active);
  }
}
new c({
  containerSelector: '.product-slider-tab-section',
  activeClass: ['tw-border-b-2', 'tw-border-b-black'],
  tabSelector: '.tab',
  tabContentSelector: '.tab-content',
});
