import { Box } from "@mui/material"
import TableApp from "../../Components/TableApp/TableApp"



function Dashboard() {
  return (
      <Box sx={{
        alignContent: "center",
        margin: "auto",
        gap: "12px",
        marginTop: "100px",
      }}>
          <TableApp />
     
    </Box>
  )
}

export default Dashboard