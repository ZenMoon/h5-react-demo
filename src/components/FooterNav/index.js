import React, { Component } from 'react'

import  './index.scss'
import {NavLink}from "react-router-dom"

export default class FooterNav extends Component{
    render(){
        return <div className="header">
                <ul>
                    <li>
                        <NavLink to="/home">首页</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category">分类</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">购物车</NavLink>
                    </li>
                    <li>
                        <NavLink to="/center">个人中心</NavLink>
                    </li>
                </ul>   
               </div>
    }
}