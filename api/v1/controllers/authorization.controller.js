const authorization = require('../models/authorize.model')
module.exports = {
    getAuth: async(req,res,next)=>{
        let autho = await authorization.findOne().exec()
        res.json(autho)
    },
    createAuth: async(req,res,next)=>{
        let {...body} = req.body
        let create = await authorization.create(body)
        res.json(create)
    },
    editAuth: async(req,res,next)=>{
        let authorize = req.body.authorization
        let edit = await authorization.findOneAndUpdate({_id:"6370ef1a004c4c3258f9c15f"},{authorization: authorize},{new: true})
        res.json(edit)
    }
}

//changed
//