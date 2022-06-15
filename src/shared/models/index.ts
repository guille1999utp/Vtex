import { Album, ArtistAlbum } from './albums'
import { Artist} from './artist'
import { PreviewSong } from './songs'
export * from './rutas'
export * from "./artist"
export * from "./albums"
export * from "./songs"
export interface AppContext {
	setForm: (arista:Artist)=>any
	formData: Artist
	dataAlbum:Album
    setAlbum:(arista:Album)=>any
	setAlbums:(artisAlbums:ArtistAlbum)=>any
	setAllMusic:(allSongs:PreviewSong[])=>any
	setSong:(song:PreviewSong)=>any
	albumsContext:ArtistAlbum
	allMusica:PreviewSong[]
	songSelect:PreviewSong
}

export type FormData = { [key: string]: any } 

export type UseContext = () => AppContext | null

export type Params = {
	id: string;
  };
  