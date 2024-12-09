import { useEffect, useState } from "react";
import { Modal as MuiModal, Box, TextField, Button, Typography,  } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function Modal({ open, selectedProduct, handleClose, handleUpdate }) {
  const [editedProduct, setEditedProduct] = useState(selectedProduct || {});

  const formatDateForInput = (dateString) => {
    if (!dateString) return ''; // Si no hay fecha, devolver un valor vacío
    const date = new Date(dateString);
    if (isNaN(date)) return ''; // Si la fecha es inválida, devolver un valor vacío
    return date.toISOString().split('T')[0]; // Devuelve la fecha en formato 'YYYY-MM-DD'
  };

  useEffect(() => {
    setEditedProduct(selectedProduct || {}); // Sincroniza los datos al abrir el modal
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    handleUpdate(editedProduct); // Llama a la función para actualizar
  };

  return (
    <MuiModal open={open} onClose={handleClose}>
      <Box sx={style}>
      <Typography
        variant="h6"
        gutterBottom

        sx={{ fontWeight: "bold", textAlign: "center", color: "#A68C4C" }}
      >
        Editar Producto
      </Typography>
        <TextField
          label="Nombre"
          name="nombre"
          value={editedProduct.nombre || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Cantidad"
          name="cantidad"
          value={editedProduct.cantidad || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
          type="number"
        />
        <TextField
          label="Descripcion"
          name="descripcion"
          value={editedProduct.descripcion || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Precio"
          name="precio"
          value={editedProduct.precio || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
          type="number"
        />
        <TextField
          label="Categoria"
          name="categoria"
          value={editedProduct.categoria || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Fecha de Ingreso"
          name="fechaIngreso"
          value={formatDateForInput(editedProduct.fechaIngreso) || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{
            backgroundColor: "#A68C4C",
            color: "#fff", 
            width: "100%", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            height: "50px", 
           }}
        >
          Actualizar
        </Button>
      </Box>
    </MuiModal>
  );
}

export default Modal;
