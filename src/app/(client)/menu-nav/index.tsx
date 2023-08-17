import { Href, Link } from 'expo-router'
import { Feather } from '@expo/vector-icons'

import { Button } from '@/components/button'

import * as S from './styles'

type Icon = keyof typeof Feather.glyphMap

export default function MenuNav() {
  const routes = [
    {
      icon: 'home',
      label: 'Início',
      href: `/(client)/dashboard/`,
    },
    {
      icon: 'settings',
      label: 'Equipamentos',
      href: `/(client)/dashboard/`,
    },
    {
      icon: 'map-pin',
      label: 'Endereços',
      href: `/(client)/dashboard/`,
    },
    {
      icon: 'shopping-bag',
      label: 'Aeras Assist',
      href: `/(client)/dashboard/`,
    },
    {
      icon: 'message-square',
      label: 'FAQ',
      href: `/(client)/dashboard/`,
    },
  ]

  return (
    <S.Container>
      <S.Header>
        <S.Username>Rodrigo Polim</S.Username>
        <Button variants="white-outline" title="Ver e editar perfil" />
      </S.Header>
      <S.Content>
        {routes.map((route) => (
          <Link asChild href={route.href as Href<string>} key={route.label}>
            <S.ItemNav>
              <Feather name={route.icon as Icon} size={32} color="#0051B6" />
              <S.ItemTitle>{route.label}</S.ItemTitle>
            </S.ItemNav>
          </Link>
        ))}
      </S.Content>
    </S.Container>
  )
}
