export default class Figure {
  constructor(el) {
    this.el = el
    this.lightboxEl = this.el.nextElementSibling?.hasAttribute('data-lightbox') ? this.el.nextElementSibling : null
    this.show = false

    if (this.lightboxEl) {
      this.initInteraction()
    }
  }

  initInteraction() {
    this.el.querySelector('button')?.addEventListener('click', () => {
      this.show = true
      this.render()
    })

    this.lightboxEl.querySelector('button')?.addEventListener('click', () => {
      this.show = false
      this.render()
    })
  }

  keyboardInputListener = (e) => {
    if (e.key === 'Escape') {
      this.show = false
      this.render()
    }
  }

  render() {
    

    if (this.show) {
      this.lightboxEl.classList.add('active')
      document.body.classList.add('frozen')
      document.addEventListener('keydown', this.keyboardInputListener)
    } else {
      this.lightboxEl.classList.remove('active')
      document.body.classList.remove('frozen')
      document.removeEventListener('keydown', this.keyboardInputListener)
    }
  }
}