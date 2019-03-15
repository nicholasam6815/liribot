# liribot
What Each Command Do
1. node liri.js concert-this <artist/band name here>
This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + Cher + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

Name of the venue

Venue location

Date of the Event (use moment to format this as "MM/DD/YYYY")
<img width="753" alt="concert-this" src="https://user-images.githubusercontent.com/44181627/54404846-283dc700-46ab-11e9-9574-eea43b86540d.png">
2. node liri.js spotify-this-song '<song name here>'
This will show the following information about the song in your terminal/bash window

Artist(s)

The song's name

A preview link of the song from Spotify

The album that the song is from

If no song is provided then your program will default to "The Sign" by Ace of Base.

<img width="713" alt="spotify-this-song" src="https://user-images.githubusercontent.com/44181627/54404851-283dc700-46ab-11e9-87a2-420ac44a494e.png">
<img width="637" alt="spotify-this-song DEFAULT" src="https://user-images.githubusercontent.com/44181627/54404852-283dc700-46ab-11e9-8b29-8886cbddcbe3.png">
3. node liri.js movie-this '<movie name here>'
This will output the following information to your terminal/bash window:
* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
  <img width="787" alt="movie-this" src="https://user-images.githubusercontent.com/44181627/54404849-283dc700-46ab-11e9-96e1-6c43b9240173.png">
<img width="777" alt="movie-this DEFAULT" src="https://user-images.githubusercontent.com/44181627/54404850-283dc700-46ab-11e9-839c-028f85657552.png">
 4. node liri.js do-what-it-says
Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
<img width="687" alt="do-what-it-says" src="https://user-images.githubusercontent.com/44181627/54404848-283dc700-46ab-11e9-8614-f26557189d66.png">


  
  
  
  
