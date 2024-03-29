// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
    { title: "Like That", artist: "Future", genre: "Hip Hop" },
    { title: "Do You Ever", artist: "James Blake", genre: "Electronic" },
    { title: "Precious", artist: "James Blake", genre: "Electronic" },
    { title: "Selfish Lover", artist: "Mild Orange", genre: "Indie Rock" },
    { title: "Purple Rain", artist: "Prince", genre: "Pop" }

];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax" : "Indie Rock",
    "Groot" : "Electronic",
    "Rocket": "Hip Hop"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    const playlists = {};

    for (const guardian in guardians) {
        // Filter songs based on the preferred genre of the current Guardian
        const playlist = songs.filter(song => song.genre === guardians[guardian]);

        // Map the filtered songs to a personalized playlist format
        playlists[guardian] = playlist.map(song => `${song.title} by ${song.artist}`);
    }
    
    const playlistsContainer = document.getElementById("playlists");

    // Iterate over each Guardian's playlist
    for (const guardian in playlists) {
        // Create a div element for the Guardian's playlist
        const playlistDiv = document.createElement("div");
        playlistDiv.classList.add("playlist");

        // Create a heading for the Guardian's name
        const heading = document.createElement("h2");
        heading.textContent = `${guardian}'s Playlist`;

        // Create an unordered list for the songs
        const songList = document.createElement("ul");
        

        // Iterate over the songs in the playlist and create list items
        playlists[guardian].forEach(song => {
            const listItem = document.createElement("li");

            songs.forEach(songitem =>{
                if((songitem.title + ' by ' + songitem.artist ) == song){
                    listItem.innerHTML = `<span class="song-title">${songitem.title}</span> by ${songitem.artist}`;
                }
            });

            
            
            songList.appendChild(listItem);
        });

        // Append the heading and song list to the playlist div
        playlistDiv.appendChild(heading);
        playlistDiv.appendChild(songList);

        // Append the playlist div to the #playlists container
        playlistsContainer.appendChild(playlistDiv);
    }
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);