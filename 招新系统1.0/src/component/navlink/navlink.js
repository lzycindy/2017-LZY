import React from 'react'
import PropTypes from 'prop-types'
import Storage from '../../redux/storage'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
require('./navlink.css')
@withRouter

class NavLink extends React.Component{
    static propTypes = {
        data: PropTypes.array.isRequired
    }
    componentDidMount(){
        const aut = this.state
        const avatarname = Storage.get('useraut')
        //获取缓存的数据
            if(!aut){
                this.setState ={
                    aut:avatarname
                }
            }
        }
    render(){
        const {pathname} = this.props.location
        console.log(this.props)
        const navList = this.props.data.filter(v=>!v.hide)
        
       return(
           <div className = 'navbar'>
            <ul className ='.navbarul'>
               {navList.map(v=>(
                   <li 
                       className = '.navbarli'
                       key={v.path}
                       title={v.text}
                       selected={pathname===v.path}
                       onClick={()=>{this.props.history.push(v.path)}}
                   >{v.text}
                   </li>
               ))}
           </ul>
           </div>
       )
    }
}

export default NavLink