import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import {useAppContext } from './shared';

export default function ButtonAppBar() {
  let history = useHistory();
  const { resetMusic } = useAppContext() || {}

  const redirect = (direccion:string) => {
    resetMusic?.();
    history.push(direccion);
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="span" sx={{ flexGrow: 1 }} fontWeight="bold">
            Prueba
          </Typography>
          <Button color="inherit" onClick={()=> redirect("/")}>
          <Typography variant="body2" component="span" sx={{ flexGrow: 1 }} fontWeight="bold">
            LISTA DE ARTISTAS
          </Typography></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}