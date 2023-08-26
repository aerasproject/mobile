import { useState } from 'react'
import { Link, useRouter } from 'expo-router'

import { AddressDTO } from '@/dtos'

import { useDeleteAddress } from '@/hooks/addresses/use-delete'

import { Button } from '@/components/button'
import { AlertModal } from '@/components/modals/alert-modal'
import { ModalHalfScreen, ModalRefProps } from '@/components/modal-half-screen'

import * as S from './styles'

type AddressDetailsModalProps = {
  address: AddressDTO
  modalRef: React.RefObject<ModalRefProps>
}

export function AddressDetailsModal({
  address,
  modalRef,
}: AddressDetailsModalProps) {
  const router = useRouter()
  const deleteAddress = useDeleteAddress()

  const [isModalVisible, setModalVisible] = useState(false)

  async function onConfirm() {
    deleteAddress.mutate(address.id)

    setModalVisible(false)
    modalRef.current?.toggle()

    router.push('/(client)/dashboard/addresses/')
  }

  const description = `Você deseja mesmo excluir o endereço "${address.name}"??`

  return (
    <ModalHalfScreen ref={modalRef} height="75%">
      <AlertModal
        description={description}
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        onConfirm={onConfirm}
      />
      <S.Container>
        <S.Header>
          <S.TitleHeader>RBC</S.TitleHeader>
        </S.Header>
        <S.Content>
          <S.Badge>Endereço sendo visualizado</S.Badge>
          <S.Title>{address.name}</S.Title>
          <S.Subtitle>5 equipamentos cadastrados</S.Subtitle>
          <S.Wrapper>
            <S.Box>
              <S.Label>Rua</S.Label>
              <S.Text>{address.street}</S.Text>
            </S.Box>
            <S.Box>
              <S.Label>Numero</S.Label>
              <S.Text>{address.number}</S.Text>
            </S.Box>
            <S.Box>
              <S.Label>Complemento</S.Label>
              <S.Text>{address.complement}</S.Text>
            </S.Box>
            <S.Box>
              <S.Label>Bairro</S.Label>
              <S.Text>{address.neighborhood}</S.Text>
            </S.Box>
            <S.Box>
              <S.Label>Cidade</S.Label>
              <S.Text>{address.city}</S.Text>
            </S.Box>
            <S.Box>
              <S.Label>Estado</S.Label>
              <S.Text>{address.state}</S.Text>
            </S.Box>
          </S.Wrapper>
        </S.Content>
        <S.BtnWrapper>
          <Button
            title="Excluir"
            variants="danger-outline"
            onPress={() => setModalVisible(true)}
          />
          <Link
            asChild
            href={{
              pathname: '/(client)/dashboard/address',
              params: { addressId: address.id },
            }}
          >
            <Button title="Editar" />
          </Link>
        </S.BtnWrapper>
      </S.Container>
    </ModalHalfScreen>
  )
}
