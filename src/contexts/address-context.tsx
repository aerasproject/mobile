import { createContext, useEffect } from 'react'

import {
  storageMainAddressLoad,
  storageMainAddressRemove,
  storageMainAddressSave,
} from '@/storage/storage-main-address'

import { useGetAllAddresses } from '@/hooks/addresses/use-get-all-addresses'

import { useMainAddressStore } from '@/store/main-address-store'

import { AddressDTO } from '@/dtos'

type AddressContextProviderProps = {
  children: React.ReactNode
}

type AddressContextDataProps = {
  mainAddress: AddressDTO
  setMainAddress: (address: AddressDTO) => void
}

export const AddressContext = createContext({} as AddressContextDataProps)

export function AddressContextProvider({
  children,
}: AddressContextProviderProps) {
  const { data: addresses } = useGetAllAddresses()

  const [mainAddress, setMainAddress] = useMainAddressStore((state) => [
    state.mainAddress,
    state.setMainAddress,
  ])

  async function loadMainAddress() {
    const storageMainAddress = await storageMainAddressLoad()

    const hasAddresses = addresses && addresses?.length > 0

    if (storageMainAddress && !hasAddresses) {
      setMainAddress({} as AddressDTO)
      storageMainAddressRemove()
    }

    if (storageMainAddress && hasAddresses) {
      const mainAddress = addresses?.find(
        (address) => address.id === storageMainAddress.id,
      )

      if (mainAddress) {
        setMainAddress(mainAddress)
      } else {
        await storageMainAddressRemove()
        setMainAddress(addresses[0])
        await storageMainAddressSave(addresses[0])
      }
    }

    if (!storageMainAddress && hasAddresses) {
      setMainAddress(addresses[0])
      await storageMainAddressSave(addresses[0])
    }
  }

  useEffect(() => {
    loadMainAddress()
  }, [mainAddress])

  return (
    <AddressContext.Provider value={{ mainAddress, setMainAddress }}>
      {children}
    </AddressContext.Provider>
  )
}
