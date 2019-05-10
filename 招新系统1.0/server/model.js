const mongoose = require('mongoose')
//链接mongo 使用youngondb这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/user'
mongoose.connect(DB_URL,{ useNewUrlParser: true })

const models = {
    user:{
      "username":{type:String,require:true} ,
      "stunum":{type:String,require:true},
      "pwd":{type:String,require:true} ,
      "type":{type:String,require:true},
      //个人信息表
      "avatar":{type:String},//头像
      "sex":{type:String},
      "phone":{type:String},
      "description":{type:String},
      "email":{type:String},
      //社团
      "orgid":{type:String}
    },
    //活动名 活动内容
    activity:{
      "title":{type:String},
      "article":{type:String},
      "currenttime":{type:String}
    }
    /*comment:{
      
    } */
}
for(let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]))
}

module.exports={
  getModel:function (name) {
      return mongoose.model(name);
  }
}