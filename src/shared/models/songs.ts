export type Songs = Song[]

export interface Song {
  album: number
  songs: PreviewSong[]
}

export interface PreviewSong {
    duration_ms: string
    explicit: string
    id: number
    name: string
    preview_url: string
    spotify_url: string
  }
  