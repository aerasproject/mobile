import { AddressDTO } from '@/dtos/address-dto'

import * as S from './styles'

type AddressCardProps = {
  address: AddressDTO
  isMain?: boolean
}

export function AddressCard({ address, isMain = false }: AddressCardProps) {
  const { name, number } = address

  const fullAddress = name ? `${name}, ${number}` : 'Endereço sem nome'

  return (
    <S.Container isMain={isMain}>
      {!!isMain && <S.Badge>Sendo visualizado</S.Badge>}
      <S.Name>{address.name}</S.Name>
      <S.Street>{fullAddress}</S.Street>
    </S.Container>
  )
}
