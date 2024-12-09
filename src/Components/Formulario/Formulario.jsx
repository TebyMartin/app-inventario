import {
    Avatar,
    Button,
    Card,
    Grid2,
    TextField,
    Typography,
    Alert
    
  } from "@mui/material";
  import ProductionQuantityLimitsSharpIcon from '@mui/icons-material/ProductionQuantityLimitsSharp';
import { useForm } from "../../hooks/useFormulario";


function Formulario() {
  const { productoForm, handleChange, handleSubmit, alert, setAlert } = useForm()
  const today = new Date().toISOString().split("T")[0];
  return (
    <Card style={{ maxWidth: "800px", width: "100%", alignSelf: "center" }}>
      <Grid2
        container
        spacing={3}
        sx={{ display: "flex", flexDirection: "column", margin: "20px" }}
      >
          {alert.show && (
        <Grid2 item xs={12}>
          <Alert variant="filled" severity={alert.severity}>
            {alert.message}
          </Alert>
        </Grid2>
          )}
        <Grid2 item xs={12}>
          <Typography variant="h5" gutterBottom>
            Nuevo producto
          </Typography>
          <Avatar>
            <ProductionQuantityLimitsSharpIcon />
          </Avatar>
        </Grid2>
        <Grid2
          item
          xs={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
            flexGrow: 1,
          }}
        >
          <Grid2 item xs={3}>
            <TextField
              fullWidth
              variant="outlined"
              label="Nombre"
              name="nombre"
              value={productoForm.nombre}
              onChange={(e) => handleChange(e)}
            />
          </Grid2>
          <Grid2 item xs={3}>
            <TextField
              fullWidth
              variant="outlined"
              label="Cantidad"
              name="cantidad"
              type="number"
              value={productoForm.cantidad}
              onChange={(e) => handleChange(e)}
            />
          </Grid2>
        </Grid2>
        <Grid2 item xs={3}>
          <TextField
            fullWidth
            variant="outlined"
            label="Descripcion"
            name="descripcion"
            value={productoForm.descripcion}
            onChange={(e) => handleChange(e)}
          />
        </Grid2>
        <Grid2 item xs={3}>
          <TextField
            fullWidth
            variant="outlined"
            label="Precio"
            name="precio"
            type="number"
            value={productoForm.precio}
            onChange={(e) => handleChange(e)}
          />
        </Grid2>
        <Grid2 item xs={3}>
          <TextField
            fullWidth
            variant="outlined"
            label="Categoria"
            name="categoria"
            value={productoForm.categoria}
            onChange={(e) => handleChange(e)}
          />
        </Grid2>
        <Grid2 item xs={3}>
          <TextField
            fullWidth
            variant="outlined"
            name="fechaIngreso"
            type="date"
            InputProps={{ inputProps: { max: today } }}
            value={productoForm.fechaIngreso}
            onChange={(e) => handleChange(e)}
          />
          
        </Grid2>
        <Grid2
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <Button
          variant="contained"
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
              Agregar
            </Button>
        </Grid2>
      </Grid2>
    </Card>
  )
}

export default Formulario