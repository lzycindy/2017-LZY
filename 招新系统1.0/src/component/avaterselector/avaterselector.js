import React from 'react'
import {Grid, List} from 'antd-mobile'
import PropTypes from 'prop-types'
require('./avaterselector.css')
class AvatarSelector extends React.Component{
    static propTypes = {
        selectAvatar: PropTypes.func.isRequired
    }
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        
        const avatarList = 'boy,girl,boy2,girl2'
                            .split(',')
                            .map(v=>({
                                icon:require(`../img/${v}.jpg`),
                                text:v
                            }))
        const gridHeader = this.state.text 
                            ? (<div>
                                <span>已选择头像</span>
                                <img style={{width: 150}} src={this.state.icon} alt=""/>
                            </div>) 
                            :  <div>'请选择头像'</div>                   
        return (
            <div>
                <List renderHeader={() => gridHeader} className ="avatar_list">
                    <Grid className = "img_list"
                    itemStyle={{ height: '80px', width:'80px',margin:'50px'}}
                        data={avatarList} 
                        columnNum={1}
                        onClick={elm => {
                            this.setState(elm)
                            
                            this.props.selectAvatar(elm.text)
                            
                        }}
                    />
                </List>
            </div> 
        )
    }
}

export default AvatarSelector