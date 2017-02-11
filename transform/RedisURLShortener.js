var store = require('../transform/URLStore.js');

var lookups = 0;

function generateRandomKey() {
  //http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript
  var maxLength = 5;
  return (Math.random().toString(36)+'00000000000000000').slice(2, maxLength+2);
}

function verifyHTTPPrefix(longURL) {
  if (!longURL.toUpperCase().startsWith('HTTP')) {
    longURL =  'http://' + longURL;
  }
  return longURL;
}

function storedKeys() {
  return -1;
}

var Repository = {

  getLongURL : function (shortURL, callback) {
    lookups++;
    return store.getLongURL(shortURL, callback);
  },

  getShortURL : function (localhost, localport, submittedUrl, callback) {
    var longURL = verifyHTTPPrefix(submittedUrl);

    function getKeyCb(shortURL) {
        var key = shortURL ?  shortURL : generateRandomKey();
        store.setURL(key, longURL);

        var url = 'http://' + localhost + ':' + localport + '/' + key;
        var result = {
            title: 'URL Shortener',
            shortURL: url,
            storedKeys: storedKeys(),
            performedLookup: lookups
        };
        callback(result);
    }

    store.getShortURL(longURL, getKeyCb);
  }
};

module.exports = Repository;
