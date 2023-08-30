import * as S from './styles'

export type AvatarCircleProps = {
  title: string
  size?: 'sm' | 'md' | 'lg'
}

export function AvatarCircle({ title, size = 'md' }: AvatarCircleProps) {
  return (
    <S.Container size={size}>
      <S.Title size={size}>{title}</S.Title>
    </S.Container>
  )
}
