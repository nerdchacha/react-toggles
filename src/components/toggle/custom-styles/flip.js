export function getStyle (
  fontSize,
  onProps,
  offProps
) {
  let onBackground = '#7FC6A6'
  if(onProps && onProps.style && onProps.style.backgroundColor) {
    onBackground = onProps.style.backgroundColor
  }
  let onColor = 'white'
  if(onProps && onProps.style && onProps.style.color) {
    onColor = onProps.style.color
  }

  let offBackground = '#FF3A19'
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
    position: absolute;
  }
  & .toggle-bar .toggle-text {
    font-size: ${textFontSize};
    width: 4em;
    height: 2em;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    font-family: sans-serif;
    -webkit-perspective: 200px;
    perspective: 200px;
    outline: 0;
    display: block;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  & .toggle-bar .toggle-text span {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 100%;
    -webkit-transition: all .4s ease;
    transition: all .4s ease;
    width: 100%;
    text-align: center;
    position: absolute;
    line-height: 2em;
    font-weight: bold;
    top: 0;
    left: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 0.25em;
  }
  & .toggle-button {
    display: none;
  }
  & input ~ .toggle-bar span.on, input ~ .toggle-bar span.on * {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    -webkit-transition: all .4s ease;
    transition: all .4s ease;
    background: ${onBackground};
    color: ${onColor};
  }
  & input ~ .toggle-bar span.off, input ~ .toggle-bar span.off * {
  -webkit-transition: all .4s ease;
    transition: all .4s ease;
    background: ${offBackground};
    color: ${offColor};
  }
  & input:checked ~ .toggle-bar span.on, input:checked ~ .toggle-bar span.on * {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
  }
  & input:checked ~ .toggle-bar span.off, input:checked ~ .toggle-bar span.off * {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
  `
}
