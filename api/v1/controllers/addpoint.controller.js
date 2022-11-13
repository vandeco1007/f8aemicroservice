const axios = require('axios');
const autho = require('../middlewares/autholize.middleware')
module.exports = {
    addpoint: async(req,res,next)=>{
        let {...body} = req.body
        console.log(req.headers.authorization)
        var data = {
            "manualAdjustments": [
              {
                "playerid": body.user,
                "adjustamt": "2",
                "turnovervalue": "2",
                "removegwc": false,
                "servicefee": "0",
                "adminfeeratio": "0",
                "turnovertype": "0",
                "ecremarks": "CODE_200K",
                "remarks": "CODE_200K",
                "reasontype": "2",
                "manualtype": "1",
                "walletid": "MAIN"
              }
            ],
            "sendmessage": true,
            "messages": {
              "msgtype": "2",
              "subject": "Chúc mức quý khách đã nhận được khuyến mãi từ F8BET.COM",
              "content": "<p>F8BET trân trọng thông báo quý khách đã nhận được 200 điểm từ khuyến mãi CODE_200K từ F8BET.COM. Chúc Quý khách tham gia may mắn và vui vẻ tại F8BET.COM</p>",
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
                'authorization': req.headers.authorization, 
                'content-type': 'application/json;charset=UTF-8', 
                'origin': 'https://bo.f8bet.cc/', 
                'referer': 'https://bo.f8bet.cc/'
            },
            data : data
        };

        axios(config)
        .then(function (response) {
            res.json(
                response.data
            );
        })
        .catch(function (error) {
        console.log(error);
        });
    }
}