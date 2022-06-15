import { ArtistAlbum, ArtistsAlbums, Song, Songs } from "../shared"

export const selectArtist = (artists:ArtistsAlbums,id:number = 0):ArtistAlbum =>{
   return artists.find((artists)=> artists.artist === id) || {albums:[],artist:0};
}

export const selectAlbum = (albums:Songs,id:number = 0):Song =>{
   return albums.find((album)=> album.album === id) || {album:0,songs:[]};
}