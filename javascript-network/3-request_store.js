#!/usr/bin/node
const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request.get(url, { encoding: 'UTF-8' }, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  fs.writeFile(filePath, body, { encoding: 'UTF-8' }, (error) => {
    if (error) {
      console.error('Error:', error);
      return;
    }
  });
});