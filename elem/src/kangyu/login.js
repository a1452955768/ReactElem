import React, { Component } from 'react'
import { Switch } from 'element-react';
import 'element-theme-default';
import '../kangyu/login.css'
import {withRouter}  from "react-router-dom"
export class login extends Component {
    constructor(props) {

        super(props)

        this.state = {
            imgs: "",
            passw: "password",
            zh: "",
            bol: true
        }
        this.yanZhengMa = this.yanZhengMa.bind(this)
        this.backs = this.backs.bind(this)
    }
    // 获取验证码的数据请求
    yanZhengMa() {
        fetch("https://elm.cangdu.org/v1/captchas", {
            method: "post",
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
            this.setState({
                imgs: data.code
            })
        })
    }
    // 开关按钮的点击事件
    onbul() {
        if (this.state.passw == "password") {
            console.log("错误")
            this.setState({
                passw: "text",
                bol: false
            })
        } else {
            console.log("正确")
            this.setState({
                passw: "password",
                bol: true
            })
        }
    }
//    返回上一级 
backs(){
    this.props.history.go(-1)
}

    // 登录的点击事件
    denglv() {
        console.log(this.refs.z.value)
        fetch("https://elm.cangdu.org/v2/login", {
            method: "post",
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: this.refs.z.value,
                password: this.refs.m.value,
                captcha_code: this.refs.y.value
            })
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
        })
    }
    componentWillMount() {
        this.yanZhengMa()
    }
    render() {
        return (
            <div id="all">
                <header>
                    <i className="el-icon-arrow-left" id="left" onClick={this.backs}></i>
                    <span id='middle'>密码登录</span>
                </header>
                <div id="center">
                    <input type="text" placeholder="账号" ref="z"></input>
                    <input type={this.state.passw} placeholder="密码" ref="m"></input>
                    <input type="text" placeholder="验证码" ref="y"></input>
                    <p id="size" onClick={this.yanZhengMa}>
                        <span>看不清</span>
                        <span>换一张</span>
                    </p>
                    <div id="div_img">
                        <img src={this.state.imgs}></img>
                    </div>
                    <div id="on">
                        <Switch
                          value={this.state.bol}
                          onText={"abc"}
                          offText={"c.."}
                          onChange={this.onbul.bind(this)}>
                        </Switch>
                       
                    </div>
                    <button onClick={this.denglv.bind(this)}>登录</button>
                </div>
            </div>
        )
    }
}

export default withRouter(login)
