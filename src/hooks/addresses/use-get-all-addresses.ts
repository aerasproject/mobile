import { Alert } from 'react-native'
import { useQuery } from '@tanstack/react-query'

import { api } from '@/lib/axios'

import { AddressDTO } from '@/dtos'

import { AppError } from '@/utils/app-error'

async function fetchAddresses() {
  try {
    const response = await api.get('/client/address')
    return response.data as AddressDTO[]
  } catch (error) {
    throw error
  }
}

export const useGetAllAddresses = () => {
  return useQuery(['GET_ALL_ADDRESSES'], fetchAddresses, {
    onError: (error) => {
      const isAppError = error instanceof AppError
      if (isAppError) {
        Alert.alert(error.message)
      }
    },
  })
}
