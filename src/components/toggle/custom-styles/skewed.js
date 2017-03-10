export function getStyle (
  fontSize,
  onProps,
  offProps
) {
  let onBackground = '#86d993'
  if(onProps && onProps.style && onProps.style.backgroundColor) {
    onBackground = onProps.style.backgroundColor
  }
  let onColor = 'white'
  if(onProps && onProps.style && onProps.style.color) {
    onColor = onProps.style.color
  }

  let offBackground = '#888'
  if(offProps && offProps.style && offProps.style.backgroundColor) {
    offBackground = offProps.style.backgroundColor
  }
  let offColor = 'white'
  if(offProps && offProps.style && offProps.style.color) {
    offColor = offProps.style.color
  }
  const wrapperFontSize = fontSize ? `font-size: ${fontSize}em` : ''
  const textFontSize = fontSize ? `${4 * fontSize}px` : `0.25em`
  return `
  & .rc-toggle-wrapper {
    margin-left: 0.05em;
    display: inline-block;
    line-height: 0;
    position: relative;
    ${wrapperFontSize};
  }
  & .rc-toggle-wrapper.disabled {
    opacity: 0.7;
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
  & input:checked ~ label .toggle-bar {
    background: ${onBackground};
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
  }
  & input:checked ~ label .toggle-bar .toggle-text {
    color: ${onColor};
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    left: 0%;
  }
  & .toggle-bar {
    cursor: pointer;
    width: 1em;
    height: 0.5em;
    background-color: ${offBackground};
    -webkit-transform: skew(-10deg);
    transform: skew(-10deg);
    position: relative;
    overflow: hidden;
  }
  & .toggle-bar .toggle-text {
    font-size: ${textFontSize};
    color: ${offColor};
    left: -100%;
    position: absolute;
    height: 100%;
    -webkit-transform: skew(10deg);
    transform: skew(10deg);
    width: 200%;
    display: table;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 0.015625em 0 rgba(0, 0, 0, 0.4);
    table-layout: fixed;
    margin: 0 auto;
  }
  & .toggle-bar .toggle-text > span {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }`
}
