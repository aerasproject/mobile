import * as S from './styles'

type InfoBoxProps = {
  label: string
  value: string
}

export function InfoBox({ label, value }: InfoBoxProps) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Value>{value}</S.Value>
    </S.Container>
  )
}
