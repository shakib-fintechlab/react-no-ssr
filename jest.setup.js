import '@babel/register'
import '@babel/polyfill'

import React from 'react'
import { configure, shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
import { JSDOM } from 'jsdom'
var exposedProperties = ['window', 'navigator', 'document']

configure({ adapter: new Adapter() })

global.React = React
global.shallow = shallow
global.render = render
global.mount = mount
global.sinon = sinon
global.document = new JSDOM('')
global.window = document.defaultView
Object.keys(document.defaultView).forEach(property => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})

global.navigator = {
  userAgent: 'node.js'
}

global.documentRef = document

process.on('unhandledRejection', function(error) {
  console.error('Unhandled Promise Rejection:')
  console.error((error && error.stack) || error)
})
