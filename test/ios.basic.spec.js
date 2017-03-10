import {expect, assert} from 'chai'
import React from 'react'
import ReactDOM from 'react-dom'
import renderPage from './tools/renderPage'
import IosToggleButton from '../src/components/toggle/ios'
import shared from './shared'

describe('Ios toggle', function () {
  describe('Basic', function () {
    before(async function () {
      this.page = renderPage(<IosToggleButton />)
    })
    after(function () {
      ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.page.get(0)).parentNode)
    })
    it('Should render ios toggle', function () {
      expect(this.page.find('IosToggle').length).to.eq(1)
    })
  })

  describe('Default Checked', function () {
    before(async function () {
      this.page = renderPage(React.createElement(IosToggleButton, {checked: true}))
    })
    after(function () {
      ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.page.get(0)).parentNode)
    })
    shared.renderCheckedToggle()
    shared.notRenderCheckedToggle()
  })

  describe('Default Unchecked', function () {
    before(async function () {
      this.page = renderPage(React.createElement(IosToggleButton, {checked: false}))
    })
    after(function () {
      ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.page.get(0)).parentNode)
    })
    shared.renderUncheckedToggle()
    shared.notRenderUncheckedToggle()
  })

  describe('On check', function () {
    before(async function () {
      this.page = renderPage(React.createElement(IosToggleButton, {checked: false}))
    })
    after(function () {
      ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.page.get(0)).parentNode)
    })
    shared.checkOnClick()
  })

  describe('On uncheck', function () {
    before(async function () {
      this.page = renderPage(React.createElement(IosToggleButton, {checked: true}))
    })
    after(function () {
      ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.page.get(0)).parentNode)
    })
    shared.uncheckOnClick()
  })

  describe('On change', function () {
    before(async function () {
      this.page = renderPage(React.createElement(IosToggleButton, {
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
