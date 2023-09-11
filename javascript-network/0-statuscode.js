#!/usr/bin/node
const req = require('request');

req.get(process.argv[2], {encoding: 'UTF-8'})
.on('response' , (response) => {
    console.log("code:",response.statusCode);
})
