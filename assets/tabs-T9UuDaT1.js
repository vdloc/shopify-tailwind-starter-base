class n {
  constructor({
    containerSelector: t,
    activeClass: i = [],
    tabSelector: a,
    tabContentSelector: s,
  }) {
    (this.container = document.querySelector(t)),
      (this.tabs = this.container.querySelectorAll(a)),
      (this.tabsContent = this.container.querySelectorAll(s)),
      (this.classes = { active: i, tab: a, content: s });
  }
  init() {
    (this.onTabClick = this.onTabClick.bind(this)),
      this.tabs.forEach((t) => {
        t.addEventListener('click', this.onTabClick);
      });
  }
  onTabClick(t) {
    const i = t.currentTarget,
      a = i.dataset.tabId,
      s = this.container.querySelector(`#${a}`);
    this.tabs.forEach((c) => {
      c.classList.remove(...this.classes.active);
    }),
      this.tabsContent.forEach((c) => {
        c.classList.add('tw-opacity-0', 'tw-invisible', '-tw-z-10');
      }),
      s && s.classList.remove('tw-opacity-0', 'tw-invisible', '-tw-z-10'),
      i.classList.add(...this.classes.active);
  }
}
export { n as T };
