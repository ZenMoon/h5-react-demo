import React, { Component } from 'react'
//header component
import Header from './components/header/index'
//banner component
import Banner from './components/banner'
//homebox component
import Homebox from './components/homebox'
//guessyoulike component
import Guessyoulike from './components/guessyoulike'
import actionCreator from './actionCreator'
import { connect } from 'react-redux'
class Home extends Component {
    componentDidMount(){
        this.props.getHomeData()
    }
    render() {
        return (
            <div>
                <Header/>
                <Banner banner={this.props.home.data&&this.props.home.data.filter(item=>item.type==='kvBanner')}/>
                {
                    this.props.home.data&&this.props.home.data.map((item,index)=>{
                        if(item.type==='goodsOneTwo'){
                            return <Homebox list={item} key={index}/>
                        }
                    })
                }
                <Guessyoulike />
            </div>
        )
    }
}
export default connect((state)=>state,actionCreator)(Home)
