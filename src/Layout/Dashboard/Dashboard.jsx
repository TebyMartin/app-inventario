import { Box, CircularProgress } from "@mui/material"
import TableApp from "../../Components/TableApp/TableApp"
import ProductoToolbar from "../../Components/ProductoToolbar/ProductoToolbar"
import { useFilters } from "../../hooks/useFilter";


function Dashboard() {
  const {
    loading,
    buttons,
    handleSearchChange,
    handleFilterTypeChange,
    exportToExcel,
    filterType,
    searchQuery,
  } = useFilters();

  if (loading) {
    return <CircularProgress />;
  }
  return (
      <Box sx={{
        alignContent: "center",
        margin: "auto",
        gap: "12px",
        marginTop: "100px",
    }}>
      
  <ProductoToolbar
        handleFilterTypeChange={handleFilterTypeChange}
        handleSearchChange={handleSearchChange}
        exportToExcel={exportToExcel}
        filterType={filterType}
        searchQuery={searchQuery}
      />
    <TableApp searchQuery={searchQuery} filterType={filterType}/>
     
    </Box>
  )
}

export default Dashboard