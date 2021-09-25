import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { ChakraProvider } from "@chakra-ui/react";
import Cookies from "js-cookie";

import App from "./App";

axios.interceptors.request.use(
  function (config) {
    config.headers.Authorization = "Bearer " + Cookies.get("authToken");
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
