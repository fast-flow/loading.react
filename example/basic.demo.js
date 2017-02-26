var React = require('react')
var Loading = require('loading.react').default
var App = React.createClass({
    getInitialState: function () {
        return {
            show: true
        }
    },
    render: function () {
        var self = this
        return (
            <div>
                default:
                <Loading />
                tip:
                <Loading tip="loading..." />
                size-m:<Loading className="size--m" />
                size-l:<Loading className="size--l" />
                r-loading--fill:
                <div style={{width:100, height:100}} >
                    <Loading className="r-loading--fill" ></Loading>
                </div>
                <hr />
                children:
                <Loading>
                    <input type="text"/><button type="button" >search</button>
                </Loading>
                <hr />
                children: loading:false :
                <Loading loading={false} >
                    <input type="text"/><button type="button" >search</button>
                </Loading>
                <hr />
                r-loading--customPostion:
                <div style={{width:100,height:100}}>
                    <Loading
                        className="r-loading--fill r-loading--customPostion"
                        tip={(
                            <div style={{textAlign: 'center',lineHeight: '100px'}} >loading..</div>
                        )}
                     >
                        <div style={{width:'100%',height:'100%',backgroundColor: '#ABCDEF'}}>abcdef</div>
                    </Loading>
                </div>
                <hr/>
                r-loading--customPostion: loading:false
                <div style={{width:100,height:100}}>
                    <Loading
                        loading={false}
                        className="r-loading--fill r-loading--customPostion"
                        tip={(
                            <div style={{textAlign: 'center',lineHeight: '100px'}} >loading..</div>
                        )}
                     >
                        <div style={{width:'100%',height:'100%',backgroundColor: '#ABCDEF'}}>abcdef</div>
                    </Loading>
                </div>
            </div>
        )
    }
})
module.exports = App
