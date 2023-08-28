import { useState } from 'react'
import { Link, useRouter } from 'expo-router'

import { AddressDTO } from '@/dtos'

import { useDeleteAddress } from '@/hooks/addresses/use-delete'

import { InfoBox } from '@/components/info-box'
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
  const { mutate, isLoading } = useDeleteAddress()

  const [isModalVisible, setModalVisible] = useState(false)

  async function onConfirm() {
    mutate(address.id)

    setModalVisible(false)
    modalRef.current?.toggle()

    router.push('/(client)/dashboard/addresses/')
  }

  const description = `Você deseja mesmo excluir o endereço "${address.name}"??`

  return (
    <ModalHalfScreen ref={modalRef} height="80%">
      <AlertModal
        description={description}
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        onConfirm={onConfirm}
        isLoading={isLoading}
      />
      <S.Container>
        <S.Header>
          <S.TitleHeader>RBC</S.TitleHeader>
        </S.Header>
        <S.Box>
          <S.Badge>Endereço sendo visualizado</S.Badge>
          <S.Title>{address.name}</S.Title>
          <S.Subtitle>5 equipamentos cadastrados</S.Subtitle>
          <S.Wrapper>
            <InfoBox label="Rua" value={address.street} />
            <InfoBox label="Numero" value={address.number} />
            <InfoBox label="Complemento" value={address.complement || '-'} />
            <InfoBox label="Bairro" value={address.neighborhood} />
            <InfoBox label="Cidade" value={address.city} />
            <InfoBox label="Estado" value={address.state} />
            {/* <InfoBox
                label="Ambientes"
                value={
                  address.environments.map((env) => env.name + ', ') || '-'
                }
              /> */}
          </S.Wrapper>
        </S.Box>
        <S.ButtonsWrapper>
          <Button
            title="Excluir"
            variants="danger-outline"
            isLoading={isLoading}
            onPress={() => setModalVisible(true)}
          />
          <Link
            asChild
            href={{
              pathname: '/(client)/dashboard/address',
              params: { addressId: address.id },
            }}
          >
            <Button title="Editar" isLoading={isLoading} />
          </Link>
        </S.ButtonsWrapper>
      </S.Container>
    </ModalHalfScreen>
  )
}
