#!/usr/bin/node
const request = require('request');

// a script that display the status code of a GET request
const [, , url] = process.argv;
const getRequest = (url) => {
  return new Promise((resolve, reject) => {
    request.get(url, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response);
      }
    });
  });
};

getRequest(url)
  .then(response => {
    console.log(`code: ${response.statusCode}`);
  })
  .catch(error => {
    console.error(error);
  });

