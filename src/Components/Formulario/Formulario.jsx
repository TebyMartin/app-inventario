import {
  Avatar,
  Button,
  Card,
  Grid2,
  TextField,
  Typography,
  Snackbar,
  Alert
} from "@mui/material";
import ProductionQuantityLimitsSharpIcon from "@mui/icons-material/ProductionQuantityLimitsSharp";
import { useForm } from "../../hooks/useFormulario";

function Formulario() {
  const { productoForm, handleChange, handleSubmit, alert } = useForm();
  const today = new Date().toISOString().split("T")[0];

  return (
    <Card
    sx={{
      maxWidth: "800px",
      width: "100%",
      minWidth: "300px",
      alignSelf: "center",
      margin: "20px auto",
      ml: { xs: -25, sm: -10, md: 30 }, // Márgenes dinámicos para diferentes tamaños de pantalla
    }}
    >
      <Grid2
        container
        spacing={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "20px",
        }}
      >
        {alert.show && (
          <Snackbar
            open={alert.show}
            autoHideDuration={3000}
            onClose={() => setAlert({ show: false, message: "", severity: "" })}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}  
            sx={{
              width: { xs: "90%", sm: "50%", md: "30%" },
              "& .MuiSnackbarContent-root": {
                fontSize: { xs: "0.8rem", sm: "1rem" }, // Ajustar el tamaño de fuente
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

        <Grid2 item xs={12} textAlign="center">
          <Typography variant="h5" gutterBottom>
            Nuevo producto
          </Typography>
          <Avatar>
            <ProductionQuantityLimitsSharpIcon />
          </Avatar>
        </Grid2>
        <Grid2 container spacing={2}>
          <Grid2 item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Nombre"
              name="nombre"
              value={productoForm.nombre}
              onChange={(e) => handleChange(e)}
            />
          </Grid2>
          <Grid2 item xs={12} sm={6}>
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
          <Grid2 item xs={12}>
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
       
          <Grid2 item xs={12} sm={6}>
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
          <Grid2 item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Categoría"
              name="categoria"
              value={productoForm.categoria}
              onChange={(e) => handleChange(e)}
            />
          </Grid2>
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Descripción"
              name="descripcion"
              multiline
              rows={3} 
              maxRows={5}
              value={productoForm.descripcion}
              onChange={(e) => handleChange(e)}
            />
          </Grid2>
        </Grid2>
        <Grid2
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
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
              height: "50px",
            }}
          >
            Agregar
          </Button>
        </Grid2>
      </Grid2>
    </Card>
  );
}

export default Formulario;
