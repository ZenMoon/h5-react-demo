import React, { Component } from 'react'
import './guessyoulike.scss'
import Bs from 'better-scroll'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
class Guessyoulike extends Component {
    constructor(props){
        super(props);
        this.state={
            page:1,
            pageTotal:null,
            list:[]
        }
    }
    go(params){
        // console.log('111');
        this.props.history.push('/item',{params})
    }
    componentDidMount(){
        this.scroll = new Bs(this.refs.scrollbox,{scrollY:true,mouseWheel:true,pullUpLoad:{threshold:10},pullDownRefresh:{threshold:0,stop:0}})
        this.getData()
        this.scroll.on("pullingUp",()=>{
            this.setState({
                page:this.state.page+1
            },()=>{
                if(!this.flag){
                this.getData(this.state.page)   
                }
            })
        })
    }
    getData(page=1){
        if(page>this.state.pageTotal&&this.state.pageTotal){
            return;
        }
        this.flag = true;
        axios({
            url:"https://shopapi.smartisan.com/mobile/skulist",
            methods:"get",
            params:{
                page:this.state.page
            }
        }).then(res=>{
            this.setState({
                pageTotal:res.data.data.pageTotal,
                list:this.state.list.concat(res.data.data.skuInfo)
            },()=>{
                this.scroll.finishPullUp();
                this.flag=false;
                this.scroll.refresh()
            })
        })
    }
    render() {
        return (
            <section className="guessyoulike" >
                <article className="headline-wrap">
                    <h3>猜你喜欢</h3>
                </article>
                <section className="scrollbox" ref='scrollbox'>
                <aside className="guesslike-wrap common-flow-layout clearfix">
                    {
                        this.state.list&&this.state.list.map((item,index)=>{
                            return (
                                <section className="sku-item-normal-box flow-item guess-like-item" key={index} onClick={this.go.bind(this,item.spuId)}>
                                    <figure className="item-cover">
                                        <img src={item.images} alt="这是图片"/>
                                    </figure>
                                    <article className="item-title">
                                        <h3>{item.skuMobileTitle}</h3>
                                    </article>
                                    <article className="item-bottom-info">
                                        <aside className="item-price">
                                            <span className="yuan">¥</span>
                                            <span>{item.discountPrice!==0?item.discountPrice:item.originalPrice}</span>
                                            <span className="orignal">
                                                <span className="yuan">¥</span>
                                                {item.originalPrice}
                                            </span>
                                        </aside>
                                        <aside className="item-promotion-tags">
                                            <span className="tag">
                                            {
                                                item.promotionList.map((subItem)=>{
                                                    return subItem.tag
                                                })
                                            }
                                            </span>
                                        </aside>
                                    </article>
                                </section>
                            )
                        })
                    }
                </aside>
                </section>
                
            </section>
        )
    }
}
export default withRouter(Guessyoulike);