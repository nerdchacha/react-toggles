import React, { Component } from 'react'
import { render } from 'react-dom'
import IosToggle from './components/toggle/ios'
import SkewToggle from './components/toggle/skewed'
import FlipToggle from './components/toggle/flip'
require('./style.css')

class App extends Component {
  render () {
    return(
      <div className='container'>
        <h2>Welcome to react toggles</h2>
        <h3>Ios Toggle</h3>
        <IosToggle />
        <h3>Skew Toggle</h3>
        <SkewToggle />
        <h3>Flip Toggle</h3>
        <FlipToggle />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
