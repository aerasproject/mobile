import { useAddress } from '@/hooks/use-address'

import { EquipmentDTO } from '@/dtos'

import { Modal, ModalRef } from '@/components/modal'

import * as S from './styles'

type AddressAndEquipmentDetailsModalProps = {
  equipment: EquipmentDTO
  modalRef: React.RefObject<ModalRef>
}

export function AddressAndEquipmentDetailsModal({
  equipment,
  modalRef,
}: AddressAndEquipmentDetailsModalProps) {
  const { mainAddress } = useAddress()

  return (
    <Modal ref={modalRef} height="75%">
      <S.Container>
        {/* ADDRESS SECTION */}
        <S.Title>ADDRESS</S.Title>
        <S.Text>{mainAddress.street}</S.Text>
        <S.Text>{mainAddress.street}</S.Text>

        {/* EQUIPMENT SECTION */}
        <S.Title>EQUIPMENT</S.Title>
        <S.Text>{equipment.name}</S.Text>
        <S.Text>{equipment.model}</S.Text>
        <S.Text>{equipment.capacity}</S.Text>
        <S.Text>{equipment.type}</S.Text>
        <S.Text>{equipment.voltage}</S.Text>
      </S.Container>
    </Modal>
  )
}
