import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { fetchProductos, eliminarProducto } from "../store/Slices/StockSlices";
import { baseURL, productoURL } from "../App";

export function useProductoModal() {
  const dispatch = useDispatch();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleOpenEditModal = (product) => {
    setSelectedProduct(product);
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setSelectedProduct(null);
    setOpenEditModal(false);
  };

  const handleUpdate = async (updatedProduct) => {
    try {
      const response = await axios.put(`${baseURL}${productoURL}/${updatedProduct._id}`, updatedProduct);
      console.log("Producto actualizado:", response.data);
      dispatch(fetchProductos()); // Recarga los datos
      handleCloseEditModal(); // Cierra el modal
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  const handleOpenDialog = (id) => {
    setSelectedId(id);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setSelectedId(null);
    setOpenDialog(false);
  };

  const handleConfirmDelete = () => {
    if (selectedId) {
      dispatch(eliminarProducto(selectedId));
    }
    handleCloseDialog();
  };

  return {
    openEditModal,
    selectedProduct,
    openDialog,
    selectedId,
    handleOpenEditModal,
    handleCloseEditModal,
    handleUpdate,
    handleOpenDialog,
    handleCloseDialog,
    handleConfirmDelete,
  };
}
