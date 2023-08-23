import { EquipmentDTO } from '@/dtos'

import { Button } from '@/components/button'

import * as S from './styles'

type EquipmentCardProps = {
  equipment: EquipmentDTO
  openModal: () => void
}

export function EquipmentCard({ equipment, openModal }: EquipmentCardProps) {
  return (
    <S.Container>
      <S.Name>{equipment.name}</S.Name>
      <S.Badge>{equipment.tag}</S.Badge>
      <Button title="Ver detalhes" onPress={openModal} />
    </S.Container>
  )
}
