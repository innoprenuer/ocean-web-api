//import { Ocean, Logger } from '@oceanprotocol/squid'
const { Ocean, Logger } = require('@oceanprotocol/squid')
const Joi = require('joi');
const express = require('express');
const app = express();
let router_search = require('./searcher.js')
let { getOcean }   = require('./ocean-obj.js')



app.use(express.json());
app.use('/api/assets/',router_search) 


getOcean().then(() =>{
    app.listen(3000, async () => {
        console.log(`Listening on port 3000...`);
    })
})
