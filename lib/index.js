import "./index.css"
import { Component, PropTypes } from "react"
import props from "./props"
import classNames from "classnames"
class Loading extends Component {
    getChildContext() {
        return {
            loading: this.props.loading ? false: true
        }
    }
    render() {
        const self = this
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
                style={self.props.style}
                className={classNames({
                    [`${pcls}`]: true,
                    [`${pcls}--container`]: self.props.children,
                    [`${pcls}--loading ${self.props.loadingClassName}`]: loading,
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
props(Loading)
Loading.childContextTypes = {
    loading: PropTypes.bool
}
Loading.contextTypes = {
    loading: PropTypes.bool
}
export default Loading
