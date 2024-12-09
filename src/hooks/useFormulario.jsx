import { useState } from "react";
import postProducto from "../services/postProducto.js";

export const useForm = () => {
  const [productoForm, setProductoForm] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    cantidad: "",
    categoria: "",
    fechaIngreso: "",
  });

  const [alert, setAlert] = useState({ show: false, message: "", severity: "" });

  const handleChange = (e) => {
    setProductoForm({ ...productoForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (
      !productoForm.nombre ||
      !productoForm.descripcion ||
      !productoForm.precio ||
      !productoForm.cantidad ||
      !productoForm.categoria ||
      !productoForm.fechaIngreso
    ) {
      setAlert({
        show: true,
        message: "Por favor, llena todos los campos.",
        severity: "warning",
      });

    
      setTimeout(() => {
        setAlert({ show: false, message: "", severity: "" });
      }, 3000);

      return; 
    }

    try {
      const sendData = await postProducto(productoForm);
      console.log({ sendData });

      setAlert({
        show: true,
        message: "Producto agregado con éxito",
        severity: "success",
      });

      
      setTimeout(() => {
        setAlert({ show: false, message: "", severity: "" });
      }, 3000);

      
      setProductoForm({
        nombre: "",
        descripcion: "",
        precio: "",
        cantidad: "",
        categoria: "",
        fechaIngreso: "",
      });
    } catch (error) {
      setAlert({
        show: true,
        message: "Error al agregar el producto",
        severity: "error",
      });
      setTimeout(() => {
        setAlert({ show: false, message: "", severity: "" });
      }, 3000);
    }
  };

  return { productoForm, handleChange, handleSubmit, alert };
};
