const axios = require('axios');
module.exports = async(starttime,endtime,checkValue,playerid,authorization)=>{
    var testcase = []
    var config = {
    method: 'get',
    url: "https://boapi.f8bet.cc/f8bet-ims/api/v1/manualadjusts?&starttime="+starttime+"&endtime="+endtime+"&limit=25&offset=0&sort=DESC&sortcolumn=adjusttime&playerid="+playerid,
    headers: { 
        'authorization': authorization, 
        'Cookie': '__cf_bm=mhdBXG.oLIkMHybji3U8Lfju4KbxGkr79SgC4o4ZSxw-1668584499-0-AYTn85IqZMFttET5/lL052CexC1l9ysBtxSt+HCcuBeZGuYOUXoYWh7spKzzC/xe4276iTnlHxgFTu4yM4E/DIY='
    }
    };
    console.log(config.url)
    return axios(config)
    .then(function (response) {
        console.log(config.url)
        response.data.data.forEach(element => {
            testcase.push(element.remarks.toUpperCase().replace(/\s/g, ''))
        });
        return testcase
    }).then((res)=>{
        console.log(res)
        return res.includes("KC200") || res.includes("FR200") || res.includes(checkValue)
    }).catch(error => console.log("error"));
}