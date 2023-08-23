import { Alert } from 'react-native'
import { useCallback, useRef, useState } from 'react'
import { useFocusEffect } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

import { useAddress } from '@/hooks/use-address'

import { AddressDTO } from '@/dtos'

import { api } from '@/lib/axios'

import { AppError } from '@/utils/app-error'
import { formatNameAddress } from '@/utils/format-name-address'

import { Loading } from '@/components/loading'
import { ModalRefProps } from '@/components/modal'
import { AddressesModal } from '@/components/modals/addresses-modal'

import * as S from './styles'

export function DropdownAddresses() {
  const modalRef = useRef<ModalRefProps>(null)

  const { mainAddress, setMainAddress } = useAddress()

  const [isLoading, setIsLoading] = useState(false)
  const [addresses, setAddresses] = useState<AddressDTO[]>([])

  async function fetchAddresses() {
    try {
      setIsLoading(true)

      const response = await api.get('/client/address')

      if (response.data.length) {
        setMainAddress(response.data[0])
      }

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

  function openAddressesModal() {
    modalRef.current?.toggle()
  }

  const fullAddress = formatNameAddress(mainAddress)

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <AddressesModal addresses={addresses} modalRef={modalRef} />

      <S.Container>
        <S.BtnModal onPress={openAddressesModal}>
          <S.MainAddressName>{mainAddress.name}</S.MainAddressName>
          <Ionicons name="ios-chevron-down" size={32} color="#ffffff" />
        </S.BtnModal>

        <S.MainAddress>{fullAddress}</S.MainAddress>
      </S.Container>
    </>
  )
}