import React from 'react'
import {connect} from 'react-redux'




@connect(
    state=>state.user
)
class Msg extends React.Component{


    render(){
        console.log(this.props)
        return(
            <div>
                <p>
                    信息中心
                </p>
            </div>
        )
    }
}
export default Msg