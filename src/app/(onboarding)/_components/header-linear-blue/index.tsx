import * as S from './styles'

type HeaderProps = {
  title?: string
  children?: React.ReactNode
}

export function HeaderLinearBlue({ title, children }: HeaderProps) {
  return (
    <>
      <S.Container>
        {!!title && <S.Title>{title}</S.Title>}
        {!!children && <S.Content>{children}</S.Content>}
      </S.Container>
    </>
  )
}
