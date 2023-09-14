#!/usr/bin/node
const request = require('request');

const episodeNumber = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${episodeNumber}`;

request.get(apiUrl, { encoding: 'UTF-8' }, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  const movie = JSON.parse(body);
  console.log(movie.title);
});
