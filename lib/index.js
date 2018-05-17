import { Component } from "react"
import propTypes from 'prop-types'
import classNames from "classnames"
var util = require('util.react')
require("./index.css");
class Loading extends Component {
    getChildContext() {
        return {
            loading: this.props.loading ? false: true
        }
    }
    render() {
        const self = this
        const ref = util.ref(this)
        const pcls = self.props.prefixClassName
        let loading
        if (typeof self.context.loading !== 'undefined') {
            loading = self.context.loading
        }
        else {
            loading = self.props.loading
        }
        return (
            <div
                ref={ref`root`}
                style={self.props.style}
                className={classNames({
                    [`${pcls}`]: true,
                    [`${pcls}--container`]: self.props.children,
                    [`${pcls}--customPostion`]: self.props.customPostion,
                    [`${pcls}--size-${self.props.size}`]: self.props.size,
                    [`${pcls}--loading ${pcls}--loading-${self.props.effect}`]: loading,
                    [`${self.props.className}`]: self.props.className
                })}
            >
                {
                    loading?
                    (
                        <div className={`${pcls}-tip`}>
                            {self.props.tip}
                        </div>
                    ):null
                }
                {
                    self.props.children?
                    (
                        <div className={`${pcls}-children`}>
                            {self.props.children}
                        </div>
                    ):
                    null
                }
                {
                    loading?
                    (
                        <div className={`${pcls}-mask`}></div>
                    ):null
                }
            </div>
        )

    }
}
require('./props').default(Loading)
export default Loading
module.exports = Loading
