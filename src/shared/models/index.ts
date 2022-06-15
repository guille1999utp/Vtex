import { Album } from './albums'
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
}

export type FormData = { [key: string]: any } 

export type UseContext = () => AppContext | null

export type Params = {
	id: string;
  };
  