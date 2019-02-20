// var dotenv = require("dotenv").config();
// Make it so liri.js can take in one of the following commands:
// var keys = require("./keys.js");
// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

// Then run a request with axios to the OMDB API with the movie specified
axios.get("  http://www.omdbapi.com/?i=tt3896198&apikey=edfc2147").then(
  function(response) {
    console.log("The movie's Title is: " + response.data);
  },
  function(error){
      console.log('error');
  }

);

