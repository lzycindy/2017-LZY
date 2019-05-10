import axios from "axios"
import { getRedirectPath }from '../util'
import Storage from './storage'
const ERROR_MSG = 'SORRY,ERROR'
const LOAD_DATA = 'LOAD_DATA'
const AUTH_SUCCESS = 'AUTH_SUCCESS' 
const initState={
    redirectTo:'',
    msg:'',
    username:'',
    stunum:'',
    pwd:'',
    type:''
}
//判断函数
function authSuccess(obj){
	const {pwd,...data} = obj
	return {type: AUTH_SUCCESS, payload:data}
}
function errMsg(msg){
    return{ msg,type:ERROR_MSG }
}

export function loadData(userinfo){
    return {type:LOAD_DATA,payload:userinfo}
}
export function update(data){
    return dispatch=>{
        axios.post('/user/update', data)
           .then(res=>{
                if (res.status==200&&res.data.code===0) {
                    dispatch(authSuccess(res.data.data))
                    Storage.set('useraut',res.data.data)
                }else{
                    dispatch(errMsg(res.data.msg))
                }
           })
    }
}  

//reducer
export function user(state=initState,action){
    switch(action.type){
        case AUTH_SUCCESS:
            return {...state, msg:'', redirectTo:getRedirectPath(action.payload), ...action.payload}
        case ERROR_MSG:
            return{...state,isAuth:false,msg:action.msg}
        case LOAD_DATA:
            return{...state,...action.payload}
    
        default:
            return state
    }
    
}

export function log({username,pwd,type}){
    console.log(1)
    if(!username||!pwd||!type){
        return errMsg('用户名、密码和身份必须输入')
    }
    
  
    return dispatch=>{
        axios.post('/user/login',{username,pwd,type})
            .then(res=>{
                if(res.status===200&&res.data.code===0){
                    dispatch(authSuccess(res.data.data))
                }else{
                    dispatch(errMsg('res.data.msg'))
                     //后端返回msg
                }
            })
    } 
}
export function registerjg({username,pwd,stunum,repeatpwd,type}){
    if(!username||!pwd||!stunum||!type){
        return errMsg('用户名,密码和身份必须输入')
    }
    if(pwd!== repeatpwd){
        return errMsg('密码和确认密码不同')
    }
    
return dispatch=>{
    axios.post('/user/register',{username,pwd,stunum,type})
        .then(res=>{
            if(res.status===200&&res.data.code===0){
                dispatch(authSuccess({username,pwd,stunum,type}))
            }else{
                dispatch(errMsg('res.data.msg'))
                 //后端返回msg
            }
        })
}   
    
}