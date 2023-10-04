import { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

import { api } from '@/lib/axios'

import { AppError } from '@/utils/app-error'

import { AddressDTO } from '@/dtos'

import { Loading } from '@/components/loading'

import { AddressForm } from '@/app/(client)/_components/address-form'

import * as S from './styles'

export default function Address() {
  const { addressId } = useLocalSearchParams()

  const [isLoading, setIsLoading] = useState(false)
  const [address, setAddress] = useState<AddressDTO | null>(null)

  // TODO: I try to use useQuery from react-query, but I don't know how to use it
  // using this logic, I can't use the useQuery hook
  async function fetchAddress() {
    try {
      setIsLoading(true)

      if (!addressId) {
        return setAddress(null)
      }

      const response = await api.get(`/client/address/${addressId}`)

      setAddress(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError
      if (isAppError) {
        Alert.alert(error.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchAddress()
  }, [addressId])

  if (isLoading) {
    return <Loading variants="secondary" />
  }

  return (
    <S.Container>
      <AddressForm initialData={address} />
    </S.Container>
  )
}
