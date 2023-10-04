import { Link } from 'expo-router'

import { Button } from '@/components/button'

import { HeaderLinearBlue } from '../../_components/header-linear-blue'

import * as S from './styles'

export default function ChoiceScreen() {
  return (
    <S.Container>
      <HeaderLinearBlue>
        <S.Image alt="Aeras Logo" />
        <S.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus
          maximus dui mollis consectetur.
        </S.Text>
      </HeaderLinearBlue>
      <S.Content>
        <S.Wrapper>
          <Link
            asChild
            href={{
              pathname: '/(onboarding)/(screens)/sign-up',
              params: { type: 'client' },
            }}
          >
            <Button title="Criar cadastro como cliente" />
          </Link>
          <Link asChild href="/(onboarding)/(screens)/sign-in/">
            <Button variants="ghost" title="Iniciar Sessão" />
          </Link>
        </S.Wrapper>
        <Link
          asChild
          href={{
            pathname: '/(onboarding)/(screens)/sign-up/',
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
