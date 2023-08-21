import { Link } from 'expo-router'

import { AddressDTO } from '@/dtos/address-dto'

import { Button } from '@/components/button'

import * as S from './styles'

type AddressDetailsProps = {
  address: AddressDTO
}

export function AddressDetails({ address }: AddressDetailsProps) {
  return (
    <S.Container>
      <S.Header>
        <S.TitleHeader>RBC</S.TitleHeader>
      </S.Header>

      <S.Content>
        <S.Badge>Endereço sendo visualizado</S.Badge>

        <S.Title>{address.name}</S.Title>
        <S.Subtitle>5 equipamentos cadastrados</S.Subtitle>

        {/* TODO: Add um divider style */}
        {/* DIVIDER */}

        <S.Wrapper>
          <S.Box>
            <S.Label>Rua</S.Label>
            <S.Text>{address.street}</S.Text>
          </S.Box>

          <S.Box>
            <S.Label>Numero</S.Label>
            <S.Text>{address.number}</S.Text>
          </S.Box>

          <S.Box>
            <S.Label>Complemento</S.Label>
            <S.Text>{address.complement}</S.Text>
          </S.Box>

          <S.Box>
            <S.Label>Bairro</S.Label>
            <S.Text>{address.neighborhood}</S.Text>
          </S.Box>

          <S.Box>
            <S.Label>Cidade</S.Label>
            <S.Text>{address.city}</S.Text>
          </S.Box>

          <S.Box>
            <S.Label>Estado</S.Label>
            <S.Text>{address.state}</S.Text>
          </S.Box>
        </S.Wrapper>
      </S.Content>

      <S.BtnWrapper>
        <Button variants="primary-outline" title="Excluir" />
        <Link
          asChild
          href={{
            pathname: '/(client)/dashboard/address',
            params: { addressId: address.id },
          }}
        >
          <Button title="Editar" />
        </Link>
      </S.BtnWrapper>
    </S.Container>
  )
}
