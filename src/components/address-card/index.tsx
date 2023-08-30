import { Feather } from '@expo/vector-icons'

import { AddressDTO } from '@/dtos'

import { Badge } from '@/components/badge'

import { formatNameAddress } from '@/utils/format-name-address'

import * as S from './styles'

type AddressCardProps = {
  address: AddressDTO
  isMain?: boolean
  openModal: () => void
}

export function AddressCard({
  address,
  isMain = false,
  openModal,
}: AddressCardProps) {
  const fullAddress = formatNameAddress(address)

  return (
    <S.Container isMain={isMain}>
      {!!isMain && <Badge title="Manutenção em dia" />}

      <S.AvatarCircle>
        <S.AvatarCircleText>RBC</S.AvatarCircleText>
      </S.AvatarCircle>
      <S.StarCircle>
        <Feather name="star" size={24} color="#00ECA0" />
      </S.StarCircle>
      <S.Content>
        <S.AddressWrap>
          <S.AddressName>{address.name}</S.AddressName>
          <S.AddressStreet>{fullAddress}</S.AddressStreet>
        </S.AddressWrap>
        <S.BtnIcon onPress={openModal}>
          <Feather name="eye" size={24} color="#ffffff" />
        </S.BtnIcon>
      </S.Content>
    </S.Container>
  )
}
