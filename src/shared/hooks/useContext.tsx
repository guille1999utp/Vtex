import { createContext, useContext, useState } from 'react';
import { AppContext, UseContext, Artist, Album, ArtistAlbum, PreviewSong } from '../models';

interface props {
    children: JSX.Element | JSX.Element[]
}

const Context = createContext<null | AppContext>(null)

export const useAppContext: UseContext = () => useContext(Context)

export const ContextProvider = ({ children }:props) => {
  const { Provider } = Context;
  const [formData, setFormData] = useState<Artist>({id:0});
  const [dataAlbum, setFormAlbum] = useState<Album>({id:0,image:"",name:"",spotify_url:"",total_tracks:0});
  const [albumsContext, setArtistAlbum] = useState<ArtistAlbum>({albums:[],artist:0});
  const [allMusica, setMusic] = useState<PreviewSong[]>([]);
  const [songSelect, setMusicSong] = useState<PreviewSong>({duration_ms:"",explicit:"",id:0,name:"",preview_url:"",spotify_url:""});

  const setForm = (artista:Artist) =>{
    setFormData(artista)
  }

  const setAlbum = (album:Album) =>{
    setFormAlbum(album)
  }

  const setAlbums = (artisAlbums:ArtistAlbum) =>{
    setArtistAlbum(artisAlbums)
  }

  const setAllMusic = (allSongs:PreviewSong[]) =>{
    setMusic([...allMusica,...allSongs])
  }

  const resetMusic = () =>{
    setMusic([]);
  }

  const setSong = (song:PreviewSong) =>{
    setMusicSong(song);
  }

  const context ={
    setForm,
    setAlbum,
    setAlbums,
    setAllMusic,
    setSong,
    resetMusic,
    formData,
    dataAlbum,
    albumsContext,
    allMusica,
    songSelect
  }
  return (
    <Provider value={context} >{children}</Provider>
  )
}