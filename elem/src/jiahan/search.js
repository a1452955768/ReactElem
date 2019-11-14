import React, { Component } from 'react'
import "./search.css"

import { Link } from "react-router-dom"
export class search extends Component {
    constructor(props) {
        super(props)
        this.setState({
            cityid:this.props.match.params.id
        })
        this.state = {
             cityid:""
        }
    }
    

    render() {
        return (
            <div>
      <div id="header">
          <Link  id="eleme">  <i className="el-icon-arrow-left"></i> </Link>
          <span id="login">{}</span>
          <Link  id="changeCity">切换城市</Link>
      </div>
      <div id="search">
          <input type="text" placeholder="输入学校、商务楼、地址" id="text" /><br/>
          <button id="btn">提交</button>
      </div>
      <ul id="searchArea">
         <li >
           <Link >    <p id="weight">{}</p></Link>
         <Link >  <p id="qing">{}</p></Link>
          </li>
          
      </ul>
  </div>
        )
    }
}

export default search
