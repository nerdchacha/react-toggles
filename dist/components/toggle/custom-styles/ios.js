'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyle = getStyle;
function getStyle(fontSize, onProps, offProps) {
  var onBackground = '#53D769';
  if (onProps && onProps.style && onProps.style.backgroundColor) {
    onBackground = onProps.style.backgroundColor;
  }
  var onColor = 'white';
  if (onProps && onProps.style && onProps.style.color) {
    onColor = onProps.style.color;
  }
  var onToggleBorder = '#53D769';
  if (onProps && onProps.style && onProps.style.toggleBorder) {
    onToggleBorder = onProps.style.toggleBorder;
  }
  var onButtonBorder = '#53D769';
  if (onProps && onProps.style && onProps.style.buttonBorder) {
    onButtonBorder = onProps.style.buttonBorder;
  }

  var offBackground = 'white';
  if (offProps && offProps.style && offProps.style.backgroundColor) {
    offBackground = offProps.style.backgroundColor;
  }
  var offColor = 'black';
  if (offProps && offProps.style && offProps.style.color) {
    offColor = offProps.style.color;
  }
  var offToggleBorder = '#d3d3d3';
  if (offProps && offProps.style && offProps.style.toggleBorder) {
    offToggleBorder = offProps.style.toggleBorder;
  }
  var offButtonBorder = '#d3d3d3';
  if (offProps && offProps.style && offProps.style.buttonBorder) {
    offButtonBorder = offProps.style.buttonBorder;
  }
  var wrapperFontSize = fontSize ? 'font-size: ' + fontSize + 'em' : '';
  var textFontSize = fontSize ? 4 * fontSize + 'px' : '0.25em';
  return '\n  & .rc-toggle-wrapper {\n    line-height: 0;\n    position: relative;\n    ' + wrapperFontSize + ';\n  }\n  & .rc-toggle-wrapper.disabled {\n    opacity: 0.4;\n  }\n  & .rc-toggle-wrapper.disabled .toggle-bar {\n    cursor: not-allowed;\n  }\n  & input {\n    max-height: 0;\n    max-width: 0;\n    opacity: 0;\n    position:absolute;\n  }\n  & input:checked ~ .toggle-bar {\n    background: ' + onBackground + ';\n    -webkit-transition: background .25s ease-in-out;\n    transition: background .25s ease-in-out;\n    box-shadow: inset 0 0 0px 0.03em ' + onToggleBorder + ';\n    color: ' + onColor + ';\n  }\n  & input:checked ~ .toggle-bar .toggle-text {\n    -webkit-transition: .25s ease-in-out;\n    transition: .25s ease-in-out;\n  }\n  & input:checked ~ .toggle-bar .toggle-button {\n    left: 50%;\n    -webkit-transition: .25s ease-in-out;\n    transition: .25s ease-in-out;\n    box-shadow: inset 0 0 0px 0.03em ' + onButtonBorder + ';\n  }\n  & .toggle-bar {\n    cursor: pointer;\n    color: ' + offColor + ';\n    box-shadow: inset 0 0 0px 0.03em ' + offToggleBorder + ';\n    background: ' + offBackground + ';\n    box-sizing: border-box;\n    height: 0.5em;\n    width: 1em;\n    border-radius: 0.25em;\n    overflow: hidden;\n    top: 0;\n    -webkit-transition: background .25s ease-in-out;\n    transition: background .25s ease-in-out;\n    position: relative;\n    -webkit-transition: all .25s ease-in-out;\n    transition: all .25s ease-in-out;\n  }\n  & .toggle-bar .toggle-text {\n    font-size: ' + textFontSize + ';\n    height: 100%;\n    width: 90%;\n    display: table;\n    table-layout: fixed;\n    margin: 0 auto;\n  }\n  & .toggle-bar .toggle-text > span {\n    display: table-cell;\n    vertical-align: middle;\n    text-align: center;\n  }\n  & .toggle-bar .toggle-button {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    box-shadow: inset 0 0 0px 0.03em ' + offButtonBorder + ';\n    box-sizing: border-box;\n    background-color: #fff;\n    position: absolute;\n    width: 0.5em;\n    height: 0.5em;\n    border-radius: 100%;\n    top: 0;\n    left: 0;\n    -webkit-transition: .25s ease-in-out;\n    transition: .25s ease-in-out;\n  }\n  & .toggle-bar .toggle-button > span {\n    font-size: ' + textFontSize + ';\n    color: black;\n  }';
}