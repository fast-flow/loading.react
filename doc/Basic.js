var React = require('react')
var Loading = require('loading.react')
class Basic extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			show: true
		}
	}
    render () {
        return (
            <div className="basicDemo" >
                default:
                <Loading />
                tip:
                <Loading tip="加载中..." size="l" />
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
                customPosition:
                <div style={{width:100}}>
                    <Loading
                        customPosition
                        size="l"
                        tip={(
                            <div style={{textAlign: 'center',lineHeight: '120px',color:'#fff'}} >loading..</div>
                        )}
                     >
                        <div style={{width:'100',height:'100',backgroundColor: '#ABCDEF'}}>abcdef</div>
                    </Loading>
                </div>
                <hr/>
                r-loading--customPostion: loading:false
                <div style={{width:100}} >
                    <Loading
                        loading={false}
                        size="l"
                        className="r-loading--customPostion"
                        tip={(
                            <div style={{textAlign: 'center',lineHeight: '120px'}} >loading..</div>
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
                <hr/>
                classname:
                <Loading className="loading--night" effect={false}>
                    <input type="text"/><button type="button" >search</button>
                </Loading>
            </div>
        )
    }
}
/*ONFACE-DEL*/Basic = require("react-hot-loader").hot(module)(Basic)
module.exports = Basic
