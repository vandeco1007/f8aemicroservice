const axios = require('axios');
const autho = require('../middlewares/autholize.middleware')
const checkKM = require('../middlewares/manualadjust.middleware')
const date = require('../const/date')
module.exports = {
    addpoint: async(req,res,next)=>{
        let {...body} = req.body
        let authorization = await autho()
        var data = {
            "manualAdjustments": [
              {
                "playerid": body.user,
                "adjustamt": body.adjustment,
                "turnovervalue": body.turnover,
                "removegwc": false,
                "servicefee": "0",
                "adminfeeratio": "0",
                "turnovertype": "0",
                "ecremarks": body.ecremarks,
                "remarks": body.remarks,
                "reasontype": "2",
                "manualtype": "1",
                "walletid": "MAIN"
              }
            ],
            "sendmessage": true,
            "messages": {
              "msgtype": "2",
              "subject": body.subject,
              "content": "<p>"+body.content+"</p>",
              "players": body.user
            }
          };
        var config = {
            method: 'post',
            url: 'https://boapi.f8bet.cc/f8bet-ims/api/v1/manualadjusts/batch',
            headers: { 
                'accept': '*/*', 
                'accept-encoding': 'gzip, deflate, br', 
                'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5', 
                'authorization': authorization, 
                'content-type': 'application/json;charset=UTF-8', 
                'origin': 'https://bo.f8bet.cc/', 
                'referer': 'https://bo.f8bet.cc/'
            },
            data : data
        };
        console.log(body.remarks.toUppercase)
        let check = await checkKM(date.currentStartDayOfMonth,date.currentEndDayOfMonth,body.remarks.toUpperCase(),body.user,authorization)
        console.log(check)
        if(check==false){
          axios(config)
          .then(function (response) {
              res.json(
                {
                  code:200,
                  mes: 'sucesss'
                }
              );
          })
          .catch(function (error) {
              res.json(error)
          });
        }else{
          res.json(
            {
              code:403,
              mes: 'forbbiden'
            }
          );
        }
    }
}