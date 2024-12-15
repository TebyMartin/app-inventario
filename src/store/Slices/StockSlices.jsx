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
      const response = await axios.put(url, productosSeleccionados);
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


const handleAsyncActions = (builder, thunk, fulfilledHandler = null) => {
  builder
    .addCase(thunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(thunk.fulfilled, (state, action) => {
      state.loading = false;
      if (fulfilledHandler) {
        fulfilledHandler(state, action);
      }
    })
    .addCase(thunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
};


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
    handleAsyncActions(builder, fetchProductos, (state, action) => {
      state.productos = action.payload;
    });

    handleAsyncActions(builder, eliminarProducto, (state, action) => {
      state.productos = state.productos.filter(
        (producto) => producto._id !== action.payload
      );
    });

    handleAsyncActions(builder, actualizarStock, (state) => {
      state.seleccionados = [];
    });
  },
});

export const {
  seleccionarProducto,
  eliminarSeleccionado,
  actualizarCantidad,
} = stockSlice.actions;

export default stockSlice.reducer;
