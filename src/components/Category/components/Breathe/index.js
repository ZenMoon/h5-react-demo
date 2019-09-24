import React, { Component } from 'react'
import Title from '../TitleComponent'
import './breathe.scss'
import { connect } from 'react-redux'
class Breathe extends Component {
    render() {
        var title=null
        var list=null
        var needArryId=[100036501,100040501,100036401,100033802]
        this.props.categorytit.data?title=this.props.categorytit.data[3]:title=null
        if(this.props.categorytit.catelist){
            list= this.props.categorytit.catelist.filter((item)=>{
                return needArryId.includes(item.id)
            }) 
        }
        return (
            <div className='cate-top-phone' style={{backgroundColor:'#fff',marginBottom:'1.25rem',boxShadow:'0 0.1rem 0.26rem rgba(0,0,0,.1)',overflow:'hidden'}}>
                <Title Phonetitle={title} />
                <div className='cate-breathe-list'>
                        {
                            list&&list.map((item)=>{
                                return <div className='list-one' key={item.id}>
                                            <a href=''>
                                                <img src={item.shop_info.ali_image} />
                                                <span>
                                                {item.name}
                                                </span>
                                                <b> > </b>
                                            </a>
                                        </div>
                            })
                        }
                </div>
            </div>
        )
    }
}
export default connect((state)=>state)(Breathe)