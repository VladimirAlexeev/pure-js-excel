import { ExcelComponent } from './../../core/ExcelComponent'
import { createTable } from './table.template';
import { $ } from '../../core/dom'

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
    })
  }

  toHTML() {
    return createTable()
  }

  onClick() {
    console.log('onClick')
  }

  onMousedown(event) {
    //  event.target.getAttribute('data-resize')
     if (event.target.dataset.resize) {
        const $resizer = $(event.target)
      //  const $parent = $resizer.$el.parentNode <-- bad implementation 
      //  const $parent = $resizer.$el.closest('.column') <-- better but still bad
        const $parent = $resizer.closest('[data-type="resizable"]')
        const elementCoords = $parent.getCoords()
        const cells = this.$root.findAll(`[data-col="${$parent.data.col}"]`)

        document.onmousemove = e => {
          const delta = Math.floor(e.pageX - elementCoords.right) // round
          const value = elementCoords.width + delta
          $parent.$el.style.width = value + 'px'
          cells.forEach(el => el.style.width = value + 'px')
        }

       document.onmouseup = () => {
          document.onmousemove = null // clear event
       }
     }
  }

  onMousemove() {
    console.log('onMousemove')
  }

  onMouseup() {
    console.log('onMouseup')
  }
}