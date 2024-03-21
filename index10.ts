function makeAlbum(artist: string, title: string) {
    const album = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return album;
}

let album = makeAlbum("ali", "light");
console.log(album);

album = makeAlbum("bilal", "red wave");
console.log(album);

album = makeAlbum("hamza", "ahmed");
console.log(album);


