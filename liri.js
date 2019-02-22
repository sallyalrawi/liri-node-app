require("dotenv").config();

var Spotify = require("node-spotify-api");

require("dotenv").config();

var Spotify = require("node-spotify-api");

var fs = require("fs");

var moment = require("moment");

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

function searchSpotify(cb) {
  var songName = process.argv[3];
  console.log("got here");
  spotify.search({ type: "track", query: songName }, (err, data) => {
    console.log("data from spotify API: ", data);
  });
}

// Include the axios npm package
var axios = require("axios");

function searchOMDB() {
  var movieName = process.argv[3];
  axios
    .get(
      "http://www.omdbapi.com/?t=" +
        movieName +
        "&plot=full&tomatoes=true&apikey=edfc2147"
    )
    .then(
      function(response) {
        console.log("The movie's Title is: " + JSON.stringify(response.data));
      },
      function(error) {
        console.log("error");
      }
    );
}
function searchArtist() {
  var artist = process.argv[3];

  axios
    .get(
      "https://rest.bandsintown.com/artists/" +
        artist +
        "/events?app_id=codingbootcamp"
    )
    .then(
      function(response) {
        console.log(
          "The concert information: " + JSON.stringify(response.data)
        );
        console.log(moment(response.data[0].datetime).format("LLLL"));
      },
      function(error) {
        console.log("error");
      }
    );
}

fs.readFile("random.txt", function(err, data) {
  if (err) console.log(err);
  else console.log(data.toString());
});

var getInfo = function(data) {
  switch (data) {
    case "concert-this":
      searchArtist();

    case "spotify-this-song":
      searchSpotify();

    case "movie-this":
      searchOMDB();

    default:
      return "do-what-it-says";
  }
};

console.log(getInfo(process.argv[2]));
