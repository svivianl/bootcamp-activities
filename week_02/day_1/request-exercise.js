// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');
var url = 'https://sytantris.github.io/http-examples/future.jpg';

request.get(url)               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Code: ', response.statusCode);
         console.log('response message: ', response.statusMessage );
         console.log('content type: ', response.headers['content-type']);
         console.log('Downloading image...');
       })
       .on('end', function() {
          console.log('Download complete.');
        })
       .pipe(  fs.createWriteStream('./future.jpg') );               // Note 4
