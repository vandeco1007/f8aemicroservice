const addpoint = require('./addpoint.router')
const authorization = require('./authorization.router')
const test = require('./test')

const router = (app)=>{
    app.use('/addpoint', addpoint)
    app.use('/autho', authorization)
    app.use('/test',test)
}

module.exports = router
