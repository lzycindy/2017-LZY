
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom'
import Logon from '../logon/logon'
import Actlogin from '../actlogin/actlogin'
require('./activity.css')
const MenuItem = ({ to, text, exact }) => {
 
        return <Route path={to} exact={exact} children={({ match }) => {console.log(match,"match")
            return <Link to={to}><li className='navbottom'>{text}</li></Link>}} />
 
};


class Activity extends Component {
 
    render() {
        
            
            return (
                <Router> 
                    <div className ='content' >
                        <div className ='navBox'>       
                            <MenuItem to="/logon" text="往期活动" exact />               
                            <MenuItem to="/actlogin" text="活动进行中" />                      
                        </div>
                    
                        <div>
                            <Route path="/logon" component={Logon} />
                            <Route path="/actlogin" component={Actlogin} />
                            <Redirect path="/activity" to={{pathname: '/logon'}} />
                        </div>                       
                    </div>
                </Router>
            
            )
            
    }
 
}
 
export default Activity