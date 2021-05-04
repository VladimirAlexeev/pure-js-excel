import { capitalize } from "./utils"

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root  provided to DoMListener!`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDomListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      if(!this[method]) {
        const name = this.name || ''
        throw new Error(`Method '${method}' is not implemented in '${name}' Component`)
      }
      // This logic same as addEventListener, bind this on own context
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
    })
  }

  removeDomListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(method)
      this.$root.off(listener, this[method])
    })
  }
}

// ex. listener = input convert to method name onInput
function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}