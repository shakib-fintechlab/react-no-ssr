import React from 'react'

import NoSSR from '../'

describe('NoSSR', () => {
  describe('onServer', () => {
    describe('without onSSR components', () => {
      const MyComp = () => <div>Hello</div>
      const wrapper = render(
        <NoSSR>
          <MyComp />
        </NoSSR>
      )
      it('Should not render children', () => {
        // expect(wrapper.html()).not.toMatch(/Hello/);
        expect(wrapper).toMatchSnapshot();
      })
    })
    describe('with onSSR component', () => {
      const MyComp = () => <div>Hello</div>
      const Loading = () => <div>Loading...</div>
      const wrapper = render(
        <NoSSR onSSR={<Loading />}>
          <MyComp />
        </NoSSR>
      )
      it('Should show the onSSR component', () => {
        // expect(wrapper.html()).toMatch(/Loading/)
        // expect(wrapper.html()).not.toMatch(/Hello/)
        expect(wrapper).toMatchSnapshot();
      })
    })
  })
  describe('onClient: afterMounted', () => {
    describe('without onSSR component', () => {
      const MyComp = () => <div>Hello</div>
      const wrapper = mount(
        <NoSSR>
          <MyComp />
        </NoSSR>
      )
      it('Should show children', () => {
        // expect(wrapper.html()).toMatch(/Hello/)
        expect(wrapper).toMatchSnapshot();
      })
    })
    describe('with onSSR component', () => {
      const MyComp = () => <div>Hello</div>
      const Loading = () => <div>Loading...</div>
      const wrapper = mount(
        <NoSSR onSSR={<Loading />}>
          <MyComp />
        </NoSSR>
      )
      it('Should show children', () => {
        // expect(wrapper.html()).not.toMatch(/Loading/)
        // expect(wrapper.html()).toMatch(/Hello/)
        expect(wrapper).toMatchSnapshot();
      })
    })
  })
})
