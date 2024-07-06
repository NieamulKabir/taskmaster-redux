import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks/tasksSlice";
import userSlice from "./features/user/userSlice";
import baseApi from "./features/api/baseApi";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    tasks: tasksSlice,
    users: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
