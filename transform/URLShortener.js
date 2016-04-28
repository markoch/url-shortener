var urlStorage = {};
var lookups = 0;

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

var Repository = {

  getLongURL : function (shortURL) {
    lookups++;
    if (urlStorage.hasOwnProperty(shortURL)){
      return urlStorage[shortURL];
    }
    return undefined;
  },

  getShortURL : function (localhost, localport, submittedUrl) {
    var longURL = verifyHTTPPrefix(submittedUrl);
    var key = nextKey(longURL, generateRandomKey);

    urlStorage[key]=longURL;

    var url = "http://" + localhost + ':' + localport + "/" + key;

    return {
      title: 'URL Shortener',
      shortURL: url,
      storedKeys: storedKeys(),
      performedLookup: lookups
    };
  }
};

module.exports = Repository;
