import { expect } from 'chai'

function renderCheckedToggle () {
  it('Should render checked toggle', function () {
    expect(this.page.find('input[type="checkbox"]').props().checked).to.eq(true)
  })
}

function notRenderCheckedToggle () {
  it('Should not render unchecked toggle', function () {
    expect(this.page.find('input[type="checkbox"]').props().checked).to.not.eq(false)
  })
}

function renderUncheckedToggle () {
  it('Should render unchecked toggle', function () {
    expect(this.page.find('input[type="checkbox"]').props().checked).to.eq(false)
  })
}

function notRenderUncheckedToggle () {
  it('Should not render checked toggle', function () {
    expect(this.page.find('input[type="checkbox"]').props().checked).to.not.eq(true)
  })
}

function checkOnClick () {
  it('Should check checkbox on click', async function () {
    this.page.find('.toggle-bar').simulate('click')
    expect(this.page.find('input[type="checkbox"]').props().checked).to.eq(true)
  })
}

function uncheckOnClick () {
  it('Should uncheck checkbox on click', async function () {
    this.page.find('.toggle-bar').simulate('click')
    expect(this.page.find('input[type="checkbox"]').props().checked).to.eq(false)
  })
}

function fireHandleChange () {
  it('Should fire handleChange event on change', async function () {
    this.page.find('.toggle-bar').simulate('click')
    expect(this.value).to.eq(false)
  })
}

function notFireHandleChange () {
  it('Should not fire handleChange event on no change', async function () {
    this.page.find('.toggle-bar').simulate('click')
    expect(this.value).to.eq(true)
  })
}

export default {
  renderCheckedToggle,
  notRenderCheckedToggle,
  renderUncheckedToggle,
  notRenderUncheckedToggle,
  checkOnClick,
  uncheckOnClick,
  fireHandleChange,
  notFireHandleChange,
}
