import React, { Component } from 'react'
import './homebox.scss'
import {withRouter} from 'react-router-dom'
class HomeBox extends Component {
    render() {
        return (
            <section className="home-box .has-ad">
                <aside className="ad-wrap-inner common-flex-box">
                    <figure className="ad-cover">
                        <img src={this.props.list.header.image} alt="图片" className="ad-poster"/>
                    </figure>
                </aside>
                <aside className="list-wrap common-flex-box flex-two">
                    {
                        this.props.list.skuInfo.map((item,index)=>{
                            return (
                                <section className="sku-item-normal-box flex-item" key={index} onClick={()=>this.props.history.push('/item/'+item.spuId)}>
                                    <figure className="item-cover">
                                        <img src={item.images} alt="图片"/>
                                    </figure>
                                    <article className="item-title two-line">
                                         <h3>{item.skuTitle}</h3>
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
                                            <span className="tag">{item.promotionList.map(subitem=>{
                                                return subitem.tag
                                            })}</span>
                                        </aside>
                                    </article>
                                </section>
                            )
                        })
                    }
                    <div className="last-hask-place"></div>
                </aside>
            </section>
        )
    }
}
export default withRouter(HomeBox)
