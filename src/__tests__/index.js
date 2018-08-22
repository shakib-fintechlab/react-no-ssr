import React from 'react'
import { shallow, mount } from 'enzyme'

import NoSSR from '../'

describe('NoSSR', () => {
  describe('On Server', () => {
    const MyComp = () => (
      <div className="wrapper">
        <div className="child">child</div>
      </div>
    )
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
    it('Should not render children', () => {
      expect(wrapper.find('.child').length).toBe(0)
      expect(wrapperHref.find('.child').length).toBe(0)
    })
  })
  describe('On Client', () => {
    const MyComp = () => (
      <div className="wrapper">
        <div className="child">child</div>
      </div>
    )
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
    it('Should render children', () => {
      expect(wrapper.find('.child').length).toBe(1)
      expect(wrapperHref.find('.child').length).toBe(1)
    })
  })
})

// describe('🔥️ TODO: Migrate these 🔥️', () => {
//   describe('with onSSR components', () => {
//     describe('on server', () => {
//       it('should show the onSSR component', () => {
//         const MyComp = () => <div>Hello</div>
//         const Loading = () => <div>Loading...</div>
//         const el = shallow(
//           <NoSSR onSSR={<Loading />}>
//             <MyComp />
//           </NoSSR>
//         )
//         expect(el.html()).to.match(/Loading/)
//       })
//     })
//     describe('on client after mounted', () => {
//       it('should show children', () => {
//         const MyComp = () => <div>Hello</div>
//         const Loading = () => <div>Loading...</div>
//         const el = mount(
//           <NoSSR onSSR={<Loading />}>
//             <MyComp />
//           </NoSSR>
//         )
//         expect(el.html()).to.match(/Hello/)
//       })
//     })
//   })
// })
