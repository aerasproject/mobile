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
            params: {
              name: address.name,
              street: address.street,
              number: address.number,
              complement: address.complement || '',
              neighborhood: address.neighborhood,
              city: address.city,
              state: address.state,
            },
          }}
        >
          <Button title="Editar" />
        </Link>
      </S.BtnWrapper>
    </S.Container>
  )
}
