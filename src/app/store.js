import { configureStore } from "@reduxjs/toolkit";
import { foodApi } from "../services/foodApi";
import inputSearchSlice from "../features/InputSearchSlice";
export const store = configureStore({
  reducer: {
    foodApi: foodApi.reducer,
    searchInput: inputSearchSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(foodApi.middleware);
  },
});
