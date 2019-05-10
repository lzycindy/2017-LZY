import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {connect}from 'react-redux'
import User from '../../component/user/user'
import Activity from '../../component/activity/activity'
import Olige from '../../component/olige/olige'
import Main from '../../component/main/main'
import Header from '../header/header'
import Logon from '../logon/logon'
import Actlogin from '../actlogin/actlogin'
import Foot from '../foot/foot'
import { BackTop } from 'antd';
@connect(
    state=>state
)

class Dashboard extends React.Component{
  
    render(){
        const {pathname} = this.props.location
        console.log(this.props)
        const user = this.props.user
        const nav_List = [
            {
                path:'/author',
                text:'首页',
                Icon:'index',
                title:'首页',
                component:Main
            },
            {
                path:'/activity',
                text:'活动',
                Icon:'activity',
                title:'活动页面',
                component:Activity
            },
            {
                path:'/logon',
                text:'往期活动',
                Icon:'logon',
                title:'往期活动',
                component:Logon
            },
            {
                path:'/actlogin',
                text:'活动进行中',
                Icon:'actlogin',
                title:'活动进行中',
                component:Actlogin
            },
            {
                path:'/olige',
                text:'社团',
                Icon:'olige',
                title:'社团页面',
                component:Olige
            },
            {
                path:'/me',
                text:'本人',
                Icon:'me',
                title:'个人中心',
                component:User
            }
            
        ]
        console.log(nav_List.map(v => (
            v.component
        )))
        return(
            
           <div>
                <Header></Header>
            <Switch>
                {nav_List.map(v => (
                            <Route key={v.path} path={v.path} component={v.component}></Route>
                        ))}
            </Switch>
             <Foot></Foot>       
            
                
               
        
            
             

           
            <div>
                <BackTop />
            </div>  

           </div>
        )
        
    }
}
//
export default Dashboard