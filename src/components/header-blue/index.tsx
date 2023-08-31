import { Badge } from '@/components/badge'

import * as S from './styles'

type HeaderBlueProps = {
  title?: string
  subtitle?: string
  badge?: string
}

export function HeaderBlue({ title, subtitle, badge }: HeaderBlueProps) {
  return (
    <S.Container>
      {!!subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
      {!!title && <S.Title>{title}</S.Title>}
      {!!badge && <Badge title={badge} />}
    </S.Container>
  )
}
