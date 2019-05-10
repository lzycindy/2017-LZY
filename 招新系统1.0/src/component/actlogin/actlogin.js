import React from 'react'
import {connect} from 'react-redux'
import Header from '../header/header'
require('../logon/logon.css')


@connect(
    state=>state.user
)
class Actlogin extends React.Component{


    render(){
        const actoneimg = require('../logon/img/actone.jpg')
        const acttwoimg = require('../logon/img/acttwo.jpg')
        return(
            <div>
                <div className = 'main'>
                <div className ='actBoxL'>
                    <img src ={actoneimg}></img>
                    <div className ='actmsg'>
                        <p>阳光网站18周年站庆</p>
                        <p>时间：2019.5.11 </p>
                        <p>地点：天津商业大学明德厅</p>
                        <button className ='detailsub'>查看详情</button>
                    </div>
                </div>
                <div className ='actBoxR'>
                <img src ={acttwoimg}></img>
                    <div className ='actmsg'>
                        <p>轰趴</p>
                        <p>时间：待定 </p>
                        <p>地点：待定</p>
                        <button className ='detailsub'>查看详情</button>
                    </div>
                </div>
                <div className ='actBoxL'>
                <img src ={actoneimg}></img>
                    <div className ='actmsg'>
                        <p>送大四</p>
                        <p>时间：待定 </p>
                        <p>地点：待定</p>
                        <button className ='detailsub'>查看详情</button>
                    </div>
                </div>
                <div className ='actBoxR'>
                <img src ={acttwoimg}></img>
                    <div className ='actmsg'>
                        <p>毕业典礼送花</p>
                        <p>时间：待定 </p>
                        <p>地点：待定</p>
                        <button className ='detailsub'>查看详情</button>
                    </div>
                </div>
            </div>
                
            </div>
        )
    }
}
export default Actlogin