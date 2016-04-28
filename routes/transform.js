var express = require('express');
var short   = require('../transform/URLShortener.js');
var router  = express.Router();

var urlStorage = {};
var lookups = 0;

/* resolve a short URL to a long URL and redirect the request */
router.get('/:url', function(req, res, next) {
  var requestHostInfo = req.headers.host; //not used yet

  var longURL = short.getLongURL(req.params.url);

  if (longURL){
    res.writeHead(302, {'Location': longURL});
    res.end();
  } else {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
});

/* Shorten a long URL and return detailed information */
router.post('/', function(req, res, next) {
  var pageInfo = {};
  var submittedUrl = req.body.url;

  if (!submittedUrl) {
    //no url given so go back to main page
    res.render('index', { title: 'URL Shortener' });
  } else {
    var localhost = req.server.host;
    var localport = req.server.port;

    var pageInfo = short.getShortURL(localhost, localport, submittedUrl);
    res.render('result', pageInfo);
  }
});

module.exports = router;
