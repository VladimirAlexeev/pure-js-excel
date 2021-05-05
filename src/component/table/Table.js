import { ExcelComponent } from './../../core/ExcelComponent'
import { createTable } from './table.template';

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
       console.log(123)
     }
  }

  onMousemove() {
    console.log('onMousemove')
  }

  onMouseup() {
    console.log('onMouseup')
  }
}