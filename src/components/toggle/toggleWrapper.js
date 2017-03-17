import React, {Component, PropTypes} from 'react'

import InlineStyleWrapper from './inlineStyleWrapper'

class ToggleWrapper extends Component {
  render () {
    let {fontSize, onProps, offProps, toggleIcon, getStyle, ...rest} = this.props
    let style = getStyle(fontSize, onProps, offProps, toggleIcon)
    if(!onProps) onProps = {}
    if(!offProps) offProps = {}
    if(this.props.showDefaultText) onProps.component = onProps.component || 'ON'
    if(this.props.showDefaultText) offProps.component = offProps.component || 'OFF'
    return(
      <InlineStyleWrapper
        style={style}
        onProps={onProps}
        offProps={offProps}
        toggleIcon={toggleIcon}
        {...rest}
      />
    )
  }
}

ToggleWrapper.propTypes = {
  fontSize: PropTypes.number,
  getStyle: PropTypes.func.isRequired,
  showDefaultText: PropTypes.bool,
  type: PropTypes.string,
  toggleIcon: PropTypes.shape({
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

