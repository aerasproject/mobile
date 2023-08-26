import { Alert } from 'react-native'
import { useQuery } from '@tanstack/react-query'

import { api } from '@/lib/axios'

import { AppError } from '@/utils/app-error'

export const useGetAll = () => {
  return useQuery(
    ['GET_ALL_ADDRESSES'],
    async () => {
      const response = await api.get('/client/address')
      return response.data
    },
    {
      onError: (error) => {
        const isAppError = error instanceof AppError
        if (isAppError) {
          Alert.alert(error.message)
        }
      },
    },
  )
}
