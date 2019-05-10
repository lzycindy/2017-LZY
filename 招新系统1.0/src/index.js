import React from 'react'
import ReactDom from 'react-dom'
import{ createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import reducers from './reducer'
import AuthRoute from './component/authroute/authroute'
import Login from './container/login/login'
import Actlogin from './component/actlogin/actlogin'
import AuthorInfo from './container/authorinfo/authorinfo'
import OligeInfo from './container/oligeinfo/oligeinfo'
import Register from './container/register/register'
import Dashboard from './component/dashboard/dashboard'
import './config'
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f

))
ReactDom.render(
    (<Provider store = {store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                 <Switch>
                 <Route path = '/'  exact component = {Login}></Route>
                    <Route path = '/login' component = {Login}></Route>
                    <Route path = '/authorinfo' component = {AuthorInfo}></Route>
                    <Route path = '/oligeinfo' component = {OligeInfo}></Route>
                    <Route path = '/register' component = {Register}></Route>
                    <Route path = '/actlogin' component = {Actlogin}></Route>
                    <Route component = {Dashboard}></Route>
                 </Switch>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)