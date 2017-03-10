import {expect, assert} from 'chai'
import React from 'react'
import ReactDOM from 'react-dom'
import renderPage from './tools/renderPage'
import FlipToggleButton from '../src/components/toggle/flip'
import shared from './shared'

describe('Flip toggle', function () {
  describe('Basic', function () {
    before(async function () {
      this.page = renderPage(<FlipToggleButton />)
    })
    after(function () {
      ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.page.get(0)).parentNode)
    })
    it('Should render flip toggle', function () {
      expect(this.page.find('FlipToggle').length).to.eq(1)
    })
  })

  describe('Default Checked', function () {
    before(async function () {
      this.page = renderPage(React.createElement(FlipToggleButton, {checked: true}))
    })
    after(function () {
      ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.page.get(0)).parentNode)
    })
    shared.renderCheckedToggle()
    shared.notRenderCheckedToggle()
  })

  describe('Default Unchecked', function () {
    before(async function () {
      this.page = renderPage(React.createElement(FlipToggleButton, {checked: false}))
    })
    after(function () {
      ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.page.get(0)).parentNode)
    })
    shared.renderUncheckedToggle()
    shared.notRenderUncheckedToggle()
  })

  describe('On check', function () {
    before(async function () {
      this.page = renderPage(React.createElement(FlipToggleButton, {checked: false}))
    })
    after(function () {
      ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.page.get(0)).parentNode)
    })
    shared.checkOnClick()
  })

  describe('On uncheck', function () {
    before(async function () {
      this.page = renderPage(React.createElement(FlipToggleButton, {checked: true}))
    })
    after(function () {
      ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.page.get(0)).parentNode)
    })
    shared.uncheckOnClick()
  })

  describe('On change', function () {
    before(async function () {
      this.page = renderPage(React.createElement(FlipToggleButton, {
        checked: true,
        handleChange: (value) => {
        this.value = value
      }}))
    })
    after(function () {
      ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.page.get(0)).parentNode)
    })
    shared.fireHandleChange()
    shared.notFireHandleChange()
  })
})
