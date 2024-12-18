import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { Button, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Box } from '@mui/material';
import { useEffect } from 'react';
import { fetchProductos, seleccionarProducto } from '../../store/Slices/StockSlices';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Modal from '../Modal/Modal'; 
import { useProductoModal } from '../../hooks/useProductoModal';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';



const paginationModel = { page: 0, pageSize: 5 };


function TableApp({ searchQuery, filterType }) {
  const dispatch = useDispatch();
  const { productos } = useSelector((state) => state.stock);
  const navigate = useNavigate();

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
    if (!dateString) return ''
    const date = new Date(dateString);
    if (isNaN(date)) return ''
    const localDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    const year = localDate.getFullYear();
    const month = String(localDate.getMonth() + 1).padStart(2, '0');
    const day = String(localDate.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
  };
  

  const handleChecklistClick = (producto) => {
    toast.info(`Agregado "${producto.nombre}". Carga los productos que necesiten actualizacion de stock y cuando termines  aprieta el boton  debajo.`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    dispatch(seleccionarProducto(producto)); 
  };
  const handleRedirect = () => {
    navigate("/cargacontenido"); 
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
          <Button
            onClick={() => handleChecklistClick(params.row)} 
            color="success"
          >
            <ChecklistOutlinedIcon />
          </Button>
          <IconButton
            onClick={() => handleOpenEditModal(params.row)}
            color="default"
          >
            <EditIcon style={{ color: 'gray' }} />
          </IconButton>
          <IconButton
            onClick={() => handleOpenDialog(params.row._id)}
            color="error"
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ),
      width: 200,
    }
  ];

  return (
    
    <Paper   autoHeight
    rows={filteredProducts}
    columns={columns}
    getRowId={(row) => row._id}
    initialState={{ pagination: { paginationModel } }}
    pageSizeOptions={[5, 10]}
    checkboxSelection
    sx={{
      border: 0,
      width: '100%',
      '@media (max-width: 600px)': {
        maxWidth: '100%',
      },
    }}>
      <DataGrid
        rows={filteredProducts}
        columns={columns}
        getRowId={(row) => row._id}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          border: 0,
          width: '100%', 
          maxHeight: 400, 
          '@media (max-width: 600px)': {
            maxWidth: '100%', 
            height: 'auto', 
          },
        }}
        
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <Button variant="contained" color="primary "  style={{
              backgroundColor: "#A68C4C",
              color: "#fff",
              width: "100%",
              height: "50px",
            }}size="large" onClick={handleRedirect} >
          Ir a Carga de Cantidades
        </Button>
      </Box>
        <ToastContainer  position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          toastStyle={{
            maxWidth: "90%",
            fontSize: "0.9rem",
            margin: "10px auto",
            '@media (min-width: 600px)': {
              maxWidth: "500px",
              fontSize: "1rem",
            },
          }}/>
              
              <Dialog
              open={openDialog}
              onClose={handleCloseDialog}
              BackdropProps={{
                style: { backgroundColor: 'transparent' }, 
              }}
              sx={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translate(-50%, -20%)',
                '& .MuiDialog-paper': {
                  margin: 0,
                  width: '90%',
                  maxWidth: '400px',
                  boxShadow: 'none', 
                  '@media (max-width: 600px)': {
                    width: '100%',
                  },
                },
              }}
            >
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
