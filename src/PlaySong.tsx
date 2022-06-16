import { Avatar, Badge, Box, Chip, Stack, Typography,Divider, List, ListItem, ListItemAvatar, ListItemText, Slider, IconButton } from '@mui/material'
import {FC,useEffect,useState} from 'react'
import { PreviewSong, useAppContext} from './shared';
import StarRateIcon from '@mui/icons-material/StarRate';
import {  secondsToString } from './helpers';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export const PlaySong:FC = () => {
  const { formData, allMusica, songSelect, setSong,setAllMusic,resetMusic } = useAppContext() || {}
  const [mostrar, setMostrar] = useState<boolean>(false);
  const [Posicion, setPosicion] = useState<number>(0);

  const newSong = (song:PreviewSong,index:number) =>{
    setPosicion(index);
    setMostrar(false);
    setSong?.(song);
  }

  const replayPosicion = (direcction:boolean) =>{
    if(direcction !== undefined && allMusica !== undefined){
      setMostrar(false);
      setSong?.(allMusica[Posicion - 1]);
      setPosicion(Posicion - 1)
    }else if(allMusica !== undefined){
      setMostrar(false);
      setSong?.(allMusica[Posicion + 1]);
      setPosicion(Posicion + 1)
    }
    
  }

  useEffect(() => {
    setMostrar(true);
  }, [songSelect,Posicion])
  
  
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
  <Stack sx={{padding:"0px 20px 0px 20px",height:"61px",maxWidth:"1200px",margin:"auto"}}>
  <Typography  component="h4" variant="h5"  color="white" marginTop={2}>Albumes</Typography>
  <Divider sx={{marginTop:"6px",height:"6px",background:"gray"}}/>
  </Stack>
  </Box>

  <Box sx={{width:"100%",background:"black"}}>
  <Stack sx={{padding:"30px",margin:"auto",height: "calc(60vh - 61px)",overflowY:"scroll"}}>
  <Typography  component="h4" variant="h5"  color="white" sx={{mb:"20px"}} fontWeight="bold">Canciones</Typography>
  <List
      sx={{
        width: '100%',
      }}
    >
      {allMusica?.map((song,index)=>{
        return <>
        <ListItem button secondaryAction={
          <Typography>{secondsToString(song.duration_ms)}</Typography>
        } onClick={()=>newSong(song,index)}>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: "gray" }}>
            <InsertPhotoIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={song.name} />
        </ListItem>
        </>
      }) }
      
    </List>
  </Stack>
  </Box>


  <Box sx={{width:"100%",background:"rgb(29,29,29)",display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
    <Stack className="repro_Play" sx={{padding:"0px 20px 0px 20px",height:"61px"}}>
    <Box sx={{height:"100%",display:"flex"}}>
    <IconButton sx={{padding:"0" ,height: "35px",marginTop:"15px"}} onClick={()=>replayPosicion(true)}><SkipPreviousIcon sx={{color:"rgb(169,171,171)"}} fontSize="large"/></IconButton>
    {(mostrar)?<audio controls style={{marginTop:"7px"}} autoPlay>
    <source src={songSelect?.preview_url} />
    </audio>:null}
    <IconButton sx={{padding:"0",height: "35px",marginTop:"15px"}} onClick={()=>replayPosicion(false)}> <SkipNextIcon sx={{color:"rgb(169,171,171)"}} fontSize="large"/></IconButton>

    </Box>
    </Stack>

    <List className='listOptions' sx={{ width: '100%', maxWidth: 360,pt:"0"}}>
      <ListItem sx={{padding:"0",pt:"5px",pl:"47px"}}>
        <ListItemAvatar>
          <Avatar variant="rounded" src={songSelect?.preview_url}/>
        </ListItemAvatar>
        <ListItemText primary={songSelect?.name.substring(0,20)} secondary={"duracion " + secondsToString(songSelect?.duration_ms || "0")} />
      </ListItem>
    </List>


    <Stack className='submenu_Play' sx={{height:"61px",display:"flex",flexDirection:"row"}}>
<IconButton className="button_Submenu" aria-label="reproducir" size="large" sx={{ml:"20px"}}>
  <PlayCircleIcon fontSize="large" />
</IconButton>
<IconButton className="button_Submenu" aria-label="shuflle" size="large" sx={{ml:"20px"}}>
  <ShuffleIcon fontSize="large" />
</IconButton>
<IconButton className="button_Submenu" aria-label="barra para abajo" size="large" sx={{ml:"20px"}}>
  <ArrowDropDownIcon fontSize="large" />
</IconButton>
<IconButton className="button_Submenu" aria-label="ampliar" size="large" sx={{ml:"20px"}}>
  <ZoomOutMapIcon fontSize="large" />
</IconButton>
<IconButton className="button_Submenu" aria-label="mas opciones" size="large" sx={{ml:"20px"}}>
  <MoreVertIcon fontSize="large" />
</IconButton>
    </Stack>
  </Box>
  </>
  )
}
