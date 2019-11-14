import React, { Component } from 'react'
import './App.css';
import Login from './kangyu/login'
import {Route,BrowserRouter} from "react-router-dom"
export class App extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      
   }
 }
 

  render() {
    return (
      
        <BrowserRouter>
      <Route path="/" component={Login}></Route>
      </BrowserRouter>
      
    )
  }
}

export default App


