export type ArtistsAlbums = ArtistAlbum[]

export interface ArtistAlbum {
  artist: number
  albums: Album[]
}

export interface Album {
  id: number
  name: string
  image: string
  spotify_url: string
  total_tracks: number
}
