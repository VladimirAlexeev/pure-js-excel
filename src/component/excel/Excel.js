import {$} from '../../core/dom';

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || []
  }

  getRoot() {
    // const $root = document.createElement('div')
    const $root = $.create('div', 'excel');
    // $root.classList.add('excel')
    
    this.components = this.components.map(Component => {
      // const $el = document.createElement('div')
      const $el = $.create('div', Component.className);
      // $el.classList.add(Component.className)
      const component = new Component($el);
      //DEBUG
      // if (component.name) {
      //   window['c' + component.name] = component
      // }
      // $el.innerHTML = component.toHTML()
      $el.html(component.toHTML())
      $root.append($el)
      return component;
    })

    return $root;
  }

  render() {
    // afterbegin, afterend, beforeend, beforebegin
    // this.$el.insertAdjacentHTML('afterbegin', `<h1>TEST!!!</h1>`)

    this.$el.append(this.getRoot())

    this.components.forEach(component => component.init());
  }
}