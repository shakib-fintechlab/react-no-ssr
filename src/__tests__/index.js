import React from 'react'

import NoSSR from '../'

describe('NoSSR', () => {
  describe('Server', () => {
    describe('onSSR: false', () => {
      const MyComp = () => <div>Hello</div>
      const wrapper = render(
        <NoSSR>
          <MyComp />
        </NoSSR>
      )
      it('Should not show children', () => {
        // expect(wrapper.html()).not.toMatch(/Hello/);
        expect(wrapper).toMatchSnapshot();
      })
    })
    describe('onSSR: true', () => {
      const MyComp = () => <div>Hello</div>
      const Loading = () => <div>Loading...</div>
      const wrapper = render(
        <NoSSR onSSR={<Loading />}>
          <MyComp />
        </NoSSR>
      )
      it('Should show children (Loading)', () => {
        // expect(wrapper.html()).toMatch(/Loading/)
        // expect(wrapper.html()).not.toMatch(/Hello/)
        expect(wrapper).toMatchSnapshot();
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
      it('Should show children (Hello)', () => {
        // expect(wrapper.html()).toMatch(/Hello/)
        expect(wrapper).toMatchSnapshot();
      })
    })
    describe('onSSR: true; Mounted', () => {
      const MyComp = () => <div>Hello</div>
      const Loading = () => <div>Loading...</div>
      const wrapper = mount(
        <NoSSR onSSR={<Loading />}>
          <MyComp />
        </NoSSR>
      )
      it('Should show children (Hello)', () => {
        // expect(wrapper.html()).not.toMatch(/Loading/)
        // expect(wrapper.html()).toMatch(/Hello/)
        expect(wrapper).toMatchSnapshot();
      })
    })
  })
})
