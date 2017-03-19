import React, {Component, PropTypes} from 'react'
require('./stylesheet/ios.scss')

import ToggleWrapper from './toggleWrapper'
import {getStyle} from './custom-styles/ios'

class IosToggle extends Component {
  render () {
    return(
      <ToggleWrapper
        getStyle={getStyle}
        {...this.props}
      />
    )
  }
}

export default IosToggle

