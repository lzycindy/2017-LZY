import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {Modal} from 'antd'
import {Button} from 'antd'
import browserCookie from 'browser-cookies'
require('./user.css')
@connect(
    state=>state.user
)
class User extends React.Component{
    render(){
        const props = this.props
        const imgone = require('./img/userimgone.jpg')
        const linshi = require('./img/linshi2.jpg')
        return(
            <div className ='main'>
              <div className ='box1'>
                <div className ='box1_left'></div>
                <div className ='box1_right'>
                  <div className ='person_msg'>
                      <div className ='avatar'>
                          <div className ='avatarL'>
                            <img src={require(`../img/${props.avatar}.jpg`)} style={{width:50}} alt=""/>
                          </div>
                          <div className ='avatarR' onClick ={()=>{return <Link to={'/authorinfo'}></Link>} }>
                            修改资料
                          </div>
                      </div>
                      <div className ='msg'>
                          <span>昵称:</span>  <span>{props.username}</span>
                      </div>
                      <div className ='msg'>
                          <span>性别:</span>  <span>{props.sex}</span>
                      </div>
                      <div className ='msg'>
                          <span>学号:</span>  <span>{props.stunum}</span>
                      </div>
                      <div className ='msg'>
                          <span>绑定邮箱:</span>  <span>{props.email}</span>
                      </div>
                      <div className ='msg'>
                          <span>我想说:</span>  <span>{props.description}</span>
                      </div>
                      <Button onClick={browserCookie.erase('userid')}>注销登陆</Button>
                  </div>
                </div>
                <img className ='imgone' src ={imgone}></img>
              </div>
                <img src ={linshi} className ='linshi'></img>
                
                
                
            </div>
        )
    }
}
/*onClick = {window.location.href = window.location.href}
 
 
*/ 
export default User