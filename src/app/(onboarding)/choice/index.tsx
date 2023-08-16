import React from 'react'
import { Text } from 'react-native'
import { Link } from 'expo-router'

import theme from '@/theme'

import { Button } from '@/components/button'

import * as S from './styles'

export default function ChoiceScreen() {
  return (
    <S.Container>
      <S.Header colors={theme.COLORS.LINEAR_GRADIENT}>
        <S.Image alt="Aeras Logo" />
        <S.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus
          maximus dui mollis consectetur.
        </S.Text>
      </S.Header>
      <S.Content>
        <S.WrapperButtons>
          <Link href="/(onboarding)/sign-up/" asChild>
            <Button title="Criar cadastro como cliente" />
          </Link>
          <Link href="/" asChild>
            <Text
              style={{
                textAlign: 'center',
                color: theme.COLORS.BRAND,
              }}
            >
              Iniciar Sessão
            </Text>
          </Link>
        </S.WrapperButtons>

        <Button type="primary-outline" title="Cadastro prestador de serviço" />
      </S.Content>
    </S.Container>
  )
}
