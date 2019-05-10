//入口目录
const express = require('express')
const bodyParser = require('body-parser')//接受post中间件
const cookieParser = require('cookie-parser')//express自带cookie验证中间件
const userRouter = require('./user')//用户路由中间件
const app  = express()
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)//开启路由中间件



app.listen(9093,()=>{
    console.log('node website start on 9093')
})
