import axios, { AxiosInstance } from 'axios'

import { AppError } from '@/utils/app-error'

type SignOut = () => void

type APIInstanceProps = AxiosInstance & {
  registerInterceptTokenManager: (signOut: SignOut) => () => void
}

const api = axios.create({
  baseURL: 'http://192.168.0.18:8080',
}) as APIInstanceProps

api.registerInterceptTokenManager = (signOut) => {
  const requestInterceptor = api.interceptors.response.use(
    (response) => response,
    (requestError) => {
      if (requestError.response && requestError.response.status === 401) {
        signOut()
        return Promise.reject(new AppError('Sessão expirada'))
      }

      if (requestError.response && requestError.response.data) {
        return Promise.reject(new AppError(requestError.response.data.message))
      } else {
        return Promise.reject(
          new AppError('Erro no servidor. Tente novamente mais tarde'),
        )
      }
    },
  )

  return () => {
    api.interceptors.response.eject(requestInterceptor)
  }
}

export { api }
