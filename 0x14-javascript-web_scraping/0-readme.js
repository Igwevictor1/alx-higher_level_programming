#!/usr/bin/node
const fs = require('fs');
const [, , filePath] = process.argv;
fs.promises.readFile(filePath, 'utf8')
  .then(content => {
    console.log(content);
  })
  .catch(error => {
    console.error(error);
  });
