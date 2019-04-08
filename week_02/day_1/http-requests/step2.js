// while https is built-in to Node, it is a module, so it must be required
var https = require('https');
var dataArr = [];

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  // notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      dataArr.push(data);
      // console.log('\n **********************************Chunk Received. Data: \n', data);
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
      dataArr.forEach(data => console.log(data));
    });

  });

}

getAndPrintHTML();
