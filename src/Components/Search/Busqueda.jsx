import { Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Busqueda() {
  return (
    <div
      style={{
        display: "flex", // Activa flexbox
        justifyContent: "center", // Centra horizontalmente
        alignItems: "center", // Centra verticalmente
        height: "60vh", // Ocupa toda la altura de la pantalla
      }}
    >
      <div style={{ marginRight: "20px", width: "100%", marginLeft: "320px"  }}>
        <Typography variant="h5" gutterBottom>
          Buscá un libro
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          label="Search by title"
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        />
       <Button
          variant="contained"
          fullWidth
          style={{
            marginTop: "10px",
            backgroundColor: "#A68C4C", // Cambia el color de fondo
            color: "#fff", // Cambia el color del texto a blanco para contraste
          }}
        >
          BUSCAR
        </Button>
      </div>
    </div>
  );
}

export default Busqueda;
