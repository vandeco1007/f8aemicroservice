const express = require('express')
const router = express.Router()

router.route('/')
.get((req,res,next)=>{
    res.send('Reduce point')
})

module.exports = router