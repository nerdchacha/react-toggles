import React, { Component } from 'react'
import { render } from 'react-dom'
import IosToggle from './components/toggle/ios'
import SkewToggle from './components/toggle/skewed'
import FlipToggle from './components/toggle/flip'
require('./style.css')

class App extends Component {
  constructor () {
    super()
    this.state = {checked: false}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (value) {
    console.log(value)
  }
  componentDidMount () {
    setTimeout(() => this.setState({checked: true}), 2000)
  }
  render () {
    return(
      <div className='container'>
        <h2>Welcome to react toggles</h2>
        <h3>Ios Toggle</h3>
        <IosToggle checked={this.state.checked} handleChange={this.handleChange} />
        <h3>Skew Toggle</h3>
        <SkewToggle checked={this.state.checked} handleChange={this.handleChange} />
        <h3>Flip Toggle</h3>
        <FlipToggle checked={this.state.checked} handleChange={this.handleChange} />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
