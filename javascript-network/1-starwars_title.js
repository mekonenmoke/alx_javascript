#!/usr/bin/node
const req = require('request');
const id = process.argv[2];

req.get('https://swapi-api.alx-tools.com/api/films/'+id, {encoding: 'UTF-8'} )
.on('data' , (data) => {
    // console.log(data);
    jsonToObject = JSON.parse(data);
    console.log(jsonToObject.title);
})

