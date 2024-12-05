import { Box } from "@mui/material";
import Formulario from "../../Components/Formulario/Formulario";

function AgregarLibro() {
  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      marginTop: "100px",
      width: "100%",
    }}
  >
    <Formulario />
  </Box>
  )
}

export default AgregarLibro