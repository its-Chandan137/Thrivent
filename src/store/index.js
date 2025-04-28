import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import authReducer from "./slices/authSlice";
import studentReducer from "./slices/studentSlice";

// Configure the store
const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    student: studentReducer,
  },
  // devTools: process.env.NODE_ENV !== "production", // Enable DevTools in development
});

export default store;