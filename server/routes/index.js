const express = require('express')
const router = express.Router()
//test comment
router.get('/', (req, res)=>{
    res.render('index')
})

 

module.exports = router