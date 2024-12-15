import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "./Slices/StockSlices";
import procuctoReducer from "./Slices/FilterProductoSlice";

const store = configureStore({
  reducer: {
    stock: stockReducer,
    filteredProductos: procuctoReducer,
  },
  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
