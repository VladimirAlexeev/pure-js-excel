export class Emitter {
  constructor() {
    this.listeners = {}
  }

// dispatch, fire, trigger
// Notify listeners if they has
// event is string
// args is parameters
// ex: table.emit('table:select', {a: 1})
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    });

    return true;
  }

// on, listen
// Subscribe to notification
// Add listener
// ex: formula.subscribe('table:select', () => {})
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);

    // for unsubscribe, prevent memory leak
    return () => {
      this.listeners[event] = this.listeners[event].filter(listener => listener !== fn)
    }
  }
}

// Example
// const emitter = new Emitter()

// const unsub = emitter.subscribe('test', data => console.log('Sub:', data))

// emitter.emit('test', 22222);

// setTimeout(() => {
//   emmiter.emit('test', 'After 2 seconds')
// }, 2000)

// setTimeout(() => {
//   unsub()
// }, 3000)

// setTimeout(() => {
//   emmiter.emit('test', 'After 4 seconds')
// }, 4000)