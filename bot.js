// twitter library
var Twit = require('twit');

// including the configuration file
var T = new Twit(require('./config.js'));

// url for the search based on the hashtag
var hashtag = {q: '#javascript', '#rails', count: 10, result_type = 'recent'};

// this function finds the latest tweet with the hashtags defined and retweets them
function retweetLatest() {
	T.get('search/tweets', hashtag, function(error, data) {
		//logs out any errors responses
		console.log(error, data);
		// if search request to server has no errors...
		if (!error) {
			// then grab the ID of tweet to be retweeted
			var retweetId = data.statuses[0].id_str;
			// then tell Twitter we want to retweet it
			T.post('statuses/retweet/' + retweetId, { }, function(error, response) {
				if (response) {
					console.log('Success! Check your bot, it should have retweeted something.');
				}
				// if there was an error w/ Twitter call, print it out here
				if (error) {
					console.log('There was an error with Twitter: ', error);
				}
			})
		}
		// if the original search request had an error, print it out here
		else {
			console.log('There was an error with you hashtag search: ', error)
		}
	});
}

// try to retweet something as soon as program is ran
retweetLatest();
setInterval(retweetLatest, 1000 * 60 * 5); // retweets every 5 minutes