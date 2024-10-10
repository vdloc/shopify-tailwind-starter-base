class Tabs {
  constructor({
    container,
    activeClass = [],
    tabSelector,
    tabContentSelector,
  }) {
    if (!container) return;

    this.container = container;
    this.tabs = this.container.querySelectorAll(tabSelector);
    this.tabsContent = this.container.querySelectorAll(tabContentSelector);
    this.classes = {
      active: activeClass,
      tab: tabSelector,
      content: tabContentSelector,
    };
  }
  init() {
    this.onTabClick = this.onTabClick.bind(this);

    if (this.tabs) {
      this.tabs.forEach((tab) => {
        tab.addEventListener('click', this.onTabClick);
      });
    }
  }

  onTabClick(event) {
    const tab = event.currentTarget;
    const tabID = tab.dataset.tabId;
    const activeTabContent = this.container.querySelector(`#${tabID}`);

    this.tabs.forEach((tab) => {
      tab.classList.remove(...this.classes.active);
    });

    this.tabsContent.forEach((tabContent) => {
      tabContent.classList.add(...['tw-opacity-0', 'tw-invisible', '-tw-z-10']);
    });

    if (activeTabContent) {
      activeTabContent.classList.remove(
        ...['tw-opacity-0', 'tw-invisible', '-tw-z-10'],
      );
    }

    tab.classList.add(...this.classes.active);
  }
}

export default Tabs;
