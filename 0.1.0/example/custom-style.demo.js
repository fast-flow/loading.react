var React = require('react')
var Loading = require('loading.react').default
var App = React.createClass({
    render: function () {
        return (
            <Loading className="alert--info" >basic</Loading>
        )
    }
})
module.exports = App
