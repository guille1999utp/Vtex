import { Album, ArtistAlbum } from './albums'
import { Artist} from './artist'
export * from './rutas'
export * from "./artist"
export * from "./albums"
export * from "./songs"
export interface AppContext {
	setForm: (arista:Artist)=>any
	formData: Artist
	dataAlbum:Album
    setAlbum:(arista:Album)=>any
	setAlbums:(arista:ArtistAlbum)=>any
	albumsContext:ArtistAlbum
}

export type FormData = { [key: string]: any } 

export type UseContext = () => AppContext | null

export type Params = {
	id: string;
  };
  