const express = require('express')
const router = express.Router()

router.route('/')
.get((req,res,next)=>{
    res.send('New Fields update')
})

module.exports = router