(() => {
  // ns-hugo:/src/assets/scripts/home.js
  function home_default() {
    const cardColor = getComputedStyle(document.querySelector("header")).backgroundColor;
    const mainColor = getComputedStyle(document.querySelector("main")).backgroundColor;
    const renderThemeColor = () => {
      let themeColor = mainColor;
      if (document.querySelector("main").getBoundingClientRect().top > 0) {
        themeColor = cardColor;
      }
      document.querySelector('meta[name="theme-color"]').setAttribute("content", themeColor);
    };
    const renderPage = () => {
      if (document.querySelector("main").getBoundingClientRect().top > 0) {
        document.querySelector("header").classList.remove("show-footer");
      } else {
        document.querySelector("header").classList.add("show-footer");
      }
    };
    window.addEventListener("scroll", renderThemeColor);
    window.addEventListener("scroll", renderPage);
    renderPage();
    renderThemeColor();
  }

  // ns-hugo:/src/assets/scripts/figure.js
  var Figure = class {
    constructor(el) {
      this.el = el;
      this.lightboxEl = this.el.nextElementSibling?.hasAttribute("data-lightbox") ? this.el.nextElementSibling : null;
      this.show = false;
      if (this.lightboxEl) {
        this.initInteraction();
      }
    }
    initInteraction() {
      this.el.querySelector("button")?.addEventListener("click", () => {
        this.show = true;
        this.render();
      });
      this.lightboxEl.querySelector("button")?.addEventListener("click", () => {
        this.show = false;
        this.render();
      });
    }
    keyboardInputListener = (e) => {
      if (e.key === "Escape") {
        this.show = false;
        this.render();
      }
    };
    render() {
      if (this.show) {
        this.lightboxEl.classList.add("active");
        document.body.classList.add("frozen");
        document.addEventListener("keydown", this.keyboardInputListener);
      } else {
        this.lightboxEl.classList.remove("active");
        document.body.classList.remove("frozen");
        document.removeEventListener("keydown", this.keyboardInputListener);
      }
    }
  };

  // ns-hugo:/src/assets/scripts/transitions.js
  var transitions_default = (els) => {
    const options = {
      // rootMargin: "0px",
      threshold: 0.5
    };
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let elem = entry.target;
          elem.classList.add("transition-active");
        }
      });
    }, options);
    els.forEach((el) => {
      observer.observe(el);
    });
  };

  // <stdin>
  document.addEventListener("DOMContentLoaded", () => {
    if (document.body.classList.contains("home")) {
      home_default();
    }
    transitions_default(document.querySelectorAll(".transition-content"));
    document.querySelectorAll("figure").forEach((el) => {
      new Figure(el);
    });
  });
})();
