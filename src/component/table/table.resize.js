import {$} from '../../core/dom'

export function resizeHandler($root, event) {
  return new Promise(resolve => {
    const $resizer = $(event.target)
    //  const $parent = $resizer.$el.parentNode <-- bad implementation 
    //  const $parent = $resizer.$el.closest('.column') <-- better but still bad
    const $parent = $resizer.closest('[data-type="resizable"]')
    const elementCoords = $parent.getCoords()
    const type = $resizer.data.resize
    const sideProp = type === 'col' ? 'bottom' : 'right'
    let value;

    $resizer.css({
      opacity: 1,
      [sideProp]: '-5000px'
    })

    document.onmousemove = e => {
      if (type === 'col') {
        const delta = Math.floor(e.pageX - elementCoords.right) // round
        value = elementCoords.width + delta
        // $parent.css({width: value + 'px' })
        $resizer.css({ right: -delta + 'px' });
        // cells.forEach(el => el.style.width = value + 'px')
      } else {
        const delta = Math.floor(e.pageY - elementCoords.bottom) // round
        value = elementCoords.height + delta
        $resizer.css({ bottom: -delta + 'px' });
      }
    }
    document.onmouseup = () => {
      document.onmousemove = null // clear event
      document.onmouseup = null // clear event

      if (type === 'col') {
        $parent.css({width: value + 'px' });
        $root.findAll(`[data-col="${$parent.data.col}"]`).forEach(el => el.style.width = value + 'px')
      } else {
        $parent.css({height: value + 'px' })
      }

      resolve({
        value,
        id: type === 'col' ? $parent.data.col : null
      })

      $resizer.css({
        opacity: 0,
        bottom: 0,
        right: 0
      })
    }
  });
}