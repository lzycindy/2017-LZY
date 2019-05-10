//用户相关的express接口 
const express  = require('express')
const Router = express.Router()//使用路由对象挂载
const model = require('./model')
const User = model.getModel("user")
const md5 = require('md5')

Router.get('/info',function(req,res){
    const {userid,avatar} = req.cookies
    if(!userid){
        return res.json({code:1})
    }
    User.findOne({_id:userid},function(err,doc){
        if(err){
            return res.json({code:1,msg:'服务端出错了'})
        }
        if(doc){
            return res.json({code:0,data:doc})
        }
    })
})
Router.get('/list',function(req,res){
    //User.remove({},function(e,d){})
    User.find({},function(err,doc){
        return res.json({data:doc})
    })
})
//再次加密
function md5Pwd(pwd){
    const PwdAgin = 'loveliu_is_a_beautiful_girl_1999/2/8@163.com'
    return md5(md5(pwd+PwdAgin))
}
//注册成功 返回正确code
Router.post('/update', function(req, res){
    const userid = req.cookies.userid
    if(!userid){
        return res.json.dumps({code:1})
    }
    const body = req.body
    User.findByIdAndUpdate(userid, body, function(err, doc){
        const data = Object.assign({},{
            user: doc.user,
            type: doc.type,
        }, body)
        return res.json({code:0, data})
    })
})
Router.post('/login',function(req,res,next){
    const {username,pwd} = req.body
    User.findOne({username,pwd:md5Pwd(pwd)},function(err,doc){
        
        if(!doc){
            return res.json({code:1,msg:'用户名或密码错误'})
        }
        res.cookie('userid',doc._id)
        return res.json({code:0,data:doc})
    })
})
Router.post('/register',function(req,res,next){
    
    const {username,pwd,type,stunum} = req.body
    User.findOne({username},function(err,doc){
        if(doc){
            return res.json({code:1,msg:'用户名重复'})
        }
        const userModel = new User({username,type,stunum,pwd:md5Pwd(pwd)})
        userModel.save(function(e,d){
            if(e){
                return res.json({code:1,msg:'后端创建失败'}) 
            }
            const {user,type,_id} = d
            res.cookie('userid',_id,type)
            return res.json({code:0,data:{user}})
        })
    })
})

//暴露user路由接口
module.exports = Router