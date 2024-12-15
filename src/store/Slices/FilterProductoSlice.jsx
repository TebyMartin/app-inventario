import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL, productoURL, busquedaProducto } from "../../App";


export const getProducts = createAsyncThunk(
  "filteredProductos/getProducts",
  async () => {
    try {
      const response = await axios.get(`${baseURL}${productoURL}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);


export const getFilteredProductos = createAsyncThunk(
  "filteredProductos/getFilteredProductos",
  async (payload, thunkAPI) => {
    try {
      const paramFilter = payload.filterType;
      const response = await axios.get(`${baseURL}${busquedaProducto}`, {
        params: {
          [paramFilter]: payload.searchQuery,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);


const handleAsyncActions = (builder, thunk) => {
  builder
    .addCase(thunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(thunk.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    })
    .addCase(thunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
};

const filteredProductos = createSlice({
  name: "filteredProductos",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    handleAsyncActions(builder, getProducts);
    handleAsyncActions(builder, getFilteredProductos);
  },
});

export default filteredProductos.reducer;
