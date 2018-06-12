const mysql=require('mysql');
// 连接池
const pool=mysql.createPool({
    host:'',
    user:'root',
    password:'',
    database:'',
    connectionLimit:25,
});
module.exports=pool;