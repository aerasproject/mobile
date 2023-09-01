import { Modal } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Href, Link, usePathname } from 'expo-router'

import { useAuth } from '@/hooks/use-auth'
import { useMenu } from '@/hooks/use-menu'

import { Button } from '@/components/button'

import * as S from './styles'

type Icon = keyof typeof Feather.glyphMap

export function MenuNav() {
  const pathname = usePathname()
  const { user } = useAuth()
  const { isOpenMenu, setIsOpenMenu } = useMenu()

  const routes = [
    {
      icon: 'home',
      label: 'Início',
      href: `/(client)/dashboard/home/`,
      active: pathname === '/dashboard/home',
    },
    {
      icon: 'settings',
      label: 'Equipamentos',
      href: `/(client)/dashboard/equipments/`,
      active: pathname === '/dashboard/equipments',
    },
    {
      icon: 'map-pin',
      label: 'Endereços',
      href: `/(client)/dashboard/addresses/`,
      active: pathname === '/dashboard/addresses',
    },
    {
      icon: 'shopping-bag',
      label: 'Aeras Assist',
      href: `/(client)/dashboard/aeras-assist/`,
      active: pathname === '/dashboard/aeras-assist',
    },
    {
      icon: 'message-square',
      label: 'FAQ',
      href: `/(client)/dashboard/faq/`,
      active: pathname === '/dashboard/faq',
    },
    {
      icon: 'bell',
      label: 'Notificações',
      href: `/(client)/dashboard/notifications/`,
      active: pathname === '/dashboard/notifications',
    },
  ]

  return (
    <Modal animationType="slide" transparent={true} visible={isOpenMenu}>
      <S.Container>
        <S.Header>
          <S.CloseIcon onPress={() => setIsOpenMenu(false)} />
          <S.Username>{user.name}</S.Username>
          <Link
            asChild
            href="/(client)/dashboard/profile/"
            onPress={() => setIsOpenMenu(false)}
          >
            <Button variants="white-outline" title="Ver e editar perfil" />
          </Link>
        </S.Header>
        <S.Content>
          {routes.map((route) => (
            <Link asChild href={route.href as Href<string>} key={route.label}>
              <S.ItemNav onPress={() => setIsOpenMenu(false)}>
                <Feather
                  size={32}
                  name={route.icon as Icon}
                  color={route.active ? '#0051B6' : '#50555C'}
                />
                <S.ItemTitle isActive={route.active}>{route.label}</S.ItemTitle>
              </S.ItemNav>
            </Link>
          ))}
        </S.Content>
      </S.Container>
    </Modal>
  )
}
