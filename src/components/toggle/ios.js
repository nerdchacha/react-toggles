import React, {Component, PropTypes} from 'react'

import ToggleWrapper from './toggleWrapper.js'
import {getStyle} from './custom-styles/ios'

class IosToggle extends Component {
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

export default IosToggle

