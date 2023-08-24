import React from 'react'
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
        <S.Wrapper>
          <Link href="/(onboarding)/sign-up/" asChild>
            <Button title="Criar cadastro como cliente" />
          </Link>
          <Link href="/(onboarding)/sign-in/">Iniciar Sessão</Link>
        </S.Wrapper>
        <Button
          variants="primary-outline"
          title="Cadastro prestador de serviço"
        />
      </S.Content>
    </S.Container>
  )
}
