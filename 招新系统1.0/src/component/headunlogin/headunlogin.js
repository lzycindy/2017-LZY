import React from 'react'
import {connect} from 'react-redux'
import Navbar from '../../component/navbar/navbar'
require('./headunlogin.css')


@connect(
    state=>state.user
)
class Headerunlog extends React.Component{


    render(){
        return(
            <div className = 'header'>
                <div className = 'logo1'>
                  
                </div>
                <div className = 'title'>阳光网站</div>
                <Navbar></Navbar>
                <div className = 'wel_word'>
                    <div>欢迎你使用阳光网站 </div>
                    <div>报名招新系统</div>
                </div>
                
            </div>
        )
    }
}
export default Headerunlog