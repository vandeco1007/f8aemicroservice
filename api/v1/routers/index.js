const addpoint = require('./addpoint.router')
const authorization = require('./authorization.router')

const router = (app)=>{
    app.use('/addpoint', addpoint)
    app.use('/autho', authorization)
}

module.exports = router
