import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AppRoutes from "./routes/AppRoutes";
import store from "../src/store";
import { interceptor } from "../src/commonservices/APIRequests"; // Initialize API interceptor

// Initialize the API interceptor when the app loads
interceptor();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;