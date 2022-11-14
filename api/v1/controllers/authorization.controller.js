const authorization = require('../models/authorize.model')
module.exports = {
    getAuth: async(req,res,next)=>{
        let autho = await authorization.findOne().exec()
        res.json(autho[0].authorization)
    },
    createAuth: async(req,res,next)=>{
        let {...body} = req.body
        let create = await authorization.create(body)
        res.json(create)
    }
}