import Dashboard from "./Layout/Dashboard/Dashboard";
import CargaCantidades from "./Layout/CargaCantidades/CargaCantidades";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MenuApp from "./Components/Drawer/MenuApp";
import Busqueda from "./Components/BajoStock/BajoStock";
import AgregarLibro from "./Layout/AgregarLibro/AgregarLibro";
import BajoStock from "./Layout/BajoStock/BajoStock";

export const baseURL = import.meta.env.VITE_BASE_URL
export const productoURL = import.meta.env.VITE_PRODUCTO
export const actualizarProducto = import.meta.env.VITE_STOCK
export const busquedaProducto = import.meta.env.VITE_BUSQUEDA
export const productoBajoStock = import.meta.env.VITE_BAJOSTOCK



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      
        <Route element={<MenuApp />}>
          <Route path="/" element={<BajoStock />} />
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
