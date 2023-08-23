import { createContext, useState } from 'react'

import { AddressDTO } from '@/dtos/address-dto'

type AddressContextProviderProps = {
  children: React.ReactNode
}

type AddressContextDataProps = {
  mainAddress: AddressDTO
  setMainAddress: React.Dispatch<React.SetStateAction<AddressDTO>>
}

export const AddressContext = createContext({} as AddressContextDataProps)

export function AddressContextProvider({
  children,
}: AddressContextProviderProps) {
  const [mainAddress, setMainAddress] = useState<AddressDTO>({} as AddressDTO)

  return (
    <AddressContext.Provider value={{ mainAddress, setMainAddress }}>
      {children}
    </AddressContext.Provider>
  )
}
