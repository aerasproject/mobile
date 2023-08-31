import { Link } from 'expo-router'

import { Button } from '@/components/button'

import theme from '@/theme'

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
          <Link
            asChild
            href={{
              pathname: '/(onboarding)/sign-up/',
              params: { type: 'client' },
            }}
          >
            <Button title="Criar cadastro como cliente" />
          </Link>
          <Link asChild href="/(onboarding)/sign-in/">
            <Button variants="ghost" title="Iniciar Sessão" />
          </Link>
        </S.Wrapper>
        <Link
          asChild
          href={{
            pathname: '/(onboarding)/sign-up/',
            params: { type: 'worker' },
          }}
        >
          <Button
            variants="primary-outline"
            title="Cadastro prestador de serviço"
          />
        </Link>
      </S.Content>
    </S.Container>
  )
}
