 require("dotenv").config();
// Make it so liri.js can take in one of the following commands:
var Spotify = require('node-spotify-api');

var fs = require('fs');

var moment = require('moment');

 var keys = require("./keys.js");

 var spotify = new Spotify(keys.spotify);

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");
var movieName = process.argv[3];
// Then run a request with axios to the OMDB API with the movie specified
axios.get("  http://www.omdbapi.com/?t=" + movieName +"&plot=full&tomatoes=true&apikey=edfc2147").then(
  function(response) {
    //console.log("The movie's Title is: " + JSON.stringify(response.data));
  },
  function(error){
      console.log('error');
  }

);

var artist = process.argv[3];

axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
  function(response) {
    console.log("The concert information: " + JSON.stringify(response.data[0].datetime));
    console.log(moment(response.data[0].datetime).format('LLLL'));
  },
  function(error){
      console.log('error');
  }

);

fs.readFile("random.txt", function(err,data)
            {
                if(err)
                    console.log(err)
                else
                    console.log(data.toString());
            });
            