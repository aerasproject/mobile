import { useState } from 'react'
import { Link, useRouter } from 'expo-router'

import { AddressDTO } from '@/dtos'

import { useMainAddressStore } from '@/store/main-address-store'

import { useDeleteAddress } from '@/hooks/addresses/use-delete'

import { Badge } from '@/components/badge'
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
  const mainAddress = useMainAddressStore((state) => state.mainAddress)

  const { mutate, isLoading } = useDeleteAddress()

  const [isModalVisible, setModalVisible] = useState(false)

  async function onConfirm() {
    mutate(address.id)

    setModalVisible(false)
    modalRef.current?.toggle()

    router.push('/(client)/(screens)/dashboard/addresses/')
  }

  const description = `Você deseja mesmo excluir o endereço "${address.name}"??`
  const isMainAddress = mainAddress?.id === address.id

  const formattedEnvironments =
    address?.environments?.map((env) => env.name + ', ').join('') || '-'

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
        <S.Content>
          {isMainAddress && <Badge title="Endereço sendo visualizado" />}
          <S.Box>
            <S.Title>{address.name}</S.Title>
            <S.Subtitle>5 equipamentos cadastrados</S.Subtitle>
          </S.Box>
          <S.Wrapper>
            <InfoBox label="Rua" value={address.street} />
            <InfoBox label="Número" value={address.number} />
            <InfoBox label="Complemento" value={address.complement || '-'} />
            <InfoBox label="Bairro" value={address.neighborhood} />
            <InfoBox label="Cidade" value={address.city} />
            <InfoBox label="Estado" value={address.state} />
            <InfoBox label="Ambientes" value={formattedEnvironments} />
          </S.Wrapper>
        </S.Content>
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
              pathname: '/(client)/(screens)/dashboard/address',
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
