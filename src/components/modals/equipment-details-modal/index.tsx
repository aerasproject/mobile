import { useState } from 'react'
import { Alert } from 'react-native'
import { Link, useRouter } from 'expo-router'

import { EquipmentDTO } from '@/dtos'

import { useAddress } from '@/hooks/use-address'
import { useDeleteEquipment } from '@/hooks/equipments/use-delete'

import { Button } from '@/components/button'
import { AlertModal } from '@/components/modals/alert-modal'
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
  const deleteEquipment = useDeleteEquipment()

  const [isModalVisible, setModalVisible] = useState(false)

  async function onConfirm() {
    try {
      deleteEquipment.mutate(equipment.id)

      setModalVisible(false)
      modalRef.current?.toggle()

      router.push('/(client)/dashboard/equipments')
    } catch (error) {
      console.log(error)
      Alert.alert('Erro ao excluir equipamento')
    }
  }

  const description = `Você deseja mesmo excluir o equipamento “${equipment.name}”, cadastrado no ambiente “${equipment.environment?.name}”?`

  return (
    <ModalHalfScreen ref={modalRef} height="75%">
      <AlertModal
        description={description}
        onConfirm={onConfirm}
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />

      <S.Container>
        <S.Header>
          <S.TitleHeader>{mainAddress.name}</S.TitleHeader>
        </S.Header>
        <S.Content>
          <S.Title>{equipment.name}</S.Title>
          {!!equipment.tag && <S.Badge>{equipment.tag}</S.Badge>}
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
        </S.BtnWrapper>
      </S.Container>
    </ModalHalfScreen>
  )
}
