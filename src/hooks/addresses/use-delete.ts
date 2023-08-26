import { Alert } from 'react-native'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { api } from '@/lib/axios'

import { AppError } from '@/utils/app-error'

export function useDeleteAddress() {
  const queryClient = useQueryClient()

  return useMutation(
    ['DELETE_ADDRESS'],
    async (addressId: number) => {
      await api.delete(`/client/address/${addressId}`)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['GET_ALL_ADDRESSES'])
      },
      onError: (error) => {
        const isAppError = error instanceof AppError
        if (isAppError) {
          Alert.alert(error.message)
        }
      },
    },
  )
}
