import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import store from "./store";
import { interceptor } from "./commonservices/APIRequests";
import "./index.css";

interceptor();

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <App />
      <ToastContainer position="top-right" autoClose={3000} />
    </StrictMode>
  </Provider>
);