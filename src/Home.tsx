import {FC,useCallback,useEffect,useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useFetch } from './helpers';
import { Artist, Artists , FormData, useAppContext} from './shared';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useHistory } from "react-router-dom";

export const Home:FC = () => {
  let history = useHistory();
  const { setForm } = useAppContext() || {}
  const [artist, setArtist] = useState<Artists>([]);
  

  const obtenerproductos = useCallback(
    async() => {
      const data:Artists = await useFetch('artists');
      setArtist(data.slice(0,data.length-1));
    }, [],
  )
  useEffect( ()=>{
    obtenerproductos()
   },[obtenerproductos])
  
  const pageAlbums = (artist:Artist) =>{
    setForm?.( artist );
    history.push(`artists/${artist.id}/albums`);
  }

  return (
     <Stack direction="row" spacing={2} sx={{background:"#151515",padding:"20px 15px 20px 15px"}}>
     <Grid container spacing={4}> 
      {
        artist.map((artist:Artist)=>{
          return <Grid item xl={1.5} xs="auto" sx={{margin:"auto"}} >
          <Avatar key={artist.id} sx={{width:"200px",height:"200px",backgroundColor:"black",cursor:"pointer"}}>
            <img
            src={artist.image}
            alt={artist.name}
            style={{width:"100%",opacity:0.6}}
            onClick={()=>pageAlbums(artist)}
            />
            <Typography component="h6" variant="body2" position={'absolute'} color="white" onClick={()=>pageAlbums(artist)}>{artist.name}</Typography>
          </Avatar>
          </Grid>
        })
      }
      </Grid>
    </Stack>
  )
}
