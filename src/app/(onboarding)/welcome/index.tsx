import { Link } from 'expo-router'

import theme from '@/theme'

import { Button } from '@/components/button'

import * as S from './styles'

export default function Welcome() {
  return (
    <S.Container>
      <S.Header colors={theme.COLORS.LINEAR_GRADIENT}>
        <S.Title>Você em dia com as obrigações do seu negócio</S.Title>
      </S.Header>
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
