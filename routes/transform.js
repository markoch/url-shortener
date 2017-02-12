var repository = require('../transform/URLShortener.js');
var express    = require('express');

var router     = express.Router();
var isRedis    = false;

/* resolve a short URL to a long URL and redirect the request */
router.get('/:url', function(req, res, next) {
  // get the sender information
  // var requestHostInfo = req.headers.host;

  if (isRedis) {
      var myCb = function (longURL) {
          if (longURL &&  longURL.length > 0) {
            res.writeHead(302, {'Location': longURL});
            res.end();
          } else {
            var err = new Error('URL not found');
            err.status = 404;
            next(err);
          }
      };
      repository.getLongURL(req.params.url, myCb);

  } else {
      var longURL = repository.getLongURL(req.params.url);
      if (longURL &&  longURL.length > 0) {
        res.writeHead(302, {'Location': longURL});
        res.end();
      } else {
        var err = new Error('URL not found');
        err.status = 404;
        next(err);
      }
  }
});

/* Shorten a long URL and return detailed information */
router.post('/', function(req, res) {
  var submittedUrl = req.body.url;
  var localhost = req.server.host;
  var localport = req.server.port;

  if (!submittedUrl) {
    //no url given so go back to main page
    res.render('index', { title: 'URL Shortener' });
  } else {
    if (isRedis) {
        var callback = function(pageInfo) {
            res.render('result', pageInfo);
        };

        repository.getShortURL(localhost, localport, submittedUrl, callback);
    } else {
        var pageInfo = repository.getShortURL(localhost, localport, submittedUrl);
        res.render('result', pageInfo);
    }
  }
});

module.exports = router;
