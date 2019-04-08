// while https is built-in to Node, it is a module, so it must be required
var https = require('https');
var dataArr = [];

function getAndPrintHTML (options) {

  // notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
  https.get(options, function (response) {

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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);


// There are other ways to structure this using parameters of other types - did you instinctively want to implement it differently?
//

// Is there any reason not to just pass the URL as a string?
//

// Is there any reason not to pass the host and path as two individual parameters?
//

// Don't get too hung up on these questions if you aren't sure - it's more important that you implement a solution. Feel free to ask a mentor if you're curious!


// Did you notice that the declaration of requestOptions has been moved? Do you understand why?
// Yes. Yes

// What do you need to change about the way you call https.get to ensure it still works?
// You need to pass the 'option' parameter
