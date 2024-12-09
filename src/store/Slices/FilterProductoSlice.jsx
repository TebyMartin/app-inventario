import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL, productoURL, busquedaProducto } from "../../App";


export const getProducts = createAsyncThunk(
  "filteredBooks/getProducts",
  async () => {
    try {
      const response = await axios.get(`${baseURL}${productoURL}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);


export const getFilteredBooks = createAsyncThunk(
  "filteredBooks/getFilteredBooks",
  async (payload, thunkAPI) => {
    console.log(payload);
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

const filteredBooks = createSlice({
  name: "filteredBooks",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      
      
      .addCase(getFilteredBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFilteredBooks.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getFilteredBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default filteredBooks.reducer;
