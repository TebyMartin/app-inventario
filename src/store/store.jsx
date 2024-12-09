import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "./Slices/StockSlices";
import procuctoReducer from "./Slices/FilterProductoSlice";

const store = configureStore({
  reducer: {
    stock: stockReducer,
    filteredBooks: procuctoReducer,
  },
  // No necesitas agregar redux-thunk si usas `getDefaultMiddleware` que ya lo incluye
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
