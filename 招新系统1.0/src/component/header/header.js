import React from 'react'
import {connect} from 'react-redux'
import Storage from '../../redux/storage'
import NavLink from '../../component/navlink/navlink'
import User from '../../component/user/user'
import Activity from '../../component/activity/activity'
import Olige from '../../component/olige/olige'
import Main from '../../component/main/main'
require('./header.css')


@connect(
    state=>state.user
    
)
class Header extends React.Component{
  
   

    render(){
        
        console.log(Storage.set());
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
                path:'/olige',
                text:'社团',
                Icon:'olige',
                title:'社团页面',
                component:Olige
            },
            {
                path:'/me',
                text:'个人中心',
                Icon:'me',
                title:'个人中心',
                component:User
            }
            
        ]

        return(
            <div className = 'header'>
                <div className = 'logo'>
                <div className = 'avtar'>
                <img src={require(`../img/${this.props.avatar}.jpg`)}  alt=""/>
                   </div>
                </div>
                <div className = 'title'>阳光网站</div>
                <NavLink  data ={nav_List}></NavLink>
                <div className = 'wel_word'>
                    <div>欢迎你使用阳光网站 </div>
                    <div>报名招新系统</div>
                </div>
                <div className ='search'>
                    <input type="text"  placeholder="搜索社团"/>
                    <button >Let's go</button>
                </div>
            </div>
        )
    }
}

export default Header