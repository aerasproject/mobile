import { Alert } from 'react-native'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { api } from '@/lib/axios'

import { AppError } from '@/utils/app-error'

type DataProps = {
  street: string
  addressId: number
  number: string
  city: string
  state: string
  name: string
  complement?: string
  neighborhood: string
}

export function useUpdateAddress() {
  const queryClient = useQueryClient()

  return useMutation(
    ['UPDATE_ADDRESS'],
    async (data: DataProps) => {
      await api.put(`/client/address/${data.addressId}`, {
        street: data.street,
        number: data.number,
        city: data.city,
        state: data.state,
        name: data.name,
        complement: data.complement,
        neighborhood: data.neighborhood,
      })
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
