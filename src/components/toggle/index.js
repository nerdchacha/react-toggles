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
  componentDidUpdate () {
    this.props.handleChange(this.state.checked)
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
      label,
      onProps,
      offProps,
      handleChange,
      toggleIcon,
      disabled,
    } = this.props
    attributes.id = attributes.id || 'toggle'
    const renderOnText = onProps ? onProps.component : ''
    const renderOffText = offProps ? offProps.component : ''
    const classname = disabled ? 'disabled' : ''

    return (
      <div className={`rc-toggle-wrapper ${classname}`}>
        <input
          type='checkbox'
          checked={this.state.checked}
          {...attributes}
          onChange={handleChange}
          onClick={this.handleCheckboxClick}
          ref={(input) => this.input = input}
        />
        <label htmlFor={attributes.name} onClick={this.handleClick}>
          <div className='toggle-bar'>
            <div className='toggle-text'>
              <span className='on'>{renderOnText}</span>
              <span className='off'>{renderOffText}</span>
            </div>
            <div className='toggle-button'>
              <span>{toggleIcon}</span>
            </div>
          </div>
        </label>
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
  handleClick: PropTypes.func,
  attributes: PropTypes.object,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func,
  label: PropTypes.string,
  toggleIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
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
