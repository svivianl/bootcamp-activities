// while https is built-in to Node, it is a module, so it must be required
var https = require('https');
var dataArr = [];

function getHTML (options, callback) {

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
      dataArr.forEach(data => callback(data));
    });

    // the callback is invoked when a `data` chunk is received
    response.on('error', function (error) {
      console.log('\n ********************************** Error: \n', errror);
    });
  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getHTML(requestOptions, printHTML);

// Can you explain the difference between function definition and invocation?
//

// Do you understand what each parameter and argument represents? Can you walk yourself through the code without getting lost? If this confuses you, have a chat with a mentor.
//

// It's common at this point to be confused by callbacks. But if you find yourself really struggling with the concept, please reach out to one of us and ask for help. Callbacks and asynchronous code are an integral part of Javascript and you will use them many times in bootcamp, in a variety of situations. If you're finding them hard to comprehend, you're not the only one in your cohort. But it's still important we know who needs to review the subject more, because callbacks are here to stay.
//

