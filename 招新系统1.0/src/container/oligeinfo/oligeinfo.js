import React from 'react'
import AvatarSelector from '../../component/avaterselector/avaterselector'
import { Button, List, Input,Radio} from 'antd'
import {connect} from 'react-redux'
import {update} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
@connect(
    state=>state.user,
    {update}
)

class OligeInfo extends React.Component{
    constructor(props){
        super(props) 
        this.state = {
            qq:'',
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
        return(
            <div>
            {redirect&&redirect!==path?<Redirect to={this.props.redirectTo}/>:null}
                <h1>社团信息页面</h1>
                <AvatarSelector 
                selectAvatar = 
                {
                    (imgname=>{
                        this.setState({
                            avatar:imgname
                        })
                    })
                }>

                </AvatarSelector>
                <List>
                <input onChange={v=>this.handleChange('qq',v)} placeholder = "社团联系方式"></input> 
                    <textarea onChange={v=>this.handleChange('description',v)} placeholder = "社团简介"></textarea>
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
export default OligeInfo