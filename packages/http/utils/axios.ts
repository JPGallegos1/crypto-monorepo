import axiosClient from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios'

const http: AxiosInstance = axiosClient.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
})

http.interceptors.response.use(
  (res: AxiosResponse) => res.data,
  (err: AxiosError) => {
    if (err.response) {
      return Promise.reject(err.response.data)
    }

    if (err.request) {
      return Promise.reject(err.request)
    }

    return Promise.reject(err.message)
  }
)

const axios = <T>(config: AxiosRequestConfig) => http.request<any, T>(config)

export default axios
