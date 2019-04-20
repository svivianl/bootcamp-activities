var getHTML = require('../http-functions');

function printHTML (html) {
  var code = {
    'ck': 'x',
    'er': '0r',
    'you': 'j00',
    a: '4',
    e: '3',
    l: '1',
    o: '0',
    's': '5',
    t: '7'
  };

  // console.log(html);
  var newHtml = html;
  // console.log('***********************');
  for(var i = 0; i < Object.keys(code).length; i++){
    var regex = new RegExp(Object.keys(code)[i], 'gi');
    newHtml = newHtml.replace(regex, '\'' + Object.values(code)[i] + '\'').split('\'').join('');
  }

  console.log(newHtml);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

getHTML(requestOptions, printHTML);
