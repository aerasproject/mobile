import { Modal } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Href, Link, usePathname } from 'expo-router'

import { useAuth } from '@/hooks/use-auth'

import { Button } from '@/components/button'

import * as S from './styles'

type Icon = keyof typeof Feather.glyphMap

type MenuNavProps = {
  isOpenMenu: boolean
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export function MenuNav({ isOpenMenu, setIsOpenMenu }: MenuNavProps) {
  const pathname = usePathname()
  const { user } = useAuth()

  const routes = [
    {
      icon: 'home',
      label: 'Início',
      href: `/(client)/(screens)/dashboard/home/`,
      active: pathname === '/dashboard/home',
    },
    {
      icon: 'settings',
      label: 'Equipamentos',
      href: `/(client)/(screens)/dashboard/equipments/`,
      active: pathname === '/dashboard/equipments',
    },
    {
      icon: 'map-pin',
      label: 'Endereços',
      href: `/(client)/(screens)/dashboard/addresses/`,
      active: pathname === '/dashboard/addresses',
    },
    {
      icon: 'shopping-bag',
      label: 'Aeras Assist',
      href: `/(client)/(screens)/dashboard/aeras-assist/`,
      active: pathname === '/dashboard/aeras-assist',
    },
    {
      icon: 'message-square',
      label: 'FAQ',
      href: `/(client)/(screens)/dashboard/faq/`,
      active: pathname === '/dashboard/faq',
    },
    {
      icon: 'bell',
      label: 'Notificações',
      href: `/(client)/(screens)/dashboard/notifications/`,
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
            href="/(client)/(screens)/dashboard/profile/"
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
