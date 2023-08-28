import { Alert } from 'react-native'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { api } from '@/lib/axios'

import { AppError } from '@/utils/app-error'

type DataProps = {
  brand: string
  capacity: string
  name: string
  type: string
  voltage: string
  environmentId: number
  addressId: number
  equipmentId: number
}

export function useUpdateEquipment() {
  const queryClient = useQueryClient()

  return useMutation(
    ['UPDATE_EQUIPMENT'],
    async (data: DataProps) => {
      await api.put(`/equipment/${data.equipmentId}`, {
        brand: data.brand,
        capacity: data.capacity,
        name: data.name,
        type: data.type,
        voltage: data.voltage,
        addressId: data.addressId,
        environmentId: data.environmentId,
      })
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
