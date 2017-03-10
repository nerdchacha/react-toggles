import React, {Component, PropTypes} from 'react'

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

