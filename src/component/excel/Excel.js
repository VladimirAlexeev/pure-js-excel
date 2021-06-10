import {$} from '../../core/dom';
import { Emitter } from '../../core/Emitter';
import { StoreSubscriber } from '../../core/StoreSubscriber';

export class Excel {
  constructor(options) {
    this.components = options.components || []
    this.store = options.store
    this.emitter = new Emitter();
    this.subscriber = new StoreSubscriber(this.store)
  }

  getRoot() {
    // const $root = document.createElement('div')
    const $root = $.create('div', 'excel');
    // $root.classList.add('excel')
    const componentOptions = {
      emitter: this.emitter,
      store: this.store
    }
    
    this.components = this.components.map(Component => {
      // const $el = document.createElement('div')
      const $el = $.create('div', Component.className);
      // $el.classList.add(Component.className)
      const component = new Component($el, componentOptions);
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

  init() {
    this.subscriber.subscribeComponents(this.components)
    this.components.forEach(component => component.init());
  }

  destroy() {
    this.subscriber.unsubscribeFromStore()
    this.components.forEach(component => component.destroy());
  }
}