import { ContextProvider } from "../src/shared/hooks/"
import Rutas from './Rutas/Rutas'

function App() {
  return (
    <ContextProvider>
    <Rutas/>  
    </ContextProvider>
  )
}

export default App
