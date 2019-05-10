import React from 'react'
import {connect} from 'react-redux'
require('./navbar.css')



@connect(
    state=>state.user
)
class Navbar extends React.Component{


    render(){
        return(
            <div className = 'navbar'>
                <ul>
                    <li>首页</li>
                    <li>社吧</li>
                    <li>活动</li>
                    <li>个人中心</li>
                    <li>关于我们</li>
                </ul>
                
            </div>  
        )
    }
}
export default Navbar