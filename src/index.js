import React, { Component } from 'react'
import { render } from 'react-dom'
import FontAwesome from 'react-fontawesome'

import { Toggle, IosToggle } from '../index'
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
        <Toggle
          type='ios'
          offProps={{component: (<FontAwesome name='times' />)}}
          onProps={{component: (<FontAwesome name='check' />)}}
        />
        <IosToggle
          fontSize={3}
          offProps={{component: (<FontAwesome name='times' />)}}
          onProps={{component: (<FontAwesome name='check' />)}}
        />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
