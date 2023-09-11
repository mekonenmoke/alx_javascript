#!/usr/bin/node
const req = require('request');
const args = process.argv[2];
req.get(args, {encoding: 'UTF-8'})
.on('response' , (response) => {
    console.log("code: ",response.statusCode);
})
