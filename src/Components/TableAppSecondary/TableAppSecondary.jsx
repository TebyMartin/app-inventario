import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { eliminarSeleccionado, actualizarCantidad, actualizarStock } from '../../store/Slices/StockSlices';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Snackbar, TextField } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useState } from 'react';




const paginationModel = { page: 0, pageSize: 5 };

function TableAppSecondary() {
  const dispatch = useDispatch();
  const { seleccionados } = useSelector((state) => state.stock)
   const [alert, setAlert] = useState({
      show: false,
      message: "",
      severity: "",
    });


  const columns = [
    { field: "nombre", headerName: "Nombre", width: 200 },
    {
      field: "cantidad",
      headerName: "Nueva Cantidad",
      renderCell: (params) => (
        <TextField
          type="number"
          value={params.row.cantidad}
          variant="standard" 
          onChange={(e) =>
            dispatch(
              actualizarCantidad({ _id: params.row._id, cantidad: e.target.value })
            )
          }
        />
      ),
      width: 150,
    },
    {
      field: "acciones",
      headerName: "Acciones",
      renderCell: (params) => (
        <Button  onClick={() => dispatch(eliminarSeleccionado(params.row._id))}  color="error">
          <DeleteOutlineOutlinedIcon/>
        </Button >
      ),
      width: 150,
    },
  ];
  const handleActualizarStock = () => {
    if (seleccionados.length === 0) {
      setAlert({
        show: true,
        message: "No hay productos bajo stock",
        severity: "warning",
      });
      return;
    }
    dispatch(actualizarStock(seleccionados), setAlert({
      show: true,
      message: "Cantidad actualizada",
      severity: "success",
    }));
  };
  return (
    <>
    <Paper sx={{ height: 400, width: '100%', display: 'flex', justifyContent: 'center', margin: 'auto',position: "relative", left: "-150px"  }}>
    {alert.show && (
              <Snackbar
                open={alert.show}
                autoHideDuration={3000}
                onClose={() => setAlert({ show: false, message: "", severity: "" })}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}  
                sx={{
                  width: { xs: "90%", sm: "50%", md: "30%" },
                  "& .MuiSnackbarContent-root": {
                    fontSize: { xs: "0.8rem", sm: "1rem" }, 
                  },
                }}
              >
                <Alert
                  onClose={() => setAlert({ show: false, message: "", severity: "" })}
                  severity={alert.severity}
                  sx={{ width: "100%" }}
                >
                  {alert.message}
                </Alert>
              </Snackbar>
            )}
    <DataGrid
      rows={seleccionados}
        columns={columns}
        getRowId={(row) => row._id}
      initialState={{ pagination: { paginationModel } }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
      sx={{ border: 0 }}
      />
    
    </Paper>
    <Button variant="contained" onClick={handleActualizarStock}  style={{
            backgroundColor: "#A68C4C",
            color: "#fff", 
            width: "100%", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            height: "50px", 
            position: "relative", left: "-150px" 
           }}>Actualizar Stock</Button>
     </>
  )
}

export default TableAppSecondary