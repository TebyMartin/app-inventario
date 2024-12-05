import Dashboard from "./Layout/Dashboard/Dashboard";
import CargaCantidades from "./Layout/CargaCantidades/CargaCantidades";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MenuApp from "./Components/Drawer/MenuApp";
import Busqueda from "./Components/Search/Busqueda";
import AgregarLibro from "./Layout/AgregarLibro/AgregarLibro";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      
        <Route element={<MenuApp />}>
          <Route path="/" element={<Busqueda />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cargacontenido" element={<CargaCantidades />} />
          <Route path="/agregar" element={<AgregarLibro />} />
        </Route>
        
       
      </>
    )
  );
  return (
    <>
    
        <RouterProvider router={router} />
    
    </>
  )
}

export default App
