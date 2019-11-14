import React, { Component } from 'react'
import './App.css';
<<<<<<< HEAD
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
=======
import Chengshiliebiao from "./jiahan/chengshiliebiao"
import Search from "./jiahan/search"
import {Route,BrowserRouter} from "react-router-dom"
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Route exact path="/" component={Chengshiliebiao}></Route>
      <Route path="/search/:id" component={Search}></Route>
      </BrowserRouter>
    </div>
  );
>>>>>>> 320f024ed9393f30f6213b826490fa7f6ae49225
}

export default App


