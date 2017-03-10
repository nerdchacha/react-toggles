import React, {Component, PropTypes} from 'react'

import InlineStyleWrapper from './inlineStyleWrapper'

class ToggleWrapper extends Component {
  render () {
    let {fontSize, onProps, offProps, getStyle, ...rest} = this.props
    let style = getStyle(fontSize, onProps, offProps)
    if(!onProps) onProps = {}
    if(!offProps) offProps = {}
    onProps.component = onProps.component || 'ON'
    offProps.component = offProps.component || 'OFF'
    return(
      <InlineStyleWrapper
        style={style}
        onProps={onProps}
        offProps={offProps}
        {...rest}
        />
    )
  }
}

ToggleWrapper.propTypes = {
  fontSize: PropTypes.number,
  getStyle: PropTypes.func.isRequired,
  type: PropTypes.string,
  onProps: PropTypes.shape({
    component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    style: PropTypes.shape({
      backgroundColor: PropTypes.string,
      color: PropTypes.string,
      toggleBorder: PropTypes.string,
      buttonBorder: PropTypes.string,
    }),
  }),
  offProps: PropTypes.shape({
    component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    style: PropTypes.shape({
      backgroundColor: PropTypes.string,
      color: PropTypes.string,
      toggleBorder: PropTypes.string,
      buttonBorder: PropTypes.string,
    }),
  }),
}

export default ToggleWrapper

