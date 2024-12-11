import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, CircularProgress, Alert, Button, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";



const ProductosBajoStock = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProductosBajoStock = async () => {
      try {
        const response = await axios.get("https://inventariostock-api.vercel.app/api/producto/stock/bajo-stock");
        setProductos(response.data);
      } catch (err) {
        setError(
          err.response?.data?.mensaje || "Error al obtener productos con bajo stock."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProductosBajoStock();
  }, []);

  const columns = [
    { field: "nombre", headerName: "Nombre", width: 200 },
    { field: "cantidad", headerName: "Cantidad", width: 100 },
    { field: "categoria", headerName: "Categoría", width: 150 },
  ];

  return (
    <Box sx={{ padding: 2, borderRadius: 2 }}>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "#A68C4C",
          position: "relative",
          left: { xs: 0, md: "--10pxpx" }, 
          fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" }, 
        }}
      >
        Productos con Bajo Stock
      </Typography>

      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : productos.length === 0 ? (
        <Alert severity="info">No hay productos con bajo stock.</Alert>
      ) : (
        <>
          <Paper
            sx={{
              height: 400,
              width: { xs: "90%", sm: "80%", md: "70%" }, 
              display: "flex",
              justifyContent: "center",
              margin: "auto",
              borderRadius: 2,
              position: "relative",
              left: { xs: 0, md: "-10px" }, 
              overflowX: "auto", 
            }}
          >
            <DataGrid
              rows={productos}
              columns={columns}
              getRowId={(row) => row._id}
              pageSize={5}
              rowsPerPageOptions={[5, 10, 20]}
              sx={{
                border: 0,
                width: "100%", 
              }}
            />
          </Paper>
        </>
      )}
    </Box>
  );
};

export default ProductosBajoStock;
