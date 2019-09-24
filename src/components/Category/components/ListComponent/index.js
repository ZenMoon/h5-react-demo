import React, { Component } from 'react'
import './phonelist.scss'
export default class PhoneList extends Component {
    render() {
        return (
            <div className='cate-list'>
                {
                    this.props.Phonelist&&this.props.Phonelist.map((item)=>{
                        return <div className='cate-onethree' key={item.id}>
                                    <img src={item.shop_info.ali_image} />
                                    <p>{item.name}</p>
                                </div>
                    })
                }
            </div>
        )
    }
}
