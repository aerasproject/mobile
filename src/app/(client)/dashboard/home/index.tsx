import { useCallback, useRef, useState } from 'react'
import { useFocusEffect } from 'expo-router'
import { Alert, Pressable } from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons'

import { api } from '@/lib/axios'

import { AddressDTO } from '@/dtos/address-dto'

import { Loading } from '@/components/loading'
import { ModalRef } from '@/components/modal'
import { EmptyBox } from '@/components/empty-box'
import { AddressesModal } from '@/components/modals/addresses-modal'

import * as S from './styles'

export default function Dashboard() {
  const modalRef = useRef<ModalRef>(null)

  const [addresses, setAddresses] = useState<AddressDTO[]>([])
  const [isLoading, setIsLoading] = useState(false)

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

  function openAddressesModal() {
    modalRef.current?.toggle()
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <AddressesModal addresses={addresses} modalRef={modalRef} />
      <S.Container>
        <S.Header>
          {!addresses.length && (
            <EmptyBox
              title="Nenhum endereço cadastrado"
              href="/(client)/dashboard/address/"
              icon={<Feather name="map-pin" size={24} color="#0051B6" />}
            />
          )}
          <Pressable onPress={openAddressesModal}>
            <Ionicons name="ios-chevron-down" size={32} color="#ffffff" />
          </Pressable>
        </S.Header>
        <S.Content>
          <S.Text>
            O planejamento e informações de manutenção dos equipamentos vão
            aparecer aqui
          </S.Text>
        </S.Content>
      </S.Container>
    </>
  )
}
