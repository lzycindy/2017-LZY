import React from 'react'
import { Button, List, Input,Radio} from 'antd'
import {connect} from 'react-redux'
import {registerjg} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
import Headerunlog from '../../component/headunlogin/headunlogin'
import Foot from '../../component/foot/foot'
require('../login/login.css')
require('./register.css')
@connect(
    state=>state.user,
    {registerjg}//暴露函数名不能有下划线
)

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            stunum:'',
            pwd:'',
            repeatpwd:'',
            type:'author'
        }
        this.handleRegister = this.handleRegister.bind(this)
        this.login = this.login.bind(this)
    }
    handleRegister(){
        this.props.registerjg(this.state)
    }
    handleChange(key,val){
        this.setState({
            [key]:val.target.value
        })
    }
    login(){
        console.log(this.props)
        this.props.history.push('/login')
    }
   
     render(){
        const RadioItem = Radio.RadioItem
        return(
            <div>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
                <h2>注册页</h2>
                <Headerunlog></Headerunlog>
                <div className = 'login_list2'>
                    <div className = 'button'>
                        <div onClick = {this.register}>注册</div>
                        <div onClick = {this.login}>登录</div> 
                    </div>
                    <div  className = 'loginList'>
                        <div className = 'detail1'>账号：</div>
                        <input onChange={v=>this.handleChange('username',v)}  placeholder = "输入用户名"></input> 
                        <div className = 'detail1'>学号：</div>  
                        <input onChange={v=>this.handleChange('stunum',v)}  placeholder = "输入学号"></input>
                        <div className = 'detail1'>密码：</div>
                        <input onChange={v=>this.handleChange('pwd',v)}  placeholder = "请输入密码"></input>
                        <div className = 'detail1'>确认密码：</div>
                        <input onChange={v=>this.handleChange('repeatpwd',v)} placeholder = "确认密码"></input>
                        <div className = 'detail1'>身份：</div>
                        <input onChange={v=>this.handleChange('type',v)} placeholder = "填入“author”个人用户/“olige”社团管理员用户"></input>
                        <button className='reg_button' type = 'primary' onClick={this.handleRegister}>注册</button>
                        <div className = 'log_reg_p' style ={{marginLeft: 145}}>{this.props.msg?<p >{this.props.msg}</p>:null}</div>
                    </div>
                </div>
                <Foot></Foot>
            </div>
        )
        
    }
    // style ={{}}
    /*
    <RadioItem 
                        checked = {this.state.type =="author" } 
                        onChange={()=>this.handleChange('type','author')}
                    >
                         个人
                    </RadioItem>
                    <RadioItem 
                        checked = {this.state.type =="olige" } 
                        onChange={()=>this.handleChange('type','olige')}
                    >
                         社团用户
                    </RadioItem>*/ 
}

export default Register
