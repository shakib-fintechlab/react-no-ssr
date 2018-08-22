import React from 'react'
import { shallow, mount, render } from 'enzyme'
import renderer from 'react-test-renderer'
import sinon from 'sinon'

import NoSSR from '../'

describe('NoSSR', () => {
  describe('Server', () => {
    describe('onSSR: false', () => {
      const MyComp = () => <div>Hello</div>
      const wrapper = shallow(
        <NoSSR>
          <MyComp />
        </NoSSR>
      )
      const wrapperHref = shallow(
        <NoSSR>
          <MyComp />
        </NoSSR>
      )
      it('Should not show children', () => {
        expect(wrapper.find('div')).not.toHaveText('Hello')
      })
    })
    describe('onSSR: true', () => {
      const MyComp = () => (
        <div>
          <p id="text">Hello</p>
        </div>
      )
      const Loading = () => (
        <div>
          <p id="text">Loading</p>
        </div>
      )
      const wrapper = mount(
        <NoSSR onSSR={<Loading />}>
          <MyComp />
        </NoSSR>
      )
      it('Should show children (Loading)', () => {
        // 🔥️ 🔥️ 🔥️ 🔥️ 🔥️ 🔥️ 🔥️ 🔥️ 🔥️ 🔥️ 🔥️ 🔥️ 🔥️ 🔥️ 🔥️ 🔥️
        expect(wrapper.find('p')).toHaveText('Hello')
        expect(wrapper.find('p')).not.toHaveText('Loading')
        // 🔥️ 🔥️ 🔥️ 🔥️ 🔥️ 🔥️ 🔥️ 🔥️ 🔥️ 🔥️ 🔥️ 🔥️ 🔥️ 🔥️ 🔥️ 🔥️
      })
    })
  })
  describe('Client', () => {
    describe('onSSR: false; Mounted', () => {
      const MyComp = () => <div>Hello</div>
      const wrapper = mount(
        <NoSSR>
          <MyComp />
        </NoSSR>
      )
      const wrapperHref = mount(
        <NoSSR>
          <MyComp />
        </NoSSR>
      )
      it('Should show children (Hello)', () => {
        expect(wrapper.find('div')).toHaveText('Hello')
      })
    })
    describe('onSSR: true; Mounted', () => {
      const MyComp = () => (
        <div>
          <p id="text">Hello</p>
        </div>
      )
      const Loading = () => (
        <div>
          <p id="text">Loading</p>
        </div>
      )
      const wrapper = mount(
        <NoSSR onSSR={<Loading />}>
          <MyComp />
        </NoSSR>
      )
      it('Should show children (Hello)', () => {
        expect(wrapper.find('p')).toHaveText('Hello')
        expect(wrapper.find('p')).not.toHaveText('Loading')
      })
    })
  })
})
