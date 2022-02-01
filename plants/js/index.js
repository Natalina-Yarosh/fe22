class ItcTabs {
    constructor(target, config) {
      const defaultConfig = {};
      this._config = Object.assign(defaultConfig, config);
      this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
      this._elButtons = this._elTabs.querySelectorAll('.best__link');
      this._elPanes = this._elTabs.querySelectorAll('.best__block');
      this._eventShow = new Event('tab.itc.change');
      this._init();
      this._events();
    }
    _init() {
      this._elTabs.setAttribute('role', 'tablist');
      this._elButtons.forEach((el, index) => {
        el.dataset.index = index;
        el.setAttribute('role', 'tab');
        this._elPanes[index].setAttribute('role', 'tabpanel');
      });
    }
    show(elLinkTarget) {
      const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
      const elLinkActive = this._elTabs.querySelector('.best__link_active');
      const elPaneShow = this._elTabs.querySelector('.best__block_show');
      if (elLinkTarget === elLinkActive) {
        return;
      }
      elLinkActive ? elLinkActive.classList.remove('best__link_active') : null;
      elPaneShow ? elPaneShow.classList.remove('best__block_show') : null;
      elLinkTarget.classList.add('best__link_active');
      elPaneTarget.classList.add('best__block_show');
      this._elTabs.dispatchEvent(this._eventShow);
      elLinkTarget.focus();
    }
    showByIndex(index) {
      const elLinkTarget = this._elButtons[index];
      elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
      this._elTabs.addEventListener('click', (e) => {
        const target = e.target.closest('.best__link');
        if (target) {
          e.preventDefault();
          this.show(target);
        }
      });
    }
  }
  new ItcTabs('.best__tabs');

//*button*//

var btn = document.querySelector('.best__btn');
btn.onclick = function(e) {
	var block = document.querySelector(".best__block");
  if(block.classList.contains("click")) {
  	block.classList.remove("click");
  } else {
  	block.classList.add("click");
  }
}

//*swiper*//

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });