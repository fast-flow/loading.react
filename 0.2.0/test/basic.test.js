import { Component } from "react"
import Loading from "../lib/index"
import Test from 'react-addons-test-utils'

it('className', function () {
    var app = Test.renderIntoDocument(<Loading className="myclass" />)
    expect(Test.scryRenderedDOMComponentsWithClass(app, 'myclass').length)
        .toEqual(1)
})
