import { useState } from "react"
import putProducto from "../services/putProducto.js";


function usePutFormulario() {
    const [productoForm, setProductoForm] = useState({
        nombre: "",
        descripcion: "",
        precio: "",
        cantidad: "",
        categoria: "",
        fechaIngreso: "",
    });
    const [alert, setAlert] = useState({ show: false, message: "", severity: "" });


  return {}
}

export default usePutFormulario