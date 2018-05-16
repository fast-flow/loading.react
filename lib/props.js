import p from 'prop-types'
export default function (app) {
    app.defaultProps = {
        prefixClassName: 'face-loading',
        className: '',
        loading: true,
        size: 's',
        effect: 'blur',
        customPosition: false,
        style: {},
        tip: (<div className="face-loading-bounce" ></div>)
    }
    app.propTypes = {
        prefixClassName: p.string,
        className: p.string,
        size: p.string,
        effect: p.oneOfType([
            p.string,
            p.bool
        ]),
        customPosition: p.bool,
        loading: p.bool,
        style: p.object,
        tip: p.oneOfType([
            p.element,
            p.string
        ])
    }
}