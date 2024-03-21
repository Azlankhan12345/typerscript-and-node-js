function makeAlbum(artist, title) {
    var album = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return album;
}
var album = makeAlbum("ali", "light");
console.log(album);
album = makeAlbum("bilal", "red wave");
console.log(album);
album = makeAlbum("hamza", "ahmed");
console.log(album);
