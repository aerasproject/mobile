import { AddressDTO } from '@/dtos/address-dto'

import { Button } from '../button'

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
  const { name, number } = address

  const fullAddress = name ? `${name}, ${number}` : 'Endereço sem nome'

  return (
    <S.Container isMain={isMain}>
      {!!isMain && <S.Badge>Sendo visualizado</S.Badge>}

      <S.Name>{address.name}</S.Name>
      <S.Street>{fullAddress}</S.Street>

      <Button title="Ver detalhes" onPress={openModal} />
    </S.Container>
  )
}
