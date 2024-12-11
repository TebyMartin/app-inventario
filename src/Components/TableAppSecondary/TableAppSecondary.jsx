import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { eliminarSeleccionado, actualizarCantidad, actualizarStock } from '../../store/Slices/StockSlices';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';




const paginationModel = { page: 0, pageSize: 5 };

function TableAppSecondary() {
  const dispatch = useDispatch();
  const { seleccionados } = useSelector((state) => state.stock);


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
      alert("No hay productos seleccionados para actualizar.");
      return;
    }
    dispatch(actualizarStock(seleccionados));
  };
  return (
    <>
    <Paper sx={{ height: 400, width: '100%', display: 'flex', justifyContent: 'center', margin: 'auto',position: "relative", left: "-150px"  }}>
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