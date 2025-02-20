import axios from 'axios'
import { env } from 'next-runtime-env'

import { errorInterceptor } from './interceptors'

const axiosConfig = {
  baseURL: env('NEXT_PUBLIC_API_URL') || 'http://localhost:3000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
}

export const axiosInstance = axios.create(axiosConfig)
export const authAxiosInstance = axios.create({ ...axiosConfig, withCredentials: true })

axiosInstance.interceptors.response.use(null, errorInterceptor)
authAxiosInstance.interceptors.response.use(null, errorInterceptor)
