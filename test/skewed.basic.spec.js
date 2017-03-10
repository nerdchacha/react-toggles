import {expect, assert} from 'chai'
import React from 'react'
import ReactDOM from 'react-dom'
import renderPage from './tools/renderPage'
import SkewedToggleButton from '../src/components/toggle/skewed'
import shared from './shared'

describe('Skewed toggle', function () {
  describe('Basic', function () {
    before(async function () {
      this.page = renderPage(<SkewedToggleButton />)
    })
    after(function () {
      ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.page.get(0)).parentNode)
    })
    it('Should render skewed toggle', function () {
      expect(this.page.find('SkewedToggle').length).to.eq(1)
    })
  })

  describe('Default Checked', function () {
    before(async function () {
      this.page = renderPage(React.createElement(SkewedToggleButton, {checked: true}))
    })
    after(function () {
      ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.page.get(0)).parentNode)
    })
    shared.renderCheckedToggle()
    shared.notRenderCheckedToggle()
  })

  describe('Default Unchecked', function () {
    before(async function () {
      this.page = renderPage(React.createElement(SkewedToggleButton, {checked: false}))
    })
    after(function () {
      ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.page.get(0)).parentNode)
    })
    shared.renderUncheckedToggle()
    shared.notRenderUncheckedToggle()
  })

  describe('On check', function () {
    before(async function () {
      this.page = renderPage(React.createElement(SkewedToggleButton, {checked: false}))
    })
    after(function () {
      ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.page.get(0)).parentNode)
    })
    shared.checkOnClick()
  })

  describe('On uncheck', function () {
    before(async function () {
      this.page = renderPage(React.createElement(SkewedToggleButton, {checked: true}))
    })
    after(function () {
      ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.page.get(0)).parentNode)
    })
    shared.uncheckOnClick()
  })

  describe('On change', function () {
    before(async function () {
      this.page = renderPage(React.createElement(SkewedToggleButton, {
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
