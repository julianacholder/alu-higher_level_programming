#!/usr/bin/node
const request = require('request');
const fs = require('fs');

const url = "URL to request";
const file_path = "file path to store the body response";

request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFile(file_path, body, 'utf8', function (err) {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  }
});
