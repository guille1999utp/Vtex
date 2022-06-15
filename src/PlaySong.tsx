import { Avatar, Badge, Box, Chip, Stack, Typography,Divider, List, ListItem, ListItemAvatar, ListItemText, Slider, IconButton } from '@mui/material'
import {FC,useState} from 'react'
import { PreviewSong, useAppContext} from './shared';
import StarRateIcon from '@mui/icons-material/StarRate';
import { CalcTime, secondsToString } from './helpers';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export const PlaySong:FC = () => {
  const { formData, allMusica, songSelect, setSong } = useAppContext() || {}
  const [volumen, setVol] = useState<number>(0);
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setVol(newValue);
    }
    
  };

  const newSong = (song:PreviewSong) =>{
    setSong?.(song);
    setVol(0);
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
      {allMusica?.map((song)=>{
        return <>
        <ListItem button secondaryAction={
          <Typography>{secondsToString(song.duration_ms)}</Typography>
        } onClick={()=>newSong(song)}>
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


  <Box sx={{width:"100%",background:"rgb(29,29,29)",display:"flex",justifyContent:"space-between"}}>
    <Stack sx={{padding:"0px 20px 0px 20px",height:"61px"}}>
    <Box sx={{height:"100%",display:"flex"}}>
    <SkipPreviousIcon sx={{color:"rgb(169,171,171)",mt:"14px",mr:"26px"}} fontSize="large"/>
    <Box sx={{minWidth:"280px",padding:"16px",background:"rgb(241,243,244)",height:"90%",mt:"7px",borderRadius:"30px",display:"flex",alignItems:"self-end"}}>
    <PlayArrowIcon sx={{color:"rgb(169,171,171)"}} />
    <Typography component="p" marginLeft={1} variant="body2" fontSize="0.78rem" color="primary">{CalcTime(songSelect?.duration_ms || "0", volumen)+ " / "}</Typography>
    <Typography component="p" variant="body2" fontSize="0.78rem" color="primary">{secondsToString(songSelect?.duration_ms || "0")}</Typography>
    <Slider
      min={0}
      step={1}
      max={Number(songSelect?.duration_ms)}
      onChange={handleChange}
      value={volumen}
      sx={{width:"80px",pt:"3px",ml:"15px",color:"rgb(169,171,171)",'& .MuiSlider-thumb': {
        width: 8,
        height: 8,
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
        '&:before': {
          boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
        },
        '&:hover, &.Mui-focusVisible': {
          boxShadow: "0px 0px 0px 8px"
        },
        '&.Mui-active': {
          width: 20,
          height: 20,
        },
      },
      '& .MuiSlider-rail': {
        opacity: 0.28,
      },
      }}
    />
    <VolumeUpIcon sx={{color:"rgb(169,171,171)",pt:"2px",ml:"6px"}}/>
    </Box>
    <SkipNextIcon sx={{color:"rgb(169,171,171)",mt:"14px",ml:"26px"}} fontSize="large"/>

    <List sx={{ width: '100%', maxWidth: 360,pt:"0"}}>
      <ListItem sx={{padding:"0",pt:"5px",pl:"47px"}}>
        <ListItemAvatar>
          <Avatar variant="rounded" src={songSelect?.preview_url}/>
        </ListItemAvatar>
        <ListItemText primary={songSelect?.name.substring(0,20)} secondary={"duracion " + secondsToString(songSelect?.duration_ms || "0")} />
      </ListItem>
    </List>
    </Box>
    </Stack>

    <Stack sx={{height:"61px",display:"flex",flexDirection:"row"}}>
    <IconButton aria-label="reproducir" size="large" sx={{ml:"20px"}}>
  <PlayCircleIcon fontSize="large" />
</IconButton>
<IconButton aria-label="shuflle" size="large" sx={{ml:"20px"}}>
  <ShuffleIcon fontSize="large" />
</IconButton>
<IconButton aria-label="barra para abajo" size="large" sx={{ml:"20px"}}>
  <ArrowDropDownIcon fontSize="large" />
</IconButton>
<IconButton aria-label="ampliar" size="large" sx={{ml:"20px"}}>
  <ZoomOutMapIcon fontSize="large" />
</IconButton>
<IconButton aria-label="mas opciones" size="large" sx={{ml:"20px"}}>
  <MoreVertIcon fontSize="large" />
</IconButton>
    </Stack>
  </Box>
  </>
  )
}
