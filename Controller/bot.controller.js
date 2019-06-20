const Bot = require('../Model/Bot');
const hey = require('../Model/logger');

module.exports={

    readAllReply(req,res){
        Bot.findAll().then(replies=>{
            res.status(200).json(replies);
        }).catch(err=>{
            res.send(err);
        })
    },

    readSpecificReply(req,res){

        let toBeFound = {
            botResponseId:req.params.replyId
        }
        Bot.findAll({where:toBeFound}).then(replies=>{
            if(replies[0]===undefined){
                res.status(200).json({
                    success:false,
                    message:'cannot find the reply you specified'
                })
            }
            else{
                res.status(200).json({
                    success:true,
                    reply:replies[0].dataValues
                })
            }
        })
    },

    createReply(req,res){
        let bodyData = {
                            botResponseMessage:req.body.replyMessage
        }
        console.log(bodyData)
        Bot.create(bodyData).then(data=>{
            res.status(200).json({
                success:true,
                message:'created Reply successfully'
            });
        }).catch(err=>{
            hey.logThis(err);
            res.status();
        })
    },

    updateReply(req,res){
        let bodyData = {
            botResponseMessage:req.body.replyMessage
        }
        let toBeUpdated = {
            botResponseId:req.body.botResponseId
        }
        Bot.update(toBeUpdated,bodyData).then(data=>{

            res.status(200).json({
                success:true,
                message:'successfully updated message'
            });
        })
    },

    deleteReply(req,res){
        let deleteParty = {
            botResponseId:req.params.replydId
        }

        Bot.delete({where:deleteParty}).then(data=>{
            res.status(200).json({
                success:true,
                message:'successfull deleted reply'
            })
        })
    }
}