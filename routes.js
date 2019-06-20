var express = require('express');
var multer = require('multer');
var router = express();

const bot = require ('./Controller/bot.controller')


router.get('/',(req,res)=>{
    res.send("it works");
})
router.get('/getAllReplies',bot.getAllReplies);
router.post('/insertReply',bot.insertReply);






module.exports = router;
