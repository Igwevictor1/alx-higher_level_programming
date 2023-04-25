#!/usr/bin/node
const fs = require('fs');

// Using destructuring assignment to extract process.argv[2] and process.argv[3]
const [, , filePath, content] = process.argv;

// Using Promises for asynchronous file writing
fs.promises.writeFile(filePath, content)
  .then(() => {
    console.log(`Successfully wrote content to ${filePath}`);
  })
  .catch(error => {
    console.error(error);
  });

