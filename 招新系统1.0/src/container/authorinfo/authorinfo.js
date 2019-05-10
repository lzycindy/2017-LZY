import React from 'react'
import AvatarSelector from '../../component/avaterselector/avaterselector'
import { Button, List, Input,Radio} from 'antd'
import {connect} from 'react-redux'
import {update} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
import Storage from '../../redux/storage'
import { set } from 'browser-cookies';
@connect(
    state=>state.user,
    {update}
)

class AuthorInfo extends React.Component{
    constructor(props){
        super(props) 
        this.state = {
            avatar:'',
            userid:'',
            sex:'',
            stunum:'',
            email:'',
            description:'',
        }   
    }
    handleChange(key,val){
        this.setState({
            [key]:val.target.value
        })
    }


    render(){
        const path = this.props.location.pathname
        const redirect = this.props.redirectTo
        console.log(this.state)
        return(
            <div>
            {redirect&&redirect!==path?<Redirect to={this.props.redirectTo}/>:null}
                <h1>个人信息页面</h1>
                <AvatarSelector
                   selectAvatar={(imgname) => {
                       this.setState({
                           avatar: imgname
                       })
                      
                   }}
                ></AvatarSelector>
                
                <List>
                    <input onChange={v=>this.handleChange('userid',v)}  placeholder = "请输入昵称"></input>   
                    <input onChange={v=>this.handleChange('sex',v)}  placeholder = "请输入性别"></input>
                    <input onChange={v=>this.handleChange('stunum',v)}  placeholder = "请输入学号"></input>
                    <input onChange={v=>this.handleChange('email',v)} placeholder = "绑定邮箱"></input>                
                    <textarea onChange={v=>this.handleChange('description',v)} placeholder = "个人简介"></textarea>
                    <Button type = "primary"
                        onClick = {()=>{
                            this.props.update(this.state)
                            
                        }}
                    
                    >保存</Button>
                </List>
                


            </div>


        )
    }
}
export default AuthorInfo