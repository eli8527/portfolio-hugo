export default function() {
  const cardColor = getComputedStyle(document.querySelector('header')).backgroundColor;
  const mainColor = getComputedStyle(document.querySelector('main')).backgroundColor;

  const renderThemeColor = () => {
    let themeColor = mainColor;
    if (document.querySelector('main').getBoundingClientRect().top > 0) {
      themeColor = cardColor;
    }
    document.querySelector('meta[name="theme-color"]').setAttribute('content',  themeColor);
  }

  const renderPage = () => {
    if (document.querySelector('main').getBoundingClientRect().top > 0) {
      document.querySelector('header').classList.remove('show-footer');
    } else {
      document.querySelector('header').classList.add('show-footer');
    }
  }

  window.addEventListener('scroll', renderThemeColor);
  window.addEventListener('scroll', renderPage);

  renderPage();
  renderThemeColor();
}
