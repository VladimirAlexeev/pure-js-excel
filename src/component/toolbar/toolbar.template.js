function toButton(button) {
  const meta = `
    data-type="button",
    data-value='${JSON.stringify(button.value)}'
  `;
  return `
    <div
      class="button ${button.active ? 'active' : ''}"
      ${meta}
    >
      <i class="material-icons" ${meta}>format_${button.name}</i>
    </div>
  `
}

export function createToolbar(state) {
  const buttons = [
    {
      name: 'align_left',
      active: state['textAlign'] === 'left',
      value: {textAlign: 'left'}
    },
    {
      name: 'align_center',
      active: state['textAlign'] === 'center',
      value: {textAlign: 'center'}
    },
    {
      name: 'align_right',
      active: state['textAlign'] === 'right',
      value: {textAlign: 'right'}
    },
    {
      name: 'bold',
      active: state['fontWeight'] === 'bold',
      value: {fontWeight: state['fontWeight'] === 'bold' ? 'normal' : 'bold'}
    },
    {
      name: 'italic',
      active: state['formStyle'] === 'italic',
      value: {formStyle: state['formStyle'] === 'italic' ? 'normal' : 'italic'}
    },
    {
      name: 'underlined',
      active: state['textDecoration'] === 'underline',
      value: {textDecoration: state['textDecoration'] === 'underline' ? 'none' : 'underline'}
    }
  ];
  return buttons.map(toButton).join('')
}