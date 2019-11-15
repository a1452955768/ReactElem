import React, { Component } from 'react'
import "./home.css"
import 'element-theme-default';
import Swiper from 'swiper'
import "../../node_modules/swiper/css/swiper.min.css"
export class home extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.location.state.a);
        this.state = {
         arr:[],
         merchant:[]
        }
    }
    componentWillMount(){

        //  console.log(this.props.state.a)
        fetch("https://elm.cangdu.org/v2/index_entry",{method:'get'}).then(res=>{
            return res.json()
        }).then(data=>{
            console.log(data)
           for(var i = 0;i<data.length/8;i++){
               //数组分割
               let subArr = data.slice(i*8,(i+1)*8)
               this.setState((previousState)=>{
                   console.log(subArr)
                return {
                    arr:[...previousState. arr,subArr]
                }
            },()=>{
                console.log(this.state.arr)
            })
           }
        }).catch(err=>{
            console.log(err)
        })
        // 商铺列表的数据请求
        fetch("https://elm.cangdu.org/shopping/restaurants?latitude="+this.props.location.state.a.latitude+"&longitude="+this.props.location.state.a.longitude,{method:"get"}).then(res=>{
            return res.json()
        }).then(data=>{
          console.log(data)
          this.setState(()=>{
            return {
                merchant:data
            }
          })
        }).catch(err=>{
            console.log(err)
        })
    }
    componentDidUpdate(){
        var mySwiper = new Swiper ('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            
            
            // 如果需要滚动条
            scrollbar: {
              el: '.swiper-scrollbar',
            },
            pagination: {
                el: '.swiper-pagination',
              },
          })               
    }
    render() {
        return (
            <div id="wrap">
                <header>
                   <span className="el-icon-search span1"></span>
        <span className="span2">{this.props.location.state.a.name}</span>
                    <span className="el-icon-arrow-right"></span>
                </header>
                {/* swiper 插件 */}
            
                <div className="swiper-container" style={{width:"3.7rem",height:"2.4rem"}}>
    <div className="swiper-wrapper">
    { 
      this.state.arr.map((v,i)=>{
          return  <div className="swiper-slide" key={i}>
              {
                  v.map((v1,i1)=>{
                    return <div key={i1} style={{width:"25%",float:"left"}}>
                         <img src={'https://fuss10.elemecdn.com'+v1.image_url}  style={{width:"0.8rem",height:"0.8rem"}}></img>  
                  <span>{v1.title}</span>
                    </div>
                  })
              }
              </div>
      })
       
    }
    </div>
  
    {/* <!-- 如果需要分页器 --> */}
    <div className="swiper-pagination"></div>
</div>       
                {/* 附近商家 */}
                <p className="p2">
                    <span className="el-icon-date"></span>
                    <span className="span4">附近商家</span>
                </p >
                {
                    this.state.merchant.map((v,i)=>{
                        return   <ul key={i}>
                    
                      
                        <li className="lis">
                               <div className="div_img">
                            <img src={"//elm.cangdu.org/img/"+v.image_path} style={{width:"100%",height:"100%"}}></img>
                            </div>
                               <div className="content">
                                   <p className="conp1">
                                       <span className="conspan1">品牌</span>
                    <span className="conspan2">{v.name}</span>
                                   </p >
                                   <p className="conp2">
                                       <span className="conspan3">4.7</span>
                                       <span className="conspan4">106单</span>
                                   </p >
                                   <p className="conp3">
                                       <span className="conspan5">￥</span>
                                       <span>20起送</span>
                                       <span>/</span>
                                       <span>配送费</span>
                                   </p >
                               </div>
                               <div className="text">
                                   <p className="textp1">保准票</p >
                                   <p className="textp2">
                                       <span className="textspan1">蜂鸟专送</span>
                                       <span className="textspan2">准时达</span>
                                   </p >
                                   <p className="textp3">
                                       <span className="textspan3">10公里</span>
                                       <span className="textspan4">/</span>
                                       <span className="textspan5">40分钟</span>
                                   </p >
                               </div>
                           </li>
                   
                   
               </ul>
                    })
              
    }
            </div >
        )
    }
}

export default home
