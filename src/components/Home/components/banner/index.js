import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import './banner.scss'
export default class Banner extends Component {
    componentDidUpdate(){
        new Swiper('.swiper-banner', {
            speed:1500,
            autoplay: true,//可选选项，自动滑动
            pagination: {
                el: '.swiper-pagination',
              },
        })
        //如果你初始化时没有定义Swiper实例，后面也可以通过Swiper的HTML元素来获取该实例
        new Swiper('.swiper-banner')
        var mySwiper = document.querySelector('.swiper-banner').swiper
        mySwiper.slideNext();
    }
    render() {  
        return (
            <div id="home-banner">
                <div className="swiper-container swiper-banner">
                        {
                            this.props.banner&&this.props.banner.map((item)=>{
                                return <div className="swiper-wrapper" key={item.type}>
                                        {
                                            item.list.map(subitem=>{
                                                return <div className="swiper-slide" key={subitem.url}>
                                                            <a href={subitem.url}>
                                                                <img src={subitem.image} alt={subitem.url}/>
                                                            </a>
                                                       </div>
                                            })
                                        }
                                       </div>
                            })
                        }
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
