const express = require('express')
const router = express.Router()

router.route('/')
.get((req,res,next)=>{
    res.send('This is the new update')
})

module.exports = router