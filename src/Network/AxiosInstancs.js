import axios from "axios";
import { Loader } from "../Store/AddFavCount";
import store from "../Store/Store";




export const AxiosInstance= axios.create({
    baseURL:"https://api.themoviedb.org/3/"
})


axios.interceptors.request.use(function (config) {
  config["params"] = {
    api_key: "a642b234a88b2fc4a5efdf425ca2b711",
}
  store.dispacth(Loader(true))
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  store.dispacth(Loader(false))
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });