import { ContextProvider } from "../src/shared/hooks/"
import Rutas from './Rutas/Rutas'
import { CssBaseline,ThemeProvider } from '@mui/material'
import { darkTheme } from './themes'
import ButtonAppBar from "./appBar"

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <ContextProvider>
    <ButtonAppBar/>
    <Rutas/>  
    </ContextProvider>
    </ThemeProvider>
  )
}

export default App
