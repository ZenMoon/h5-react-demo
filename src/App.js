import React,{Component} from 'react';
import {Route,Redirect,Switch,withRouter }from "react-router-dom"
import Cart from './components/Cart'
import Category from './components/Category'
import Center from './components/Center'
import Home from './components/Home'
import FooterNav from './components/FooterNav'
import Detail from './components/Detail'

const NotFind=()=><div>404页面</div>
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      flag:true
    }
  }
  componentDidMount(){
    this.change(this.props.location.pathname)
    this.props.history.listen((location)=>{
      this.change(location.pathname);
    })
  }
  change=(path)=>{
     if(path.startsWith("/item")){
        this.setState({
          flag:false
        })
     }
     else{
       this.setState({
         flag:true
       })
     }
  }
  render(){
     return (
    <div className="App">
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/category' component={Category}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/center' component={Center}/>
          <Route path='/item/:id' component={Detail}/>
          <Redirect from='/' to='/home' exact/>
          <Route  component={NotFind}/>
        </Switch>
        {this.state.flag?<FooterNav />:""}  
        {/* 表达式 其是否渲染 */}
    </div>
  );
  }
}
export default withRouter(App);

