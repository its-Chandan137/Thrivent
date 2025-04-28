import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callAPI from "../../commonservices/APIRequests";

const initialState = {
  dashboardData: null,
  loading: false,
  error: null,
};

export const fetchStudentDashboard = createAsyncThunk(
  "student/fetchDashboard",
  async (_, { rejectWithValue }) => {
    try {
      const response = await callAPI.get("/dashboard/student");
      return response.data;
    } catch (error) {
      return rejectWithValue(callAPI.catchError(error));
    }
  }
);

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentDashboard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudentDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.dashboardData = action.payload;
      })
      .addCase(fetchStudentDashboard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default studentSlice.reducer;