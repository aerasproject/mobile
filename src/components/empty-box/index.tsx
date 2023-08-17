import { Href, Link } from 'expo-router'

import { Button } from '@/components/button'

import * as S from './styles'

type EmptyBoxProps = {
  icon: React.ReactElement
  title: string
  href: Href<string>
}

export function EmptyBox({ icon, title, href }: EmptyBoxProps) {
  return (
    <S.Container>
      {icon}
      <S.Title>{title}</S.Title>
      <Link href={href} asChild>
        <Button title="Cadastrar novo" />
      </Link>
    </S.Container>
  )
}
