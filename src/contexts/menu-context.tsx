import { useState, createContext } from 'react'

import { MenuNav } from '@/components/menu-nav'

type MenuContextProviderProps = {
  children: React.ReactNode
}

type MenuContextDataProps = {
  isOpenMenu: boolean
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuContext = createContext({} as MenuContextDataProps)

export function MenuContextProvider({ children }: MenuContextProviderProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <MenuContext.Provider value={{ isOpenMenu, setIsOpenMenu }}>
      {children}
      <MenuNav isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
    </MenuContext.Provider>
  )
}
