import React, { Component } from 'react'
import { render } from 'react-dom'
import IosToggle from './components/toggle/ios'
import SkewToggle from './components/toggle/skewed'
import FlipToggle from './components/toggle/flip'
import FontAwesome from 'react-fontawesome'
require('./style.css')

class App extends Component {
  constructor () {
    super()
    this.state = {checked: false}
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount () {
    setTimeout(() => this.setState({checked: true}), 2000)
  }
  handleChange (value) {
    console.log(value)
  }
  render () {
    return(
      <div className='container'>
        <h2>Welcome to react toggles</h2>
        <h3>Ios Toggle</h3>
        <IosToggle
          toggleIcon={<FontAwesome name='times' />}
          onProps={{component: <FontAwesome name='rocket' />}}
          offProps={{style: {backgroundColor: 'red', color: 'white'}, component: <FontAwesome name='times' />}}
        />
        <h3>Skew Toggle</h3>
        <SkewToggle />
        <h3>Flip Toggle</h3>
        <FlipToggle />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
