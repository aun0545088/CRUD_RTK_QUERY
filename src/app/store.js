import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../Api/auth/authApi";
import { usersApi } from "../Api/users/usersApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, usersApi.middleware),
});

setupListeners(store.dispatch);
export default store;
