export type Artists = Artist[]

export interface Artist {
  id: number
  name?: string
  image?: string
  genres?: string[]
  popularity?: string
  spotify_url?: string
  spotify_id?: string
  created_at?: string
  updated_at?: string
  artist?: number
}
