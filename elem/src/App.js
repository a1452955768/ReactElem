import React, { Component } from 'react'
import './App.css';
import Login from './kangyu/login'
import {Route,BrowserRouter} from "react-router-dom"
import Chengshiliebiao from "./jiahan/chengshiliebiao"
import Search from "./jiahan/search"
import Home from './kangyu/home'
export class App extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      
   }
 }
  render() {
    return (
        <BrowserRouter>
      <Route path="/login" component={Login}></Route>
      <Route exact path="/" component={Chengshiliebiao}></Route>
      <Route path="/search/:id" component={Search}></Route>
     <Route path="/home" component={Home}></Route>
      </BrowserRouter>
    )
  }
}
  export default App