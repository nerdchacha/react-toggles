import React, {Component, PropTypes} from 'react'

class Toggle extends Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this)
    this.state = {checked: false}
  }
  componentDidMount () {
    this.setChecked(this.props.checked)
  }
  componentWillReceiveProps (nextProps) {
    this.setChecked(nextProps.checked)
  }
  componentDidUpdate (prevProps, prevState) {
    if(prevState.checked !== this.state.checked) this.props.handleChange(this.state.checked)
  }
  setChecked (checked) {
    if(typeof checked !== 'undefined')
      this.setState({checked})
  }
  handleClick (e) {
    if(this.props.disabled) {
      return
    }
    this.setState({checked: !this.state.checked})
    e.stopPropagation()
    this.input.click()
  }
  handleCheckboxClick (e) {
    this.props.handleClick(e)
  }
  render () {
    let {
      attributes,
      onProps,
      offProps,
      toggleIcon,
      disabled,
      type,
    } = this.props
    attributes.id = attributes.id || 'toggle'
    attributes.name = attributes.name || 'toggle'
    const renderOnText = onProps ? onProps.component : ''
    const renderOffText = offProps ? offProps.component : ''
    const renderToggleIcon = toggleIcon ? toggleIcon.component : ''
    const classname = disabled ? 'disabled' : ''

    return (
      <div className={`rc-toggle-wrapper ${type}-toggle ${classname}`}>
        <input
          type='checkbox'
          checked={this.state.checked}
          {...attributes}
          onClick={this.handleCheckboxClick}
          ref={(input) => this.input = input}
        />
        <label htmlFor={attributes.name} />
        <div className='toggle-bar' onClick={this.handleClick}>
          <div className='toggle-text'>
            <span className='on'>{renderOnText}</span>
            <span className='off'>{renderOffText}</span>
          </div>
          <div className='toggle-button'>
            <span>{renderToggleIcon}</span>
          </div>
        </div>
      </div>
    )
  }
}

Toggle.defaultProps = {
  checked: false,
  disabled: false,
  attributes: {},
  handleClick: function () {
    return null
  },
  handleChange: function () {
    return null
  },
}

Toggle.propTypes = {
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  attributes: PropTypes.object,
  handleClick: PropTypes.func,
  handleChange: PropTypes.func,
  toggleIcon: PropTypes.shape({
    component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    style: PropTypes.object,
  }),
  onProps: PropTypes.shape({
    component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    style: PropTypes.object,
  }),
  offProps: PropTypes.shape({
    component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    style: PropTypes.object,
  }),
}

export default Toggle
