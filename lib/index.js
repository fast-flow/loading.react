import "./index.css"
import { Component } from "react"
import props from "./props"
import classNames from "classnames"
class Loading extends Component {
    render() {
        const self = this
        const pcls = self.props.prefixClassName
        return (
            <div
                className={classNames({
                    [`${pcls}`]: true,
                    [`${pcls}--container`]: self.props.children,
                    [`${self.props.loadingClassName}`]: self.props.loading,
                    [`${self.props.className}`]: self.props.className
                })}
            >
                {
                    self.props.loading?
                    (
                        <div className={`${pcls}-loading`}>
                            {
                                self.props.before?
                                (
                                    <div className={`${pcls}-loading-before`}>
                                        {self.props.before}
                                    </div>
                                ):
                                null
                            }
                            <div className={`${pcls}-loading-tip`}>
                                {self.props.tip}
                            </div>
                            {
                                self.props.after?
                                (
                                    <div className={`${pcls}-loading-after`}>
                                        {self.props.after}
                                    </div>
                                ):
                                null
                            }
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
            </div>
        )

    }
}
props(Loading)
export default Loading
