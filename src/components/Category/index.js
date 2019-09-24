import React, { Component,Fragment} from 'react'
import {NavLink,withRouter}from "react-router-dom"
import PhoneTitle from './components/PhoneTitle'
import PhoneNeed from './components/PhoneNeed'
import Shoes from './components/Shoes'
import Breathe from './components/Breathe'
import './category.scss'
import { Icon } from 'antd';
import 'antd/es/icon/style/index.css'
import actionCreator from './actionCreator'
import { connect } from 'react-redux'
 class Category extends Component {
     componentDidMount(){
        this.props.getCateTitleData()
        this.props.getCateAllList()
     }
    render() {
        return (
            <Fragment>
                <div className='category'>
                <NavLink to=''>
                <Icon type="menu" style={{fontSize:'0.5rem',color:'#fff'}} />
                </NavLink>
                <h5>分类</h5>
                <NavLink to=''>
                    <Icon type="search" style={{fontSize:'0.5rem',color:'#fff'}} />  
                </NavLink>
                </div>
                <div className='cate-section'>
                    <PhoneTitle Push={this.props.history}  />
                    <PhoneNeed />
                    <Shoes />
                    <Breathe />
                </div>
            </Fragment>
        )
    }
}
export default connect((state)=>state,actionCreator)(withRouter(Category))