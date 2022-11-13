const express = require('express')
const {
    getAuth,
    createAuth
} = require('../controllers/authorization.controller')
const router = express.Router()

router.route('/')
.get(
    getAuth
)
.post(
    createAuth
)

module.exports = router