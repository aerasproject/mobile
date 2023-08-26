import { Alert } from 'react-native'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { api } from '@/lib/axios'

import { AppError } from '@/utils/app-error'

type DataProps = {
  userId: number
  street: string
  number: string
  city: string
  state: string
  name: string
  complement?: string
  neighborhood: string
}

export function useCreateAddress() {
  const queryClient = useQueryClient()

  return useMutation(
    ['CREATE_ADDRESS'],
    async (data: DataProps) => {
      const response = await api.post('/client/address', {
        userId: data.userId,
        street: data.street,
        number: data.number,
        city: data.city,
        state: data.state,
        name: data.name,
        complement: data.complement,
        neighborhood: data.neighborhood,
      })

      return response.data
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
