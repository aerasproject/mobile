import { Alert } from 'react-native'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { api } from '@/lib/axios'

import { AppError } from '@/utils/app-error'

export function useDeleteEquipment() {
  const queryClient = useQueryClient()

  return useMutation(
    ['DELETE_EQUIPMENT'],
    async (equipmentId: number) => {
      await api.delete(`/equipment/${equipmentId}`)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['GET_ALL_EQUIPMENTS'])
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
