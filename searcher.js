var express = require('express')
var router = express.Router()

const Joi = require('joi');

router.get('/:tag', async (req,res,next)=>{
    res.send(await global.ocean.assets.search(req.params.tag));
})

module.exports = router;