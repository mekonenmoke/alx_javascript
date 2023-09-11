#!/usr/bin/node
req = require('request');
fs = require('fs');

req.get(process.argv[2], {encoding: 'UTF-8'}).pipe(fs.createWriteStream(process.argv[3]));
