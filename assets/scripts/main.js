import homeInit from './home';
import Figure from './figure';
import transition from './transitions'

document.addEventListener('DOMContentLoaded', () => {
  if (document.body.classList.contains('home')) {
    homeInit();
  }

  transition(document.querySelectorAll('.transition-content'))

  document.querySelectorAll('figure').forEach((el) => {
    new Figure(el)
  })
});
