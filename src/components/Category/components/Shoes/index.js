import React, { Component } from 'react'
import Title from '../TitleComponent'
import List from '../ListComponent'
import { connect } from 'react-redux'
class Shoes extends Component {
    render() {
        var title=null
        var list=null
        var needArryId=[100057709,100039743,100057915,100053313,100058401,100058801]
        this.props.categorytit.data?title=this.props.categorytit.data[2]:title=null
        if(this.props.categorytit.catelist){
            list= this.props.categorytit.catelist.filter((item)=>{
                return needArryId.includes(item.id)
            }) 
        }
        return (
            <div className='cate-top-phone' style={{backgroundColor:'#fff',marginBottom:'0.12rem',boxShadow:'0 0.1rem 0.26rem rgba(0,0,0,.1)',overflow:'hidden'}}>
                <Title Phonetitle={title} />
                <List Phonelist={list}/>
            </div>
        )
    }
}
export default connect((state)=>state)(Shoes)