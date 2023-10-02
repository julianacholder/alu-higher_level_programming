#!/usr/bin/node
const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const file_path = process.argv[3];

if (typeof url === 'string') {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      fs.writeFile(file_path, body, 'utf8', function (err) {
        if (err) {
          console.error('Error writing to file:', err);
          throw err; // You can throw the error if needed
        }
        console.log(`Webpage content successfully downloaded and saved to ${file_path}`);
      });
    } else {
      console.error('Error:', error);
    }
  });
}
