import {FC,useCallback,useEffect,useState} from 'react'
import { useHistory,useParams } from "react-router-dom";
import { secondsAddToString, secondsToString, useFetch } from './helpers';
import { Song, Songs, Params, useAppContext, PreviewSong } from './shared';
import { selectAlbum } from './helpers';
import { Box } from '@mui/system';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material';

export const SongPage:FC = () => {
  const { id } = useParams<Params>();
  let history = useHistory();
  const { dataAlbum, albumsContext, setAllMusic,setSong } = useAppContext() || {}
  const [album, setAlbum] = useState<Song>({album:0,songs:[]});
  const [sugerencias, setSugerencias] = useState<PreviewSong[]>([]);

  const albumsSugerencias:number[] = albumsContext?.albums.map((albumContext)=>albumContext.id - 1) || [];
  const obtenerproductos = useCallback(
    async() => {
      const data: Songs = await useFetch(`albums/${id}/songs`);
      const albums:Song = selectAlbum(data,Number(id));
      let rand:number[] = [];
      let allMusicImport:PreviewSong[] = [];
       rand[0] = Math.floor(Math.random()*albumsSugerencias?.length);
       rand[1] = Math.floor(Math.random()*albumsSugerencias?.length);
       rand[2] = Math.floor(Math.random()*albumsSugerencias?.length);
       rand[3] = Math.floor(Math.random()*albumsSugerencias?.length);
      rand = rand.filter((item,index)=>{
        return rand.indexOf(item) === index;
      })

      for (let i = 0; i < albumsSugerencias.length; i++) {
        allMusicImport = [...allMusicImport,...data[albumsSugerencias[i]].songs];
      }
      setAllMusic?.( allMusicImport || [] );

      setSugerencias([data[albumsSugerencias[rand[0]]].songs[0],data[albumsSugerencias[rand[1]]].songs[0],data[albumsSugerencias[rand[2]]].songs[0],data[albumsSugerencias[rand[3]]].songs[0]])
      setAlbum(albums);
    }, [],
  )
  useEffect( ()=>{
    obtenerproductos()
   },[obtenerproductos])
  
  const pagePlaySong = (song:PreviewSong) =>{
    song.preview_url = dataAlbum?.image || "";
    setSong?.(song);
    history.push(`/${song.id}/reproduccion`);
  }
  return (<>
    <Box sx={{width:"100%",background:"rgb(29,29,29)"}}>
      <List
      sx={{
        width: '100%',
        padding:"40px"
      }}
    >
        <ListItem >
        <ListItemAvatar>
          <Avatar alt={dataAlbum?.name }
                  src={dataAlbum?.image}
                  sx={{ width: 200, height: 200 }}
                  variant="square">
          </Avatar>
        </ListItemAvatar>
        <ListItemText sx={{marginLeft:"40px"}} primary={<Typography sx={{mb:"20px"}} component="h5" variant="h5" fontWeight="bold">{dataAlbum?.name}</Typography>} secondary={<Typography sx={{mb:"20px"}} component="p" variant="body1" >{`Album • ${dataAlbum?.name}`}<Typography sx={{mb:"20px"}} component="p" variant="body1" >{`${album?.songs.length} canciones • ${secondsAddToString(album)}`}</Typography></Typography>} />
        </ListItem>

    </List>
    </Box>
  <Box sx={{width:"100%",background:"black"}}>
  <Stack sx={{padding:"30px",margin:"auto"}}>
  <Typography  component="h4" variant="h5"  color="white" sx={{mb:"20px"}} fontWeight="bold">Canciones</Typography>
  <List
      sx={{
        width: '100%',
      }}
    >
      {album.songs.map((song,index)=>{
        return <>
        <ListItem button secondaryAction={
          <Typography>{secondsToString(song.duration_ms)}</Typography>
        } onClick={()=>pagePlaySong(song)}>
        <ListItemAvatar>
          {index+1}
        </ListItemAvatar>
        <ListItemText primary={song.name} />
        
        </ListItem>
        <Divider variant="inset" component="li" />
        </>
      }) }
      
    </List>
  </Stack>

  
  <Stack sx={{padding:"30px",margin:"auto"}}>
  <Typography  component="h4" variant="h5"  color="white" sx={{mb:"20px"}} fontWeight="bold">Sugerencias</Typography>
  <List
      sx={{
        width: '100%',
      }}
    >
      {sugerencias.map((song,index)=>{
        return <>
        <ListItem button secondaryAction={
          <Typography>{secondsToString(song.duration_ms)}</Typography>
        } onClick={()=>pagePlaySong(song)}>
        <ListItemAvatar>
          {index+1}
        </ListItemAvatar>
        <ListItemText primary={song.name} />
        
        </ListItem>
        <Divider variant="inset" component="li" />
        </>
      }) }
      
    </List>
  </Stack>
  </Box>
    </>
  )
}
