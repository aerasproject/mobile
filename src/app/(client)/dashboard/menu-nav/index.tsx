import { Href, Link } from 'expo-router'
import { Feather } from '@expo/vector-icons'

import { useAuth } from '@/hooks/use-auth'

import { Button } from '@/components/button'

import * as S from './styles'

type Icon = keyof typeof Feather.glyphMap

export default function MenuNav() {
  const { user, signOut } = useAuth()

  const routes = [
    {
      icon: 'home',
      label: 'Início',
      href: `/(client)/dashboard/home/`,
    },
    {
      icon: 'settings',
      label: 'Equipamentos',
      href: `/(client)/dashboard/home/`,
    },
    {
      icon: 'map-pin',
      label: 'Endereços',
      href: `/(client)/dashboard/addresses/`,
    },
    {
      icon: 'shopping-bag',
      label: 'Aeras Assist',
      href: `/(client)/dashboard/home/`,
    },
    {
      icon: 'message-square',
      label: 'FAQ',
      href: `/(client)/dashboard/home/`,
    },
  ]

  return (
    <S.Container>
      <S.Header>
        <S.Username>{user.name}</S.Username>
        <Button variants="white-outline" title="Ver e editar perfil" />
        <Button variants="white-outline" title="Sair" onPress={signOut} />
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
