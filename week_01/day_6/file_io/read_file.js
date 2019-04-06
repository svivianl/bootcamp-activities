var fs = require("fs");
var myArgs = process.argv.slice(2);

try{
  fs.stat(myArgs[0], function(error, stat) {
    if (error == null) {
      // Asynchronous read
      fs.readFile(myArgs[0], function (err, data) {
        if (err) {
          return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
      });
    } else if(error.code === 'ENOENT') {
      // file does not exist
      fs.writeFile('log.txt', 'Some log\n');
    } else {
      console.log('Some other error: ', error.code);
    }
  });
}catch(e){
  console.log(e.message);
}
