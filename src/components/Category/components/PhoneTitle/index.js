import React, { Component ,Fragment} from 'react'
import {Link}from "react-router-dom"
import './phonetitle.scss'
import Title from '../TitleComponent'
import { connect } from 'react-redux'
 class Phone extends Component {
     constructor(props){
         super(props)
     }
    render() {
        var title=null
        var list=null
        var needArryId=[100046411,100051704]
        this.props.categorytit.data?title=this.props.categorytit.data[0]:title=null
        if(this.props.categorytit.catelist){
            list= this.props.categorytit.catelist.filter((item)=>{
                return needArryId.includes(item.id)
            }) 
        }
        return (
            <div className='cate-top-phone' style={{backgroundColor:'#fff',marginBottom:'0.12rem',boxShadow:'0 0.1rem 0.26rem rgba(0,0,0,.1)',overflow:'hidden'}}>
                <Title Phonetitle={title}/>
                    {
                        list&&list.map((item)=>{
                            return <Fragment key={item.id}>
                                    <div className='box-line'></div>
                                    <div className='phone-s' onClick={()=>this.props.Push.push(`/item/${item.spu_id}`)} >
                                        <Link to=""  >
                                            <img src={item.shop_info.ali_image} />
                                            <span>{item.shop_info.title}</span>
                                        </Link>
                                    </div>
                                    </Fragment>
                        })
                    }
            </div>
        )
    }
}
export default connect((state)=>state)(Phone)