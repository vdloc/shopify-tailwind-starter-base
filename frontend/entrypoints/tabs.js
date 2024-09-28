class Tabs {
  constructor({
    containerSelector,
    activeClass = [],
    tabSelector,
    tabContentSelector,
  }) {
    this.container = document.querySelector(containerSelector);
    this.tabs = this.container.querySelectorAll(tabSelector);
    this.tabsContent = this.container.querySelectorAll(tabContentSelector);
    this.classes = {
      active: activeClass,
      tab: tabSelector,
      content: tabContentSelector,
    };
    this.init();
  }
  init() {
    this.onTabClick = this.onTabClick.bind(this);
    this.tabs.forEach((tab) => {
      tab.addEventListener('click', this.onTabClick);
    });
  }

  onTabClick(event) {
    const tab = event.currentTarget;
    const tabID = tab.dataset.tabId;
    const activeTabContent = this.container.querySelector(`#${tabID}`);

    this.tabs.forEach((tab) => {
      tab.classList.remove(...this.classes.active);
    });

    this.tabsContent.forEach((tabContent) => {
      tabContent.style.display = 'none';
    });

    if (activeTabContent) {
      activeTabContent.style.display = 'block';
    }

    tab.classList.add(...this.classes.active);
  }
}

new Tabs({
  containerSelector: '.product-slider-tab-section',
  activeClass: ['tw-border-b-2', 'tw-border-b-black'],
  tabSelector: '.tab',
  tabContentSelector: '.tab-content',
});
