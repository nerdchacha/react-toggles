import React, {Component, PropTypes} from 'react'
require('./stylesheet/skew.scss')

import ToggleWrapper from './toggleWrapper'
import {getStyle} from './custom-styles/skewed'

class SkewedToggle extends Component {
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

export default SkewedToggle

