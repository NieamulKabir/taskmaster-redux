import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks/tasksSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    users:userSlice
  },
});
