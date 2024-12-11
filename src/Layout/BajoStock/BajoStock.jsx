import ProductosBajoStock from "../../Components/BajoStock/BajoStock"
import { Box } from "@mui/material"

function BajoStock() {
  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      marginTop: "100px",
      width: "100%",
    }}
  >
      <ProductosBajoStock />
      
</Box>
  )
}

export default BajoStock