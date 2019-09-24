import React, { Component } from 'react'
import  './index.scss'
import {withRouter}from "react-router-dom"
class FooterNav extends Component{
    
    go=(url)=>{
        this.setState({
            pathN:url
        })
        this.props.history.push(url)
    }
    render(){
        return <div className="header">
                <ul>
                    <li onClick={this.go.bind(this,'/home')} className={this.props.location.pathname==='/home'?"ac":''}>
                            <figure className="icon"></figure>
                            <h5>首页</h5>
                    </li>
                    <li onClick={this.go.bind(this,'/category')} className={this.props.location.pathname==='/category'?"ac":''}>
                            <figure className="icon"></figure>
                            <h5>分类</h5>
                    </li>
                    <li onClick={this.go.bind(this,'/cart')} className={this.props.location.pathname==='/cart'?"ac":''}>
                            <figure className="icon"></figure>
                            <h5>购物车</h5>
                    </li>
                    <li onClick={this.go.bind(this,'/center')} className={this.props.location.pathname==='/center'?"ac":''}>
                            <figure className="icon"></figure>
                            <h5>个人中心</h5>
                    </li>
                </ul>   
               </div>
    }
}
export default withRouter(FooterNav);