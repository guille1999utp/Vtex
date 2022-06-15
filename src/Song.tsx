import {FC,useCallback,useEffect,useState} from 'react'
import { useHistory,useParams } from "react-router-dom";
import { useFetch } from './helpers';
import { Song, Songs, Params, useAppContext } from './shared';
import { selectAlbum } from './helpers';
import { Box } from '@mui/system';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

export const SongPage:FC = () => {
  const { id } = useParams<Params>();
  let history = useHistory();
  const { dataAlbum } = useAppContext() || {}
  const [album, setAlbum] = useState<Song>();
  console.log(album);
  const obtenerproductos = useCallback(
    async() => {
      const data: Songs = await useFetch(`albums/${id}/songs`);
      const albums:Song = selectAlbum(data,Number(id));
      setAlbum(albums);
    }, [],
  )
  useEffect( ()=>{
    obtenerproductos()
   },[obtenerproductos])
  
  const pageAlbum = (id:number) =>{
    history.push(`/${id}/canciones`);
  }
  return (
    <Box sx={{width:"100%",background:"rgb(48,48,48)"}}>
      <List
      sx={{
        width: '100%',
        padding:"40px"
      }}
    >
        <ListItem>
        <ListItemAvatar>
          <Avatar alt={dataAlbum?.name }
                  src={dataAlbum?.image}
                  sx={{ width: 200, height: 200 }}
                  variant="square">
          </Avatar>
        </ListItemAvatar>
        <ListItemText sx={{marginLeft:"40px"}} primary={<Typography sx={{mb:"20px"}} component="h5" variant="h5" fontWeight="bold">{dataAlbum?.name}</Typography>} secondary={<Typography sx={{mb:"20px"}} component="p" variant="body1" >{`Album ☻ ${dataAlbum?.name}`}</Typography>} />
        </ListItem>

    </List>
    </Box>
  )
}
