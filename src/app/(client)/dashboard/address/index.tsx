import { useLocalSearchParams } from 'expo-router'

import { AddressForm } from '@/components/address-form'

import * as S from './styles'

export default function Address() {
  const address = useLocalSearchParams<{
    name: string
    street: string
    number: string
    postalCode?: string
    complement?: string
    neighborhood: string
    city: string
    state: string
  }>()

  return (
    <S.Container>
      <AddressForm initialData={address} />
    </S.Container>
  )
}
