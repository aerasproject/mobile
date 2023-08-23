import { Link } from 'expo-router'

import { EquipmentDTO } from '@/dtos'

import { useAddress } from '@/hooks/use-address'

import { Button } from '@/components/button'
import { Modal, ModalRefProps } from '@/components/modal'

import * as S from './styles'

type EquipmentDetailsModalProps = {
  equipment: EquipmentDTO
  modalRef: React.RefObject<ModalRefProps>
}

export function EquipmentDetailsModal({
  equipment,
  modalRef,
}: EquipmentDetailsModalProps) {
  const { mainAddress } = useAddress()

  return (
    <Modal ref={modalRef} height="75%">
      <S.Container>
        <S.Header>
          <S.TitleHeader>{mainAddress.name}</S.TitleHeader>
        </S.Header>

        <S.Content>
          <S.Title>{equipment.name}</S.Title>
          {!!equipment.tag && <S.Badge>{equipment.tag}</S.Badge>}

          {/* TODO: Add um divider style */}
          {/* DIVIDER */}

          <S.Wrapper>
            <S.Box>
              <S.Label>Marca</S.Label>
              <S.Text>{equipment.brand}</S.Text>
            </S.Box>
            <S.Box>
              <S.Label>Model</S.Label>
              <S.Text>{equipment.model || '-'}</S.Text>
            </S.Box>
            <S.Box>
              <S.Label>Voltagem</S.Label>
              <S.Text>{equipment.voltage}</S.Text>
            </S.Box>
            <S.Box>
              <S.Label>Tipo</S.Label>
              <S.Text>{equipment.type}</S.Text>
            </S.Box>
            <S.Box>
              <S.Label>Capacidade</S.Label>
              <S.Text>{equipment.capacity}</S.Text>
            </S.Box>
            <S.Box>
              <S.Label>Ambiente</S.Label>
              <S.Text>{equipment.environment?.name || 'Sem ambiente'}</S.Text>
            </S.Box>
          </S.Wrapper>
        </S.Content>

        <S.BtnWrapper>
          <Button variants="danger-outline" title="Excluir" />
          <Link
            asChild
            href={{
              pathname: '/(client)/dashboard/equipment',
              params: { equipmentId: equipment.id },
            }}
          >
            <Button title="Editar" />
          </Link>
        </S.BtnWrapper>
      </S.Container>
    </Modal>
  )
}
