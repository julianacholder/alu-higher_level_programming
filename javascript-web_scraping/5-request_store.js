#!/usr/bin/node
const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const outputPath = process.argv[3];

request(url, function (err, response, body) {
  if (err) {
    console.error('Error:', err);
    process.exit(1); // Exit with an error code
  }

  if (response.statusCode !== 200) {
    console.error('Error: HTTP Status Code', response.statusCode);
    process.exit(1); // Exit with an error code
  }

  // Write the webpage content to the specified file with UTF-8 encoding
  fs.writeFileSync(outputPath, body, 'utf-8');
  console.log(`Webpage content successfully downloaded and saved to ${outputPath}`);
});
