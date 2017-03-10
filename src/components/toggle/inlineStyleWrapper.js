import React, {Component, PropTypes} from 'react'
import InlineCss from 'react-inline-css'

import Toggle from './index'

class StyledToggle extends Component {
  render () {
    let {style, ...rest} = this.props
    return(
      <InlineCss stylesheet={style}>
        <Toggle {...rest} />
      </InlineCss>
    )
  }
}

StyledToggle.propTypes = {
  style: PropTypes.string,
}

export default StyledToggle
