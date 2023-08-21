import { Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'

import { api } from '@/lib/axios'

import { AddressDTO } from '@/dtos/address-dto'

import { AddressForm } from '@/components/address-form'

import * as S from './styles'

export default function Address() {
  const { addressId } = useLocalSearchParams()

  const [isLoading, setIsLoading] = useState(false)
  const [address, setAddress] = useState<AddressDTO | null>(null)

  async function fetchAddress() {
    try {
      setIsLoading(true)

      const response = await api.get(`/client/address/${addressId}`)

      setAddress(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchAddress()
  }, [addressId])

  if (isLoading) {
    return <Text>Carregando...</Text>
  }

  return (
    <S.Container>
      <AddressForm initialData={address} />
    </S.Container>
  )
}
