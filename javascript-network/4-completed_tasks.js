#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];

request.get(apiUrl, { encoding: 'UTF-8' }, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  const todos = JSON.parse(body);
  const completedTasksByUser = {};

  todos.forEach((todo) => {
    if (todo.completed) {
      if (completedTasksByUser[todo.userId]) {
        completedTasksByUser[todo.userId]++;
      } else {
        completedTasksByUser[todo.userId] = 1;
      }
    }
  });

  const jsonResult = JSON.stringify(completedTasksByUser, null, 2);
  const formattedJsonResult = jsonResult.replace(/"/g, "'");
  console.log(formattedJsonResult);
});