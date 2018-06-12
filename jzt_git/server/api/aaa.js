const express=require('express');
const sqls=require('../sqlMap.js');
const pool=require('../pool.js');
const router=express.Router();
//路由
router.get('/left',(req,res)=>{
    pool.query(sqls,[],(err,result)=>{
        res.json(result);
    })
})

module.exports=router;