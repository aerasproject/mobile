import { Feather } from '@expo/vector-icons'

import { AddressDTO } from '@/dtos'

import { Badge } from '@/components/badge'

import { useMainAddressStore } from '@/store/main-address-store'

import { formatNameAddress } from '@/utils/format-name-address'

import * as S from './styles'

type AddressCardProps = {
  address: AddressDTO
  isFavorite?: boolean
  openModal: () => void
}

export function AddressCard({
  address,
  isFavorite = false,
  openModal,
}: AddressCardProps) {
  const mainAddress = useMainAddressStore((state) => state.mainAddress)

  const isMainAddress = mainAddress?.id === address.id
  const fullAddress = formatNameAddress(address)

  return (
    <S.Container isMain={isMainAddress}>
      <S.AvatarCircle>
        <S.AvatarCircleText>RBC</S.AvatarCircleText>
      </S.AvatarCircle>

      <S.StarCircle>
        <S.StartIcon isFavorite={isFavorite} />
      </S.StarCircle>

      <S.Content>
        {isMainAddress && <Badge title="Sendo visualizado" />}

        <S.Wrapper>
          <S.Box>
            <S.AddressName>{address.name}</S.AddressName>
            <S.AddressStreet>{fullAddress}</S.AddressStreet>
          </S.Box>
          <S.BtnIcon onPress={openModal}>
            <Feather name="eye" size={24} color="#ffffff" />
          </S.BtnIcon>
        </S.Wrapper>
      </S.Content>
    </S.Container>
  )
}
