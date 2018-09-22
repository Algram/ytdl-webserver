#!/usr/bin/env node

const http = require('http');
const querystring = require('querystring');

const postData = querystring.stringify({
  'url': 'https://www.youtube.com/watch?v=qNf9nzvnd1k'
});

const req = http.request(
  {
    host: 'localhost',
    port: '3000',
    path: '/download',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  },
  (res) => {
    const { statusCode } = res;
    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      console.log('No more data in response.');
      if (statusCode !== 200) {
        console.log(`got status ${statusCode}`);
        process.exit(1);
      }
      console.log('yay it works')
    });
  }
).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
  process.exit(1);
});

req.write(postData);
req.end();
