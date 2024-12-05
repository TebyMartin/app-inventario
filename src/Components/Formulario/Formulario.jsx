import {
    Avatar,
    Button,
    Card,
    Grid2,
    TextField,
    Typography,
  } from "@mui/material";
  import ProductionQuantityLimitsSharpIcon from '@mui/icons-material/ProductionQuantityLimitsSharp';
function Formulario() {
  return (
    <Card style={{ maxWidth: "800px", width: "100%", alignSelf: "center" }}>
      <Grid2
        container
        spacing={3}
        sx={{ display: "flex", flexDirection: "column", margin: "20px" }}
      >
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
            //   value={bookForm?.titulo}
            //   onChange={(e) => handleChange(e)}
            />
          </Grid2>
          <Grid2 item xs={3}>
            <TextField
              fullWidth
              variant="outlined"
              label="Cantidad"
              name="cantidad"
              type="number"
            //   value={bookForm.autor}
            //   onChange={(e) => handleChange(e)}
            />
          </Grid2>
        </Grid2>
        <Grid2 item xs={3}>
          <TextField
            fullWidth
            variant="outlined"
            label="Descripcion"
            name="descripcion"
            // value={bookForm.categoria}
            // onChange={(e) => handleChange(e)}
          />
        </Grid2>
        <Grid2 item xs={3}>
          <TextField
            fullWidth
            variant="outlined"
            label="Precio"
            name="precio"
            type="number"
            // value={bookForm.estado}
            // onChange={(e) => handleChange(e)}
          />
        </Grid2>
        <Grid2 item xs={3}>
          <TextField
            fullWidth
            variant="outlined"
            label="Categoria"
            name="categoria"
            // value={bookForm.estado}
            // onChange={(e) => handleChange(e)}
          />
        </Grid2>
        <Grid2 item xs={3}>
          <TextField
            fullWidth
            variant="outlined"
            name="fechaIngreso"
            type="date"
            // value={bookForm.estado}
            // onChange={(e) => handleChange(e)}
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
  style={{
    backgroundColor: "#A68C4C", // Cambia el color de fondo
    color: "#fff", // Cambia el color del texto
    width: "100%", // Ajusta el botón al ancho del contenedor
    display: "flex", // Activa flexbox en el botón
    justifyContent: "center", // Centra horizontalmente el texto
    alignItems: "center", // Centra verticalmente el texto
    height: "50px", // Ajusta la altura del botón (opcional)
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