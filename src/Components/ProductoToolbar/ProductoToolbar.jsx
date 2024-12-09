import {
    Box,
    Button,
    TextField,
    MenuItem,
    Select,
    FormControl,
  } from "@mui/material";
import { FilterList, Download, } from "@mui/icons-material";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';


export default function ProductoToolbar({
    handleFilterTypeChange,
    handleSearchChange,
    filterType,
    searchQuery,
    exportToExcel,
  }) {
  return (
    <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px 16px",
      backgroundColor: "#f8f8f8",
      borderRadius: "8px",
      gap: "12px",
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <ProductionQuantityLimitsIcon sx={{ color: "#A68C4C" }} />
      <span
        style={{ fontWeight: "bold", fontSize: "16px", color: "#A68C4C" }}
      >
        PRODUCTO
      </span>
    </Box>

    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <FilterList sx={{ color: "#A68C4C" }} />
      <FormControl size="small" variant="standard">
        <Select
          value={filterType}
          onChange={handleFilterTypeChange}
          displayEmpty
          sx={{ minWidth: "150px" }}
        >
          <MenuItem value="">Filtrar por...</MenuItem>
          <MenuItem value="nombre">Nombre</MenuItem>
          
        </Select>
      </FormControl>
    </Box>

    <TextField
      size="small"
      placeholder="Buscar..."
      variant="standard"
      value={searchQuery}
      onChange={handleSearchChange}
      sx={{ flex: 1 }}
    />

    <Button
      variant="contained"
      color="primary"
      startIcon={<Download />}
      onClick={exportToExcel}
      sx={{
        textTransform: "none",
        backgroundColor: "#A68C4C",
        ":hover": { backgroundColor: "#A68C4C" },
      }}
    >
      Exportar
    </Button>
  </Box>
  )
}
