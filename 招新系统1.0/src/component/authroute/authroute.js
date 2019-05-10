//authroute组件 获取用户信息实现部分跳转       
import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import {loadData} from '../../redux/user.redux'
import {connect} from 'react-redux'

@withRouter   
@connect(
    null,
    {loadData}
)
class AuthRoute extends React.Component{
    //先获取用户信息再跳转
    /*
    获取用户信息
        用户状态
        {登录？
        url地址是否跳转？
        身份？
        完善信息？
        }
    */
    componentDidMount() {
       
       const publicList = ['/login','/register']//路径数组
       const pathname = this.props.location.pathname
       if (publicList.indexOf(pathname)>-1) {
           return null
          }
             /* user/info 接口 返回用户当前信息*/
             axios.get('/user/info')
             .then(res=>{
                 if (res.status==200) {
                     if (res.data.code==0) {
                        this.props.loadData(res.data.data)
                         //有登陆信息
                     }else{
                         console.log(this.props.history)
                         //未登录去登录页
                         this.props.history.push('/login')
                     }
                 }
             })   
    }
    render(){
        return null
    }
        
}
export default AuthRoute