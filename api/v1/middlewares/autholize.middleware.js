const authorization = require('../controllers/authorization.controller')

module.exports = async(req,res,next)=>{
    let autho = await authorization.find()
    return res.json(autho)
}