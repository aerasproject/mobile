import { Alert } from 'react-native'
import { useCallback, useRef, useState } from 'react'
import { useFocusEffect } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

import { AddressDTO } from '@/dtos'

import { api } from '@/lib/axios'

import { useMainAddressStore } from '@/store/main-address-store'

import { AppError } from '@/utils/app-error'
import { formatNameAddress } from '@/utils/format-name-address'

import { Loading } from '@/components/loading'
import { ModalRefProps } from '@/components/modal-half-screen'
import { AddressesModal } from '@/components/modal-half-screen/addresses-modal'

import * as S from './styles'

export function DropdownAddresses() {
  const modalRef = useRef<ModalRefProps>(null)

  const mainAddress = useMainAddressStore((state) => state.mainAddress)

  const [isLoading, setIsLoading] = useState(false)
  const [addresses, setAddresses] = useState<AddressDTO[]>([])

  function openAddressesModal() {
    modalRef.current?.toggle()
  }

  async function fetchAddresses() {
    try {
      setIsLoading(true)

      const response = await api.get('/client/address')

      setAddresses(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError
      if (isAppError) {
        Alert.alert(error.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchAddresses()
    }, []),
  )

  const fullAddress = formatNameAddress(mainAddress)

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <AddressesModal addresses={addresses} modalRef={modalRef} />

      <S.Container>
        <S.BtnModal onPress={openAddressesModal}>
          <S.MainAddressName>
            {mainAddress?.name || 'Selecione um endereço'}
          </S.MainAddressName>
          <Ionicons name="ios-chevron-down" size={30} color="#ffffff" />
        </S.BtnModal>
        {mainAddress?.name && <S.MainAddress>{fullAddress}</S.MainAddress>}
      </S.Container>
    </>
  )
}
