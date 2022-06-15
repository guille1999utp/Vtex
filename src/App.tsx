import { ContextProvider } from "../src/shared/hooks/"
import Rutas from './Rutas/Rutas'
import { CssBaseline,ThemeProvider } from '@mui/material'
import { darkTheme } from './themes'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <ContextProvider>
    <Rutas/>  
    </ContextProvider>
    </ThemeProvider>
  )
}

export default App
