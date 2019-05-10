import React from 'react'
import { Input,Button,List,Form, Checkbox}from 'antd'
import FormItem from 'antd/lib/form/FormItem';
import {log} from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Headerunlog from '../../component/headunlogin/headunlogin'
import Foot from '../../component/foot/foot'
require('./login.css')
@connect(
    state => state.user,
    {log}
)



class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            pwd:''
        }
        //绑定this给login页面
        this.register = this.register.bind(this)
        this.login = this.login.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
       
    }
    
    handleChange(key,val){
        this.setState({
            [key]:val.target.value
        })
    }
    handleLogin(){
        this.props.log(this.state)
    }
    //路由组件
    register(){
        console.log(this.props)
        this.props.history.push('/register')
    }
    login(){
        console.log(this.props)
        this.props.history.push('/login')
    }
    render(){
        return(
            <div className = 'login'>
             {this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
             <Headerunlog></Headerunlog>
            <div className = 'login_list'>
                  <div className = 'button'>
                    <div onClick = {this.login}>登录</div>
                    <div onClick = {this.register}>注册</div>
                  </div>
                  <div className = 'loginList'>
                    <div className = 'detail'>账号：</div>
                    <input onChange={v=>this.handleChange('username',v)}  placeholder = "输入用户名"></input>   
                    <div className = 'detail'>密码：</div>
                    <input type = 'password' onChange={v=>this.handleChange('pwd',v)}  placeholder = "请输入密码"></input>
                    <div className = 'detail'>身份：</div>
                    <input onChange={v=>this.handleChange('type',v)} placeholder = "填入“author”个人用户/“olige”社团管理员用户"></input>
                  </div>
            <div className='loginbutton'  htmlType="submit" onClick = {this.handleLogin}></div>
            <div className = 'log_reg_p'> {this.props.msg?<p>{this.props.msg}</p>:null}</div>
           
                
            </div>
            <Foot></Foot>
            </div>
        )
    }
}
const Login = Form.create({ name: 'normal_login' })(LoginForm);

export default Login