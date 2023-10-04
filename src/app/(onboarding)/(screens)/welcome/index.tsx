import { Link } from 'expo-router'

import { Button } from '@/components/button'

import { HeaderLinearBlue } from '../../_components/header-linear-blue'

import * as S from './styles'

export default function Welcome() {
  return (
    <S.Container>
      <HeaderLinearBlue title="Você em dia com as obrigações do seu negócio" />
      <S.Content>
        <S.Description>
          Mantenha-se informado, proativo e no controle, garantindo um ambiente
          ideal em todos os aspectos. Simplifique o gerenciamento dos seus
          ar-condicionados com Aeras e aproveite um novo nível de eficiência e
          comodidade.
        </S.Description>
        <Link href="/choice/" asChild>
          <Button title="Começar" />
        </Link>
      </S.Content>
    </S.Container>
  )
}
