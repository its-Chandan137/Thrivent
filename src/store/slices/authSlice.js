import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callAPI from "../../commonservices/APIRequests";
import { interceptor } from "../../commonservices/APIRequests";

// Initialize interceptor
interceptor();

const initialState = {
  user: null,
  token: sessionStorage.getItem("token") || null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const response = await callAPI.post("/auth/login", credentials);
    if (response.data.token) {
      sessionStorage.setItem("token", response.data.token);
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(callAPI.catchError(error));
  }
});

export const setPassword = createAsyncThunk(
  "auth/setPassword",
  async ({ newPassword, confirmPassword, token }, { rejectWithValue }) => {
    try {
      const response = await callAPI.post("/auth/set-password", { newPassword, confirmPassword }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(callAPI.catchError(error));
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
  try {
    const response = await callAPI.post("/auth/logout");
    sessionStorage.removeItem("token");
    return response.data;
  } catch (error) {
    return rejectWithValue(callAPI.catchError(error));
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(setPassword.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(setPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.token = null;
        state.user = null;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;