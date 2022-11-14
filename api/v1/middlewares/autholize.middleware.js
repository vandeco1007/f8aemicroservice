const authorization = require('../controllers/authorization.controller')

module.exports = async(req,res,next)=>{
    let autho = await authorization.findOne().exec()
    return res.json(autho)
}