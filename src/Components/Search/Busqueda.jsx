import { Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Busqueda() {
  return (
    <div
      style={{
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "60vh", 
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
            backgroundColor: "#A68C4C", 
            color: "#fff", 
          }}
        >
          BUSCAR
        </Button>
      </div>
    </div>
  );
}

export default Busqueda;
