import { Link } from 'expo-router'
import { FlatList } from 'react-native-gesture-handler'
import { Ionicons, Feather } from '@expo/vector-icons'

import { AddressDTO } from '@/dtos'

import { useMainAddressStore } from '@/store/main-address-store'

import {
  storageMainAddressSave,
  storageMainAddressRemove,
} from '@/storage/storage-main-address'

import { Button } from '@/components/button'
import { ModalHalfScreen, ModalRefProps } from '@/components/modal-half-screen'

import * as S from './styles'

type AddressesModalProps = {
  addresses: AddressDTO[]
  modalRef: React.RefObject<ModalRefProps>
}

export function AddressesModal({ addresses, modalRef }: AddressesModalProps) {
  const setMainAddress = useMainAddressStore((state) => state.setMainAddress)

  async function handleSelectAddress(address: AddressDTO) {
    await storageMainAddressRemove()
    await storageMainAddressSave(address)

    setMainAddress(address)

    modalRef.current?.toggle()
  }

  return (
    <ModalHalfScreen ref={modalRef} height="85%">
      <S.Container>
        <S.Box>
          <Feather name="home" size={32} color="#00ECA0" />
          <S.Title>Endereços Cadastrados</S.Title>
        </S.Box>
        <FlatList
          data={addresses}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <S.AddressItemContainer onPress={() => handleSelectAddress(item)}>
              <S.AddressItemTitle>{item.name}</S.AddressItemTitle>
              <Ionicons name="ios-chevron-forward" size={24} color="black" />
            </S.AddressItemContainer>
          )}
        />

        <Link asChild href="/(client)/(screens)/dashboard/address/">
          <Button title="Cadastrar novo endereço" />
        </Link>
      </S.Container>
    </ModalHalfScreen>
  )
}
