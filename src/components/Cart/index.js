import React, { Component } from 'react'
import './cart.scss'
export default class Cart extends Component {
    render() {
        return (
            <div id="cart">
                <header>
                    <div className="title-bar">
                        <h1>购物车</h1>
                    </div>
                </header>
                <div className="empty-container">
                    <div className="content">
                        <div className="img-container">

                        </div>
                        <h3>购物车暂无商品</h3>
                        <p>添加到购物车的商品将会显示在这里</p>
                        <a className="login">登陆</a>
                        <a className="buy-btn">现在选购</a>
                    </div>
                </div>
            </div>
        )
    }
}
