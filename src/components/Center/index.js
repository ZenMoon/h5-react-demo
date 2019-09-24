import React, { Component } from 'react'
import './center.scss'
import { userInfo } from 'os'
export default class Center extends Component {
    render() {
        return (
            <div id="userCenter">
                <header>
                    <div className="title-bar">
                        <h1>个人中心</h1>
                    </div>
                </header>
                {/* content */}
                <section className="main-wrapper">
                    <div className="page-for-center">
                        <div className="box-userinfo">
                            <div className="avatar">
                            </div>
                            登陆/注册
                        </div>
                        <ul className="menu-list-parallel">
                            <li>
                                <a className="icons icon-order">全部订单</a>
                            </li>
                            <li>
                                <a className="icons icon-unpay">待付款</a>
                            </li>
                            <li>
                                <a className="icons icon-undone">待收货</a>
                            </li>
                            <li>
                                <a className="icons icon-aftersale">售后</a>
                            </li>
                        </ul>
                        <ul className="menu-list-vertical">
                            <li>
                                <a >地址管理</a>
                            </li>
                            <li>
                                <a >我的优惠券</a>
                            </li>
                            <li>
                                <a >优先购买码</a>
                            </li>
                            <li>
                                <a >提货兑换卡</a>
                            </li>
                        </ul>
                        <ul className="menu-list-vertical">
                            
                            <li>
                                <a >常见问题</a>
                            </li>
                            <li>
                                <a >服务支持</a>
                            </li>
                        </ul>

                        <ul className="menu-list-vertical">
                            
                            <li>
                                <a >意外碎屏保修服务</a>
                            </li>
                            <li>
                                <a >延长保修服务</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}
