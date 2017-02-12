var redis = require('redis');

//connect to Redis
var redisHost = '127.0.0.1';
var redisPort = '6379';
var redisClient = redis.createClient(redisPort, redisHost);

redisClient.on('ready',function() {
 console.log('Redis service is ready');
});

redisClient.on('error',function() {
 console.log('Error in Redis service');
});

redisClient.on('connect', function() {
    console.log('Connected to Redis service');
});

var Store = {

  setURL : function (shortURL, longURL) {
      console.log('Set URL: ' + shortURL + ' - ' + longURL);
      redisClient.set(shortURL, longURL);
      redisClient.set(longURL, shortURL);
  },

  getShortURL : function (longURL, callback) {
    redisClient.get(longURL,function(err,reply) {
        callback(reply);
    });
  },

  getLongURL : function (shortURL, callback) {
      redisClient.get(shortURL,function(err,reply) {
          callback(reply);
      });
  }

};

module.exports = Store;
