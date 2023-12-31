import { Feather } from '@expo/vector-icons'

import { EquipmentDTO } from '@/dtos'

import { Badge } from '@/components/badge'

import * as S from './styles'

type EquipmentCardProps = {
  equipment: EquipmentDTO
  openModal: () => void
}

export function EquipmentCard({ equipment, openModal }: EquipmentCardProps) {
  return (
    <S.Container>
      <S.Name>{equipment.name}</S.Name>
      <S.Wrapper>
        <Badge title="TAG5712" />
        <S.PMOCCode>
          <S.PMOCCodeLabel>Código PMOC</S.PMOCCodeLabel>
          <S.PMOCCodeText>123456</S.PMOCCodeText>
        </S.PMOCCode>
        <S.BtnIcon onPress={openModal}>
          <Feather name="eye" size={24} color="#ffffff" />
        </S.BtnIcon>
      </S.Wrapper>
    </S.Container>
  )
}
