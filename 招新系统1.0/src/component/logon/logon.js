import React from 'react'
import {connect} from 'react-redux'
import Header from '../header/header'
import {Button} from 'antd'
require('./logon.css')


@connect(
    state=>state.user
)
class Logon extends React.Component{

    render(){
        const actoneimg = require('./img/actone.jpg')
        const acttwoimg = require('./img/acttwo.jpg')
        return(
            <div className = 'main'>
                <div className ='actBoxL'>
                    <img src ={actoneimg}></img>
                    <div className ='actmsg'>
                        <p>阳光网站宣讲会</p>
                        <p>时间：3月15日（周五） 20:00</p>
                        <p>地点：三教102</p>
                        <Button className ='detailsub' onClick ={()=>{window.location.href="https://mp.weixin.qq.com/s/fE5JBde5dVnY2khnOTnylg"}} >查看详情</Button>
                    </div>
                </div>
                <div className ='actBoxR'>
                <img src ={acttwoimg}></img>
                    <div className ='actmsg'>
                        <p>换届</p>
                        <p>时间：3月26日 17:10——18:00 </p>
                        <p>地点：天津商业大学信息交流中心</p>
                        <Button className ='detailsub' onClick ={()=>{window.location.href="https://mp.weixin.qq.com/s/XK__tRRGzu5Qyrk9jU3Uag?tdsourcetag=s_pcqq_aiomsg"}}>查看详情</Button>
                    </div>
                </div>
                <div className ='actBoxL'>
                <img src ={actoneimg}></img>
                    <div className ='actmsg'>
                        <p>青团</p>
                        <p>时间：2019-4-5 </p>
                        <p>地点：天津商业大学建行二楼</p>
                        <Button className ='detailsub' onClick ={()=>{window.location.href="https://mp.weixin.qq.com/s/H51orCaM2QaqwDCB8VvyKA"}}>查看详情</Button>
                    </div>
                </div>
                <div className ='actBoxR'>
                <img src ={acttwoimg}></img>
                    <div className ='actmsg'>
                        <p>年庆 </p>
                        <p>时间：2018.12.16 </p>
                        <p>地点：天津商业大学三教206</p>
                        <Button className ='detailsub' onClick ={()=>{window.location.href="https://mp.weixin.qq.com/s/RNMyJjUzb0nDVrW_0iZQCA?tdsourcetag=s_pcqq_aiomsg"}}>查看详情</Button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Logon