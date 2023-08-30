import * as S from './styles'

export type BadgeProps = {
  title: string
  variants?: 'success' | 'warning' | 'danger'
}

export function Badge({ title, variants = 'success' }: BadgeProps) {
  return (
    <S.Container variants={variants}>
      <S.Title variants={variants}>{title}</S.Title>
    </S.Container>
  )
}
