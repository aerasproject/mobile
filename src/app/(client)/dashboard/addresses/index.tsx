import { useCallback, useRef, useState } from 'react'
import { Alert, FlatList, Text } from 'react-native'
import { useFocusEffect } from 'expo-router'

import { api } from '@/lib/axios'
import { AddressDTO } from '@/dtos/address-dto'

import { Button } from '@/components/button'
import { AddressCard } from '@/components/address-card'
import { Modal, ModalRef } from '@/components/modal'
import { AddressDetails } from '@/components/address-details'

import * as S from './styles'

export default function Addresses() {
  const modalRef = useRef<ModalRef>(null)

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
      <Modal ref={modalRef} height="75%">
        <AddressDetails address={selectedAddress} />
      </Modal>

      <S.Container>
        <Button title="Cadastrar novo endereço" />

        {isLoading && <Text>Carregando...</Text>}

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
