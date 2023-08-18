import axios from 'axios'

import { AppError } from '@/utils/app-error'

const api = axios.create({
  baseURL: 'http://192.168.0.18:8080',
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message))
    } else {
      return Promise.reject(
        new AppError('Erro no servidor. Tente novamente mais tarde'),
      )
    }
  },
)

export { api }
