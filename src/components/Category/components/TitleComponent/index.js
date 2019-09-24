import React, { Component,Fragment } from 'react'
import './Title.scss'
import { connect } from 'react-redux'
class Title extends Component {
    render() {
        return (
            <Fragment>
                <div className='cate-title'>{this.props.Phonetitle&&this.props.Phonetitle.name}</div>
                <div className='box-line'></div>
                <div className='cate-img'>
                    <img src={this.props.Phonetitle&&this.props.Phonetitle.image.src}/>
                </div>
                <div className='box-line'></div>
            </Fragment>
        )
    }
}
export default connect((state)=>state)(Title)