import { useState } from 'react'
import { Link, useRouter } from 'expo-router'

import { EquipmentDTO } from '@/dtos'

import { useAddress } from '@/hooks/use-address'
import { useDeleteEquipment } from '@/hooks/equipments/use-delete'

import { Button } from '@/components/button'
import { Badge } from '@/components/badge'
import { InfoBox } from '@/components/info-box'
import { AlertModal } from '@/components/modals/alert-modal'
import { AvatarCircle } from '@/components/avatar-circle'
import { ModalHalfScreen, ModalRefProps } from '@/components/modal-half-screen'

import * as S from './styles'

type EquipmentDetailsModalProps = {
  equipment: EquipmentDTO
  modalRef: React.RefObject<ModalRefProps>
}

export function EquipmentDetailsModal({
  equipment,
  modalRef,
}: EquipmentDetailsModalProps) {
  const router = useRouter()
  const { mainAddress } = useAddress()
  const { mutate, isLoading } = useDeleteEquipment()

  const [isModalVisible, setModalVisible] = useState(false)

  async function onConfirm() {
    mutate(equipment.id)

    setModalVisible(false)
    modalRef.current?.toggle()

    router.push('/(client)/dashboard/equipments')
  }

  const description = `Você deseja mesmo excluir o equipamento “${equipment.name}”, cadastrado no ambiente “${equipment.environment?.name}”?`

  return (
    <ModalHalfScreen ref={modalRef} height="75%">
      <AlertModal
        description={description}
        onConfirm={onConfirm}
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        isLoading={isLoading}
      />
      <S.Container>
        <S.Header>
          <AvatarCircle title="RBC" />
          <S.HeaderTitle>{mainAddress.name}</S.HeaderTitle>
        </S.Header>
        <S.Box>
          <S.BoxHeader>
            <S.EquipmentName>{equipment.name}</S.EquipmentName>
            <Badge title="TAG5712" />
          </S.BoxHeader>
          <S.Wrapper>
            <InfoBox label="Marca" value={equipment.brand} />
            <InfoBox label="Modelo" value={equipment.model || '-'} />
            <InfoBox label="Voltagem" value={`${equipment.voltage}V`} />
            <InfoBox label="Tipo" value={equipment.type} />
            <InfoBox label="Capacidade" value={equipment.capacity} />
            <InfoBox
              label="Ambiente"
              value={equipment.environment?.name || 'Sem ambiente'}
            />
          </S.Wrapper>
        </S.Box>
        <S.ButtonsWrapper>
          <Button
            title="Excluir"
            variants="danger-outline"
            onPress={() => setModalVisible(true)}
          />
          <Link
            asChild
            href={{
              pathname: '/(client)/dashboard/equipment',
              params: { equipmentId: equipment.id },
            }}
          >
            <Button title="Editar" />
          </Link>
        </S.ButtonsWrapper>
      </S.Container>
    </ModalHalfScreen>
  )
}
