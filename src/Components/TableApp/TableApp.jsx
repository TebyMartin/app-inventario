import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { Button, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useEffect } from 'react';
import { fetchProductos, seleccionarProducto } from '../../store/Slices/StockSlices';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Modal from '../Modal/Modal'; // Asegúrate de que este path sea correcto
import { useProductoModal } from '../../hooks/useProductoModal';

const paginationModel = { page: 0, pageSize: 5 };

function TableApp({ searchQuery, filterType }) {
  const dispatch = useDispatch();
  const { productos } = useSelector((state) => state.stock);

  // Usamos el custom hook
  const {
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
  } = useProductoModal();

  const filteredProducts = productos.filter((producto) => {
    if (filterType === "nombre") {
      return producto.nombre.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true; 
  });

  useEffect(() => {
    dispatch(fetchProductos());
  }, [dispatch]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-AR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

  const columns = [
    { field: 'nombre', headerName: 'Nombre', width: 130 },
    { field: 'descripcion', headerName: 'Descripcion', width: 130 },
    { field: 'precio', headerName: 'Precio', type: 'number', width: 90 },
    { field: 'cantidad', headerName: 'Cantidad', width: 130 },
    { field: 'categoria', headerName: 'Categoria', width: 130 },
    {
      field: 'fechaIngreso',
      headerName: 'Fecha de Ingreso',
      width: 130,
      renderCell: (params) => (
        <span>{formatDate(params.row.fechaIngreso)}</span>
      ),
    },
    {
      field: "acciones",
      headerName: "Acciones",
      renderCell: (params) => (
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button onClick={() => dispatch(seleccionarProducto(params.row))} color="success">
            <ChecklistOutlinedIcon />
          </Button>
          <IconButton onClick={() => handleOpenEditModal(params.row)} color="default">
            <EditIcon style={{ color: 'gray' }} />
          </IconButton>
          <IconButton onClick={() => handleOpenDialog(params.row._id)} color="error">
            <DeleteIcon />
          </IconButton>
        </div>
      ),
      width: 200,
    }
  ];

  return (
    <Paper sx={{ height: 400, width: '100%', display: 'flex', justifyContent: 'center', margin: 'auto' }}>
      <DataGrid
        rows={filteredProducts}
        columns={columns}
        getRowId={(row) => row._id}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
      
      {/* Dialog de eliminación */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirmar Eliminación</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que deseas eliminar este producto? Esta acción no se puede deshacer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Modal de edición */}
      <Modal
        open={openEditModal}
        selectedProduct={selectedProduct}
        handleClose={handleCloseEditModal}
        handleUpdate={handleUpdate}
      />
    </Paper>
  );
}

export default TableApp;
