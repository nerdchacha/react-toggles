import React, {Component, PropTypes} from 'react'
require('./stylesheet/flip.scss')

import ToggleWrapper from './toggleWrapper'
import {getStyle} from './custom-styles/flip'

class FlipToggle extends Component {
  render () {
    return(
      <ToggleWrapper
        getStyle={getStyle}
        showDefaultText
        {...this.props}
      />
    )
  }
}

export default FlipToggle

