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
                size-m:<Loading size="m" />
                size-l:<Loading size="l" />
                size-fill:
                <div style={{width:100, height:100}} >
                    <Loading size="fill" ></Loading>
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
                empty span:
                <div style={{width:100,height:100,border: '1px solid #ECECEC'}} >
                    <Loading style={{height:'100%'}} >
                        <span></span>
                    </Loading>
                </div>
                <hr />
                effect opacity
                <Loading effect="opacity">
                    <input type="text"/><button type="button" >search</button>
                </Loading>
                <hr />
                r-loading--customPostion:
                <div style={{width:100}}>
                    <Loading
                        className="r-loading--customPostion"
                        tip={(
                            <div style={{textAlign: 'center',lineHeight: '100px'}} >loading..</div>
                        )}
                     >
                        <div style={{width:'100',height:'100',backgroundColor: '#ABCDEF'}}>abcdef</div>
                    </Loading>
                </div>
                <hr/>
                r-loading--customPostion: loading:false
                <div style={{width:100}}>
                    <Loading
                        loading={false}
                        className="r-loading--customPostion"
                        tip={(
                            <div style={{textAlign: 'center',lineHeight: '100px'}} >loading..</div>
                        )}
                     >
                        <div style={{width:'100',height:'100',backgroundColor: '#ABCDEF'}}>abcdef</div>
                    </Loading>
                </div>
                <hr/>
                When parent <code>loading:true</code>, children <code>loading</code> always <code>false</code>
                <Loading >
                    1<br />
                    2<br />
                    <Loading style={{width:40}} >
                        sub content
                    </Loading>
                    3<br />
                    4<br />
                </Loading>
                parent loading:false
                <Loading loading={false} >
                    1<br />
                    2<br />
                    <Loading style={{width:40}} >
                        sub content
                    </Loading>
                    3<br />
                    4<br />
                </Loading>
            </div>
        )
    }
})
module.exports = App
