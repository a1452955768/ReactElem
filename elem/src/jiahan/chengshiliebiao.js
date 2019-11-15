import React, { Component } from 'react'
import "./chengshiliebiao.css"
import { Link } from "react-router-dom"
export class chengshiliebiao extends Component {
    constructor(props) {
        super(props)

        this.state = {
            guess: [],
            hot: [],
            group: {},
            word: []
        }
    }
    componentWillMount() {
        fetch(
            "https://elm.cangdu.org/v1/cities?type=guess",
            {
                method: "get"
            }).then((res) => {
                return res.json()
            }).then((data) => {
                //    console.log(data)
                this.setState({
                    hot: data
                })
            }).catch(err => {
                console.log(err)
            });
        fetch(
            "https://elm.cangdu.org/v1/cities?type=hot",
            {
                method: "get"
            }).then((res) => {
                return res.json()
            }).then((data) => {
                //    console.log(data)
                this.setState(previous => {
                    return {
                        hot: data
                    }
                }, () => {
                    console.log(this.state.hot)
                })
            }).catch(err => {
                console.log(err)
            })
        fetch(
            "https://elm.cangdu.org/v1/cities?type=group",
            {
                method: "get"
            }).then((res) => {
                return res.json()
            }).then((data) => {
                console.log(data)
                console.log(data.A)
                Object.keys(data).map(k => {
                    this.state.word.push(k)
                    this.state.word.sort()
                    
                });
                this.setState({
                    group: data
                })

            }).catch(err => {
                console.log(err)
            })

    }


    render() {
        console.log(this.state.group)
        return (
            <div>
                <div id="header">
                    <Link to="" id="eleme">eleme</Link>
                    <Link to="/login" id="login" >登录|注册</Link>
                    <Link to="" id="login" >
                        <i className="el-icon-s-custom"></i>
                    </Link>
                </div>
                <ul id="hotAddress">
                    <li id="hotHeader">热门城市</li>
                    {
                        this.state.hot.map((v, i) => {
                            return <li key={i}>
                                <span>
                          <Link>      {v.name}</Link>
                                </span>
                                
                            </li>
                        })
                    }
                </ul>
                <div id="holeAddress" >
                    <ul>
                    {
                        this.state.word.map((v,i)=>{
                        return (<div>
                                    <li id="wordDiv">
                                    <span>{v}</span></li>

                                {
                                    this.state.group[v].map((vr,ir)=>{
                                    return (<li key={ir}><Link to={"/search/"+vr.id+"/"+vr.name}>{vr.name}</Link></li>)
                                    })
                                }
                                


                        </div>
                        )
                        })
                    }
                    </ul>
                </div>
            </div >
        )
    }
}

export default chengshiliebiao
