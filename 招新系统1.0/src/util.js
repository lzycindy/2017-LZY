/*根据用户信息 返回跳转地址*/
export function getRedirectPath({type,avatar}){
    let url = (type =='olige')? '/olige' : '/author' 
    if(!avatar){
        url += 'info'
    }
    return url
}

//跳转到author/info或者olige/info