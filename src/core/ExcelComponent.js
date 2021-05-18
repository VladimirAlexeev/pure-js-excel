import { DomListener } from "./DomListener";

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unSubscribers = [];

    this.prepare()
  }

  // Setting component before init
  prepare() {}

  // return template from component
  toHTML() {
    return ''
  }

  // Notify listeners about events
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // Subscribing to event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unSubscribers.push(unsub)
  }
// hook initialize component adding DOM listeners
  init() {
    this.initDomListeners()
  }

  // Delete component clean listeners
  destroy() {
    this.removeDomListeners();
    this.unSubscribers.forEach(unsub => unsub());
  }
}