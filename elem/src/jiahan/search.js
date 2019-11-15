import React, { Component } from 'react'
import "./search.css"
import "./cookie"
import { Link } from "react-router-dom"
export class search extends Component {
    constructor(props) {
        super(props)
        this.setState({
            cityid:this.props.match.params.id,
            city:this.props.match.params.name
        })
        this.state = {
             cityid:"",
             city:"",
             getData:[]
        }
    }
    submit(){
        fetch("https://elm.cangdu.org/v1/pois?city_id="+this.props.match.params.id+"&keyword="+this.refs.inp.value+"&type=search",{method:"get"}).then(res=>{
            return res.json()
        }).then(data=>{
            console.log(data)
            this.setState({
                getData:data
            })
        }).catch(err=>{
            console.log(err)
        })
    }
 
    
    render() {
        return (
            <div>
      <div id="header">
          <Link  id="eleme"> <Link to="/"><i className="el-icon-arrow-left"></i></Link>  </Link>
          <span >{this.props.match.params.name}</span>
          <Link  id="changeCity" to="/">切换城市</Link>
      </div>
      <div id="search">
          <input type="text" placeholder="输入学校、商务楼、地址" id="text" ref="inp" /><br/>
          <button id="btn" onClick={this.submit.bind(this)}>提交</button>
      </div>
      <ul id="searchArea">
        
             {
                 this.state.getData.map((v,i)=>{
                     return (
                        <Link key={i}>   <li ><Link to={{pathname:"/home",state:{
                            a:v
                        }}}><p id="weight">{v.name}</p><p id="qing">{v.address}</p></Link></li> </Link>
                     )
                 })
             }
           
        
          
      </ul>
  </div>
        )
    }
}

export default search
