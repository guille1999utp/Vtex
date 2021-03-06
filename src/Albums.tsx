import {FC,useCallback,useEffect} from 'react'
import { selectArtist, useFetch } from './helpers';
import { ArtistsAlbums,ArtistAlbum, useAppContext, Params, Album } from './shared';
import { useHistory,useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import { Avatar, Typography,Badge,Chip,Stack,List,ListItem,ListItemText,ListItemAvatar, Divider, IconButton  } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';



export const Albums:FC = () => {
  const { formData, setAlbum, setAlbums, albumsContext,resetMusic } = useAppContext() || {}
  const { id } = useParams<Params>();
  let history = useHistory();
  const obtenerproductos = useCallback(
    async() => {
      const data:ArtistsAlbums = await useFetch(`artists/${id}/albums`);
      const albums:ArtistAlbum = selectArtist(data,formData?.id);
      setAlbums?.(albums);
    }, [],
  )
  useEffect( ()=>{
    obtenerproductos()
   },[obtenerproductos])
  
   useEffect( ()=>{
    resetMusic?.();
   },[])

  const pageAlbum = (alb:Album) =>{
    setAlbum?.(alb)
    history.push(`/${alb.id}/canciones`);
  }

  return (
    <>
    <Box
    sx={{
      background:"white"
    }}
  >
    <Box
    sx={{
      width: "100%",
      pt:"40px",
      background:
          'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 200px),linear-gradient(to top, rgba(0,0,0,4), rgba(0,0,0,0.8) 300px);'
    }}
  >
          <Avatar src={formData?.image}
                  alt={formData?.name} sx={{width:"200px",height:"200px",backgroundColor:"black",cursor:"pointer",margin:"auto",mb:"40px"}}>
          </Avatar>
          
          <Typography textAlign="center" component="h4" variant="h4"  color="white"><Badge  sx={{background:"rgba(0,0,0,0)",marginLeft:"-40px",mb:"20px"}} badgeContent={<Chip sx={{background:"rgba(0,0,0,0)",margin:"49px",position:"relative",top:"18px",left:"34px"}} icon={<StarRateIcon style={{color:"yellow"}}/>} label={formData?.popularity}></Chip>}>{formData?.name}</Badge></Typography>
  </Box>
  </Box>
  <Box sx={{width:"100%",background:"rgb(48,48,48)"}}>
  <Stack className='stack_Albumbs' sx={{padding:"30px",maxWidth:"1200px",margin:"auto"}}>
  <Typography  component="h4" variant="h5"  color="white" sx={{mb:"20px"}}>Albumes</Typography>
  <List
      sx={{
        width: '100%',
      }}
    >
      {albumsContext?.albums.map((alb)=>{
        return <>
        <ListItem button onClick={()=>pageAlbum(alb)} secondaryAction={
          <IconButton edge="end" aria-label="delete">
          <PlayArrowIcon  />
          </IconButton>
        }>
        <ListItemAvatar>
          <Avatar src={alb.image}>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={alb.name} secondary={`canciones: ${alb.total_tracks}`} />
        
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
