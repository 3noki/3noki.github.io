var prompt = require('prompt');


var IDs = new Array();
var pattern = /[\w\d]{1,}/ig;

var input;

for ( var i=0; i<10 && input != ""; i++){
    input = prompt("Enter tweet IDs\nEntering an empty field stops asking", "");
    if (input && input.match(pattern)) {
        IDs.push(input);
    }
} 


var OAuth = require('oauth');
// Change these
var CONSUMER_KEY = 'C463XW52pn58jGtEon6A7sKMz';
var CONSUMER_SECRET = 'XC7FwrwlNcvq1d4OcpKKo0oQxTUr4G1LcX3VHEGdUdJhRiwGlM';
var ACCESS_TOKEN = '855953286339362816-USebanAr8L1nMEu5jel3RDgz4su4xyK';
var ACCESS_TOKEN_SECRET = '0DGyNB7eU4q7KYWxCKSMzFF2WaN8twZiB33olJ6HTl0TQ';

// Instantiate the client
var twitterClient = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    CONSUMER_KEY,
    CONSUMER_SECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
);

// Request the metadata of tweets
//var IDs = ['832273134845730816'];
var URL = 'https://api.twitter.com/1.1/statuses/lookup.json?id=' + IDs.join(',');
twitterClient.get(
    URL,
    ACCESS_TOKEN,
    ACCESS_TOKEN_SECRET,
    function (err, data, res) {
        if (err) {
            console.log(err);
            return;
        }
        if (res.statusCode != 200) {
            console.log('Got non 200 status: ', res.statusCode);
            return;
        }
        data = JSON.parse(data);
        console.log(JSON.stringify(data, "", 2));
    }
);


if (IDs.length > 0) {
    document.getElementById("list").innerHTML = "<span style='color:Navy;font-    weight:bold;'>array<\/span><br><br>" + IDs.join("<br><br>");
} else {
    document.getElementById("list").innerHTML = "<span style='color:Navy;font-weight:bold;'>Nothing has been given!<\/span>";
}
