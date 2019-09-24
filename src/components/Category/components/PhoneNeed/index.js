import React, { Component,Fragment } from 'react'
// import './phoneneed.scss'
import Title from '../TitleComponent'
import PhoneList from '../ListComponent'
import { connect } from 'react-redux'
class PhoneNeed extends Component {
    render() {
        var title=null
        var list=null
        var needArryId=[100023501,100042203,100053001,100026701,100042801,100052803]
        this.props.categorytit.data?title=this.props.categorytit.data[1]:title=null
        if(this.props.categorytit.catelist){
            list= this.props.categorytit.catelist.filter((item)=>{
                return needArryId.includes(item.id)
            }) 
        }
        return (
            <div className='cate-top-phone' style={{backgroundColor:'#fff',marginBottom:'0.12rem',boxShadow:'0 0.1rem 0.26rem rgba(0,0,0,.1)',overflow:'hidden'}}>
               <Title Phonetitle={title} />
               <PhoneList Phonelist={list} />
            </div>
        )
    }
}
export default connect((state)=>state)(PhoneNeed)