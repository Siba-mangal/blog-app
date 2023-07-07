import axios from "axios";

// const API_NOTIFICATION = require("../constants/config.js");
import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from "../constants/config";
const API_URL = "http://localhost:8000/user";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "content-type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return processResponse(response);
  },
  function (error) {
    return Promise.reject(processError(error));
  }
);

const processResponse = (response) => {
  console.log("processResponse", response);
  if (response.status === 200) {
    return {
      isSuccess: true,
      data: response.data,
    };
  } else {
    return {
      isFailure: true,
      status: response.status,
      msg: response?.msg,
      code: response?.code,
    };
  }
};

const processError = (error) => {
  if (error.response) {
    // request made and server response with a status code
    console.log(error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.responseFailure,
      code: error.response.status,
    };
  } else if (error.request) {
    //request send but response not return
    console.log(error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.requestFailure,
      code: "",
    };
  } else {
    //frontend error
    console.log(error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.networkError,
      code: "",
    };
  }
};

const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)) {
  API[key] = (body, showUploadProgress, showDownloadProgress) => {
    axiosInstance({
      method: value.method,
      url: value.url,
      data: body,
      responseType: value.responseType,
      onUploadProgress: function (progressEvent) {
        if (showUploadProgress) {
          let percentageComplete = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showUploadProgress(percentageComplete);
        }
      },
      onDownloadProgress: function (processEvent) {
        if (showDownloadProgress) {
          let percentageComplete = Math.round(
            (processEvent.loaded * 100) / processEvent.total
          );
          showDownloadProgress(percentageComplete);
        }
      },
    });
  };
}

export { API };
