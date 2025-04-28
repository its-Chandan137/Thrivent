import axios from "axios";
import { toast } from "react-toastify";

// Dynamic base URL based on environment
const apiURL =
  window.location.origin.indexOf("localhost") > -1 ? "https://dev.internbox.in/api/v1/" : `${window.location.origin}/api/v1/`;
// Dynamic hostname for headers
const hostName = window.location.origin.indexOf("localhost") > -1 ? "https://dev.internbox.in/" : window.location.host;



// Create Axios instance with base URL
const axiosApiInstance = axios.create({ baseURL: apiURL });

// Interceptor setup
export const interceptor = () => {
  // Request interceptor for API calls
  axiosApiInstance.interceptors.request.use(
    async (config) => {
      const token = sessionStorage.getItem("token");
      if (token) {
        config.headers = {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          hostname: hostName,
        };
      } else {
        config.headers = {
          Accept: "application/json",
          hostname: hostName,
        };
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor for API calls
  axiosApiInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response && error.response.status === 401 && (error.response.message === "Unauthorized" || error.response.data.message === "Unauthorized")) {
        sessionStorage.removeItem("token");
        sessionStorage.setItem("sessionTimeOut", true);
        localStorage.clear();
        setTimeout(() => {
          sessionStorage.clear();
          window.location.href = "/";
        }, 1000);
        toast.warn("Session expired, Please login again");
      }
      return Promise.reject(error);
    }
  );
};

// Generic API methods
const callAPI = {
  get: (url, data) => {
    return axiosApiInstance
      .get(url, { params: data })
      .then((response) => response)
      .catch((error) => callAPI.catchError(error));
  },

  post: (url, data) => {
    return axiosApiInstance
      .post(url, data)
      .then((response) => response)
      .catch((error) => callAPI.catchError(error));
  },

  del: (url, data) => {
    return axiosApiInstance
      .delete(url, { data: data })
      .then((response) => response)
      .catch((error) => callAPI.catchError(error));
  },

  delWithParams: (url, data) => {
    return axiosApiInstance
      .delete(url, { params: data })
      .then((response) => response)
      .catch((error) => callAPI.catchError(error));
  },

  patch: (url, data) => {
    return axiosApiInstance
      .patch(url, data)
      .then((response) => response)
      .catch((error) => callAPI.catchError(error));
  },

  put: (url, data) => {
    return axiosApiInstance
      .put(url, data)
      .then((response) => response)
      .catch((error) => callAPI.catchError(error));
  },

  catchError: (response) => {
    const res = {
      message: "",
      status: response.response ? response.response.status : null,
    };

    if (
      response.response &&
      response.response.data.message &&
      response.response.data.message.length > 0
    ) {
      res.message = response.response.data.message;
    } else {
      res.message = "Something went wrong.";
    }

    return res;
  },
};

export default callAPI;