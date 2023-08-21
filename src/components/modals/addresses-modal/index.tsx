import { FlatList } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

import { AddressDTO } from '@/dtos/address-dto'

import { Button } from '@/components/button'
import { Modal, ModalRef } from '@/components/modal'

import * as S from './styles'

type AddressesModalProps = {
  addresses: AddressDTO[]
  modalRef: React.RefObject<ModalRef>
}

export function AddressesModal({ addresses, modalRef }: AddressesModalProps) {
  return (
    <Modal ref={modalRef} height="85%">
      <S.Container>
        <S.Title>Endereços</S.Title>
        <FlatList
          data={addresses}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <S.AddressItemContainer onPress={() => modalRef.current?.toggle()}>
              <S.AddressItemTitle>{item.name}</S.AddressItemTitle>
              <Ionicons name="ios-chevron-forward" size={24} color="black" />
            </S.AddressItemContainer>
          )}
        />

        <Link asChild href="/(client)/dashboard/address/">
          <Button title="Cadastrar novo endereço" />
        </Link>
      </S.Container>
    </Modal>
  )
}
