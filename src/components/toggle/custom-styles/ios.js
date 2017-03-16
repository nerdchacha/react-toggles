export function getStyle (
  fontSize,
  onProps,
  offProps
) {
  let onBackground = '#13bf11'
  if(onProps && onProps.style && onProps.style.backgroundColor) {
    onBackground = onProps.style.backgroundColor
  }
  let onColor = 'white'
  if(onProps && onProps.style && onProps.style.color) {
    onColor = onProps.style.color
  }
  let onToggleBorder = '#13bf11'
  if(onProps && onProps.style && onProps.style.toggleBorder) {
    onToggleBorder = onProps.style.toggleBorder
  }
  let onButtonBorder = '#13bf11'
  if(onProps && onProps.style && onProps.style.buttonBorder) {
    onButtonBorder = onProps.style.buttonBorder
  }


  let offBackground = 'white'
  if(offProps && offProps.style && offProps.style.backgroundColor) {
    offBackground = offProps.style.backgroundColor
  }
  let offColor = 'black'
  if(offProps && offProps.style && offProps.style.color) {
    offColor = offProps.style.color
  }
  let offToggleBorder = '#d3d3d3'
  if(offProps && offProps.style && offProps.style.toggleBorder) {
    offToggleBorder = offProps.style.toggleBorder
  }
  let offButtonBorder = '#d3d3d3'
  if(offProps && offProps.style && offProps.style.buttonBorder) {
    offButtonBorder = offProps.style.buttonBorder
  }
  const wrapperFontSize = fontSize ? `font-size: ${fontSize}em` : ''
  const textFontSize = fontSize ? `${4 * fontSize}px` : `0.25em`
  const buttonFontSize = fontSize ? `${4 * fontSize}px` : `0.5em`
  return `
  & .rc-toggle-wrapper {
    line-height: 0;
    position: relative;
    ${wrapperFontSize};
  }
  & .rc-toggle-wrapper.disabled {
    opacity: 0.4;
  }
  & .rc-toggle-wrapper.disabled .toggle-bar {
    cursor: not-allowed;
  }
  & input {
    max-height: 0;
    max-width: 0;
    opacity: 0;
    position:absolute;
  }
  & input:checked ~ .toggle-bar {
    background: ${onBackground};
    -webkit-transition: background .25s ease-in-out;
    transition: background .25s ease-in-out;
    box-shadow: inset 0 0 0px 0.03em ${onToggleBorder};
    color: ${onColor};
  }
  & input:checked ~ .toggle-bar .toggle-text {
    -webkit-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }
  & input:checked ~ .toggle-bar .toggle-button {
    left: 50%;
    -webkit-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
    box-shadow: inset 0 0 0px 0.03em ${onButtonBorder};
  }
  & .toggle-bar {
    cursor: pointer;
    color: ${offColor};
    box-shadow: inset 0 0 0px 0.03em ${offToggleBorder};
    background: ${offBackground};
    box-sizing: border-box;
    height: 0.5em;
    width: 1em;
    border-radius: 0.25em;
    overflow: hidden;
    top: 0;
    -webkit-transition: background .25s ease-in-out;
    transition: background .25s ease-in-out;
    position: relative;
    -webkit-transition: all .25s ease-in-out;
    transition: all .25s ease-in-out;
  }
  & .toggle-bar .toggle-text {
    font-size: ${textFontSize};
    height: 100%;
    width: 90%;
    display: table;
    table-layout: fixed;
    margin: 0 auto;
  }
  & .toggle-bar .toggle-text > span {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  & .toggle-bar .toggle-button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-shadow: inset 0 0 0px 0.03em ${offButtonBorder};
    box-sizing: border-box;
    background-color: #fff;
    position: absolute;
    width: 0.5em;
    height: 0.5em;
    border-radius: 100%;
    top: 0;
    left: 0;
    -webkit-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }
  & .toggle-bar .toggle-button span {
    font-size: ${buttonFontSize};
    color: black;
  }`
}
