import axios from "axios";
import { baseURL, productoURL} from "../App";

const postProducto = async (productoForm) => {
  const response = axios.post(
    `${baseURL}${productoURL}`,
    {
  
      nombre: productoForm.nombre,
      descripcion: productoForm.descripcion,
      precio: productoForm.precio,
      cantidad: productoForm.cantidad,
      categoria:productoForm.categoria,
      fechaIngreso: productoForm.fechaIngreso,
    },
  );

  console.log({ response });
};

export default postProducto