import React, { PropTypes } from "react"
import extend from "extend"
export default function (component) {
    extend(true, component, {
        defaultProps: {
            prefixClassName: 'r-loading',
            className: '',
            loadingClassName: 'r-loading--loadingBlur',
            loading: true,
            style: {},
            tip: (<div className="r-loading-bounce" ></div>)

        },
        propTypes: {
            prefixClassName: PropTypes.string,
            className: PropTypes.string,
            loadingClassName: PropTypes.string,
            loading: PropTypes.bool,
            style: PropTypes.object,
            tip: PropTypes.oneOfType([
                PropTypes.element,
                PropTypes.string
            ])
        }
    })
}
