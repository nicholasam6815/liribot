// .env FILE
require("dotenv").config();
// REQUEST
let request = require("request");
// MOMENT
const moment = require("moment");
// FS
const fs = require("fs");
// KEYS
const keys = require("./keys.js");
//INIT SPOTIFY
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
//OMDB
let omdb = (keys.omdb);
//BANDS IN TOWN
let bandsintown = (keys.bandsintown);

let userInput = process.argv[2];
let userQuery = process.argv.slice(3).join(" ");


//LOGIC
function custComm(userInput, userQuery) {
    switch (userInput) {
        case "concert-this":
            concertThis();
            break;
        case "spotify-this-song":
            spotifyThisSong();
            break;
        case "movie-this":
            movieThis();
            break;
        case "do-what-it-says":
            doIt(userQuery);
            break;
        default:
            console.log("I'm confused...");
            break;
    }
}

custComm(userInput, userQuery);
 
//////////////////////////////  BANDS IN TOWN \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function concertThis() {
    console.log(`\n - - - - -\n\nLOOKING FOR...${userQuery}'s next show...`);
    request("https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=" + bandsintown, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            let theBand = JSON.parse(body);
            if (theBand.length > 0) {
                for (i = 0; i < 1; i++) {

                    console.log(`\nHere you go...\n\nArtist: ${theBand[i].lineup[0]} \nVenue: ${theBand[i].venue.name}\nVenue Location: ${theBand[i].venue.latitude},${theBand[i].venue.longitude}\nVenue City: ${theBand[i].venue.city}, ${theBand[i].venue.country}`)
                    let concertDate = moment(theBand[i].datetime).format("MM/DD/YYYY hh:00 A");
                    console.log(`Date and Time: ${concertDate}\n\n- - - - -`);
                };
            } else {
                console.log('Nada, Zip, Zilch!');
            };
        };
    });
};    

//////////////////////////////  SPOTIFY \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function spotifyThisSong() {
    console.log(`\n - - - - -\n\nLOOKING FOR..."${userQuery}"`);

    if (!userQuery) {
        userQuery = "the sign ace of base"
    };
    spotify.search({
        type: 'track',
        query: userQuery,
        limit: 1
    }, function (error, data) {
        if (error) {
            return console.log('Error found: ' + error);
     }
        
       let spotifyArr = data.tracks.items;

        for (i = 0; i < spotifyArr.length; i++) {
           console.log(`\nHere you go...\n\nArtist: ${data.tracks.items[i].album.artists[0].name} \nSong: ${data.tracks.items[i].name}\nAlbum: ${data.tracks.items[i].album.name}\nSpotify link: ${data.tracks.items[i].external_urls.spotify}\n\n - - - - -`)
     };
  });
}

//////////////////////////////  OMDB \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function movieThis() {
    console.log(`\n - - - - -\n\nLOOKING FOR..."${userQuery}"`);
    if (!userQuery) {
        userQuery = "mr nobody";
    };
    request("http://www.omdbapi.com/?t=" + userQuery + "&apikey=f1543e46", function (error, response, body) {
        let theMovie = JSON.parse(body);
        let ratingsArr = theMovie.Ratings;
        if (ratingsArr.length > 2) {}

        if (!error && response.statusCode === 200) {
            console.log(`\nHere you go...\n\nTitle: ${theMovie.Title}\nCast: ${theMovie.Actors}\nReleased: ${theMovie.Year}\nIMDb Rating: ${theMovie.imdbRating}\nRotten Tomatoes Rating: ${theMovie.Ratings[1].Value}\nCountry: ${theMovie.Country}\nLanguage: ${theMovie.Language}\nPlot: ${theMovie.Plot}\n\n- - - - -`)
        } else {
            return console.log("Aint got it kid. Error:" + error)
        };
    })
};
//////////////////////////////  DO WHAT IT SAYS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function doIt() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        let dataArr = data.split(",");
        userInput = dataArr[0];
        userQuery = dataArr[1];
        custComm(userInput, userQuery);
    });
};