import { useRef } from 'react'

import { Button } from '@/components/button'
import { Badge } from '@/components/badge'
import { ModalRefProps } from '@/components/modal-half-screen'
import { AddressAndEquipmentDetailsModal } from '@/components/modal-half-screen/address-and-equipment-details-modal'

import { EquipmentDTO } from '@/dtos'

import * as S from './styles'

type EquipmentHomeProps = {
  equipment: EquipmentDTO
}

export function EquipmentHome({ equipment }: EquipmentHomeProps) {
  const equipmentDetailsModalRef = useRef<ModalRefProps>(null)

  function openEquipmentDetailsModal() {
    equipmentDetailsModalRef.current?.toggle()
  }

  return (
    <>
      <AddressAndEquipmentDetailsModal
        equipment={equipment}
        modalRef={equipmentDetailsModalRef}
      />

      <S.Container>
        <S.ImageAC />
        <S.EnvironmentName>
          {equipment.environment?.name || 'Sem ambiente'}
        </S.EnvironmentName>
        <S.EquipmentName>{equipment.name}</S.EquipmentName>
        <S.EquipmentBrand>{equipment.brand}</S.EquipmentBrand>
        <Badge title="Manutenção em dia" />
        <Button
          style={{ marginTop: 16 }}
          variants="white-outline"
          title="Mais informações"
          onPress={openEquipmentDetailsModal}
        />
      </S.Container>
    </>
  )
}
