import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL, actualizarProducto, productoURL } from "../../App";


export const fetchProductos = createAsyncThunk(
  "stock/fetchProductos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}${productoURL}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const actualizarStock = createAsyncThunk(
  "stock/actualizarStock",
  async (productosSeleccionados, { rejectWithValue, dispatch }) => {
    try {
      const url = `${baseURL}${actualizarProducto}`;
      console.log(url);
      
      const response = await axios.put(
        url,
        productosSeleccionados
      );
      dispatch(fetchProductos()); 
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const eliminarProducto = createAsyncThunk(
  "stock/eliminarProducto",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      
      await axios.delete(`${baseURL}${productoURL}/${id}`);
      
    
      dispatch(fetchProductos());
      return id; 
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Slice
const stockSlice = createSlice({
  name: "stock",
  initialState: {
    productos: [],
    seleccionados: [],
    loading: false,
    error: null,
  },
  reducers: {
    seleccionarProducto(state, action) {
      const producto = action.payload;
      if (!state.seleccionados.some((p) => p._id === producto._id)) {
        state.seleccionados.push({ ...producto, cantidad: producto.cantidad });
      }
    },
    eliminarSeleccionado(state, action) {
      state.seleccionados = state.seleccionados.filter(
        (p) => p._id !== action.payload
      );
    },
    actualizarCantidad(state, action) {
      const { _id, cantidad } = action.payload;
      const producto = state.seleccionados.find((p) => p._id === _id);
      if (producto) {
        producto.cantidad = cantidad;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductos.fulfilled, (state, action) => {
        state.loading = false;
        state.productos = action.payload;
      })
      .addCase(fetchProductos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(eliminarProducto.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(eliminarProducto.fulfilled, (state, action) => {
        state.loading = false;
        state.productos = state.productos.filter(
          (producto) => producto._id !== action.payload
        );
      })
      .addCase(eliminarProducto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(actualizarStock.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(actualizarStock.fulfilled, (state) => {
        state.loading = false;
        state.seleccionados = [];
      })
      .addCase(actualizarStock.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const {
  seleccionarProducto,
  eliminarSeleccionado,
  actualizarCantidad,
} = stockSlice.actions;

export default stockSlice.reducer;
