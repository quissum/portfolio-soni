function css(el) {
  Object.assign(el.style, {
    transform: `translateX(0px)`,
    transform: `translateY(0px)`,
    transition: 'all 1s ease-in-out',
    opacity: 1,
  })
}

export class Animate {
  static init(selector) {
    const array = Array.from(document.querySelectorAll(selector))
    this.element = this.element?.length ? this.element.concat(array) : array

    document.addEventListener('scroll', this.scroll.bind(this))
    this.scroll()
  }

  static scroll() {
    const windowHeight = window.innerHeight

    this.element.forEach(el => {
      const { top } = el.getBoundingClientRect()

      if (top - windowHeight < 0) {
        setTimeout(() => {
          css(el)
        }, 400)
      }
    })
  }
}

Animate.init('.anim-left')
Animate.init('.anim-right')
Animate.init('.anim-top')
Animate.init('.anim-opacity')
