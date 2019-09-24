import React, { Component,Fragment } from 'react'
import './detail.scss'
import {Link,withRouter} from 'react-router-dom'
import actionCreator from './actionCreator'
import { connect } from 'react-redux'
class Detail extends Component {
    constructor(props){
        super(props)
        this.state={
            type:[
                    {
                        title:'商品',
                        name:'shop'
                    },
                    {
                        title:'详情',
                        name:'detail'
                    },
                    {
                        title:'参数',
                        name:'pramas'
                    },
                    {
                        title:'推荐',
                        name:'good'
                    }
                ]
        }
    }
    componentDidMount(){
        let id=this.props.match.params.id
        this.props.getDetailData(id)
    }
    scrollToAnchor = (Name) => {
        
        if (Name) {
            let Element = document.getElementById(Name);
            if(Element) {Element.scrollIntoView(true); }
        }
    }
    render() {    
        var shopList=null
        this.props.detailshop.data?shopList=this.props.detailshop.data.list:shopList=null
        let {type} =this.state
        return (
            <Fragment>
                <div className='detail-top' >
                    <div className='detail-top-nav'>
                        <button onClick={()=>this.props.history.push('/category')}>返回</button>
                        <h3>坚果 Pro 2s</h3>
                    </div>
                    <div className='detail-tab'>
                        <div className='tab-nav'>
                            {
                                type.map((item)=>{
                                    return <span key={item.name} onClick={this.scrollToAnchor.bind(this,item.name)}>{item.title}</span>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='section'>
                    <div className='detail-shop' id='shop'>
                        <div className='detail-shop-img'>
                            <img src='https://resource.smartisan.com/resource/25cc6e783a664fbdf83c3c34774a9826.png?x-oss-process=image/format,webp' />
                        </div>
                        <div className='detail-shop-pramas'>
                            {
                               shopList&&shopList.map((item)=>{
                                   return <Fragment key={item.id}>
                                                <p>{item.name} </p>
                                                <p>{item.shop_info.pu_sub_title}</p>
                                                <p> 
                                                    <span>￥{item.price}</span>
                                                    <span>满99包邮</span>
                                                </p>
                                          </Fragment>
                               }) 
                            }
                        </div>
                        <div className='detail-shop-type'>
                            <p>已选版本 </p>
                            <p> <span>颜色:</span> <span>炫光蓝</span></p>
                            <p><span>容量</span> <span>6G+64GB</span></p>
                        </div>
                    </div>
                    <div className='detail-detail' id='detail'>
                        <h4 className='detail-title'>商品详情</h4>
                        <img style={{height:'10rem',width:'100%'}} src='https://resource.smartisan.com/resource/a115f37d26c5ce4a99c0b5569cb736ab.jpg?x-oss-process=image/resize,w_750/indexcrop,y_1440,i_0/format,webp' />
                    </div>
                    <div className='detail-pramas' id='pramas'>
                        <h4 className='detail-title'>参数</h4>
                        <img style={{height:'10rem',width:'100%'}} src='https://resource.smartisan.com/resource/a115f37d26c5ce4a99c0b5569cb736ab.jpg?x-oss-process=image/resize,w_750/indexcrop,y_1440,i_0/format,webp' />
                    </div>
                    <div className='detail-good' id='good'>
                        <h4 className='detail-title'>推荐</h4>
                        <img style={{height:'10rem',width:'100%'}} src='https://resource.smartisan.com/resource/a115f37d26c5ce4a99c0b5569cb736ab.jpg?x-oss-process=image/resize,w_750/indexcrop,y_1440,i_0/format,webp' />
                    </div>
                </div>
                <div className='detail-bottom'>
                    <div className='have-phone'>到货通知</div>
                </div>
            </Fragment>
        )
    }
}
export default connect((state)=>state,actionCreator)(withRouter(Detail))