var express = require('express');
var router  = express.Router();

var urlStorage = {};
var lookups = 0;

/* GET url to expand and forward the request it. */
router.get('/:url', function(req, res, next) {
  var requestHostInfo = req.headers.host;
  var shortURL = req.params.url;

  if (urlStorage.hasOwnProperty(shortURL)){
    var longURL = urlStorage[shortURL];

    lookups++;

    res.writeHead(302, {'Location': longURL});
    res.end();
  } else {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
});

/* POST url to shorten it. */
router.post('/', function(req, res, next) {
  var pageInfo = {};
  var submittedUrl = req.body.url;
  if (!submittedUrl) {
    //no url given so go back to main page
    res.render('index', { title: 'URL Shortener' });
  } else {
    var longURL = verifyHTTPPrefix(submittedUrl);
    var key = nextKey(longURL, generateRandomKey);

    urlStorage[key]=longURL;

    var server = req.server.host;
    var port = req.server.port;
    var url = "http://" + server + ':' + port + "/" + key;

    pageInfo = {
      title: 'URL Shortener',
      shortURL: url,
      storedKeys: storedKeys(),
      performedLookup: lookups
    };

    res.render('result', pageInfo);
  }
});

function nextKey(longURL, generateKey) {
  var foundKey;
  Object.keys(urlStorage).forEach(function(key) {
    if (urlStorage[key]== longURL){
      foundKey =  key;
    }
  });

  return foundKey ?  foundKey : generateKey();
}

function generateRandomKey() {
  //http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript
  var maxLength = 5;
  return (Math.random().toString(36)+'00000000000000000').slice(2, maxLength+2);
}

function verifyHTTPPrefix(longURL) {
  if (!longURL.toUpperCase().startsWith("HTTP")) {
    longURL =  "http://" + longURL;
  }
  return longURL;
}

function storedKeys() {
  return Object.keys(urlStorage).length;
}

module.exports = router;
