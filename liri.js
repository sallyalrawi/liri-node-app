require("dotenv").config();
// Make it so liri.js can take in one of the following commands:

// 1)concert-this
//2) spotify-this-song
//3) movie-this
//4) do-what-it-says

// What Each Command Should Do:
// A)__> $node liri.js concert-this <artist/band name here>

// This will search the Bands in Town Artist Events API ("https:// https://api.spotify.com/artists/" + artist + "/events?app_id=f3a4147086884cd48a4a4ca1e5a1955b") for an artist and render the following information about each event to the terminal:

// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")

//  B)__> $node liri.js spotify-this-song '<song name here>'
// This will show the following information about the song in your terminal/bash window


// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from

console.log()
