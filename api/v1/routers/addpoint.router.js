const express = require('express')
const {
    addpoint
} = require('../controllers/addpoint.controller')
const router = express.Router()

router.route('/:user')
.post(
    addpoint
)

module.exports = router