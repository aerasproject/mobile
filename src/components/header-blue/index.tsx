import * as S from './styles'

type HeaderBlueProps = {
  height: number
  title?: string
  subtitle?: string
}

export function HeaderBlue({ height, title, subtitle }: HeaderBlueProps) {
  return (
    <S.Container height={height}>
      {!!subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
      {!!title && <S.Title>{title}</S.Title>}
    </S.Container>
  )
}
