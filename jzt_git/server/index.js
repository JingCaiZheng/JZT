const http=require('http');
const express=require('express');

const app=express();
//跨域访问设置
app.all('*',(req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By","3.2.1");
  res.header("Content-Type","application/json;charset=utf-8");
  next();
})
let aaa=require('./api/aaa');
app.use('/api/aaa',aaa);
const server = app.listen(3001, function () {
    var host = server.address().address
    var port = server.address().port  
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
  })