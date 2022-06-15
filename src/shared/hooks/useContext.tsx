import { createContext, useContext, useState } from 'react';
import { AppContext, UseContext, Artist, Album } from '../models';

interface props {
    children: JSX.Element | JSX.Element[]
}

const Context = createContext<null | AppContext>(null)

export const useAppContext: UseContext = () => useContext(Context)

export const ContextProvider = ({ children }:props) => {
  const { Provider } = Context;
  const [formData, setFormData] = useState<Artist>({id:0});
  const [dataAlbum, setFormAlbum] = useState<Album>({id:0,image:"",name:"",spotify_url:"",total_tracks:0});

  const setForm = (artista:Artist) =>{
    setFormData(artista)
  }

  const setAlbum = (album:Album) =>{
    setFormAlbum(album)
  }
  const context ={
    setForm,
    formData,
    dataAlbum,
    setAlbum
  }
  return (
    <Provider value={context} >{children}</Provider>
  )
}