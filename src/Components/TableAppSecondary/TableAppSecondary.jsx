import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [

  { field: 'nombre', headerName: 'Nombre', width: 130 },
  { field: 'descripcion', headerName: 'Descripcion', width: 130 },
  {
    field: 'precio',
    headerName: 'Precio',
    type: 'number',
    width: 90,
  },
  {
    field: 'cantidad', headerName: 'Cantidad', width: 130 
  },
  {
    field: 'categoria', headerName: 'Categoria', width: 130 
  },
  {
    field: 'fechaIngreso', headerName: 'Fecha de Ingreso', width: 130 
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };

function TableAppSecondary() {
  return (
    <Paper sx={{ height: 400, width: '100%', display: 'flex', justifyContent: 'center', margin: 'auto' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{ pagination: { paginationModel } }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
      sx={{ border: 0 }}
    />
  </Paper>
  )
}

export default TableAppSecondary