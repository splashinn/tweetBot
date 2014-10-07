// twitter library
var Twit = require('twit');

// including the configuration file
var T = new Twit(require('./config.js'));

// url for the search based on the hashtag
var hashtag = {q: '#javascript', '#rails', count: 10, result_type = 'recent'};

// this function finds the latest tweet with the hashtags defined and retweets them
function retweetLatest() {

}