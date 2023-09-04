import { AntDesign } from '@expo/vector-icons'

import theme from '@/theme'

import * as S from './styles'

export default function WorkerChoiceScreen() {
  return (
    <S.Container>
      <S.Header colors={theme.COLORS.LINEAR_GRADIENT}>
        <S.Image alt="Choice Worker" />
        <S.Title>
          O seu cliente ainda está a um passo de você... resolva isso.
        </S.Title>
      </S.Header>
      <S.Content>
        <S.CardContainer variant="primary">
          <S.Wrapper>
            <S.CardTitle variant="primary">Empresa</S.CardTitle>
            <S.CardDescription variant="primary">
              Como empresa você estará apto a prestar serviços de manutenções,
              controle de PMOC, adicionar responsáveis técnicos
            </S.CardDescription>
          </S.Wrapper>
          <AntDesign name="arrowright" size={20} color="white" />
        </S.CardContainer>

        <S.CardContainer variant="secondary">
          <S.Wrapper>
            <S.CardTitle variant="secondary">Responsável Técnico</S.CardTitle>
            <S.CardDescription variant="secondary">
              Como Responsável Técnico você estará apto a lorem ipsum dolor sit
              amet, conetur adipisg elit. Vestibulum at augue ante.
            </S.CardDescription>
          </S.Wrapper>
          <AntDesign name="arrowright" size={20} color="#0051B6" />
        </S.CardContainer>
      </S.Content>
    </S.Container>
  )
}
