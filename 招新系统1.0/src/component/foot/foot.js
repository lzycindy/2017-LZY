import React from 'react'
import {connect} from 'react-redux'
require('./foot.css')



@connect(
    state=>state.user
)
class Foot extends React.Component{


    render(){
      
        console.log(this.props)
        return(
            <div className ='foot'>
                <p>此网站一切解释权归阳光网站所有</p>
            </div>
        )
    }
}
export default Foot