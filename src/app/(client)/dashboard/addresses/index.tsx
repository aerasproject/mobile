import { useCallback, useRef, useState } from 'react'
import { Alert, FlatList, Text } from 'react-native'
import { Link, useFocusEffect } from 'expo-router'

import { api } from '@/lib/axios'

import { AddressDTO } from '@/dtos'

import { Loading } from '@/components/loading'
import { Button } from '@/components/button'
import { ModalRefProps } from '@/components/modal-half-screen'
import { AddressCard } from '@/components/address-card'
import { AddressDetailsModal } from '@/components/modals/address-details-modal'

import * as S from './styles'

export default function Addresses() {
  const modalRef = useRef<ModalRefProps>(null)

  const [isLoading, setIsLoading] = useState(false)
  const [addresses, setAddresses] = useState<AddressDTO[]>([])
  const [selectedAddress, setSelectedAddress] = useState<AddressDTO>(
    {} as AddressDTO,
  )

  // TODO: Implementar lógica para definir endereço principal
  // e passar como prop para o componente AddressCard
  // const [isMainAddress, setIsMainAddress] = useState(true)

  function openModal(address: AddressDTO) {
    modalRef.current?.toggle()
    setSelectedAddress(address)
  }

  async function fetchAddresses() {
    try {
      setIsLoading(true)

      const response = await api.get('/client/address')

      setAddresses(response.data)
    } catch (error) {
      Alert.alert('Erro ao buscar endereços')
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchAddresses()
    }, []),
  )

  return (
    <>
      <AddressDetailsModal address={selectedAddress} modalRef={modalRef} />

      <S.Container>
        <Link asChild href="/(client)/dashboard/address/">
          <Button title="Cadastrar novo endereço" />
        </Link>

        {isLoading && <Loading variants="secondary" />}

        {addresses.length ? (
          <FlatList
            data={addresses}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <AddressCard address={item} openModal={() => openModal(item)} />
            )}
          />
        ) : (
          // TODO: Implementar componente para exibir mensagem empty
          <Text>Nenhum endereço cadastrado</Text>
        )}
      </S.Container>
    </>
  )
}
