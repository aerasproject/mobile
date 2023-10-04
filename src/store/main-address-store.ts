import { create } from 'zustand'

import { AddressDTO } from '@/dtos'

type MainAddressStore = {
  mainAddress: AddressDTO
  setMainAddress: (mainAddress: AddressDTO) => void
}

export const useMainAddressStore = create<MainAddressStore>((set) => ({
  mainAddress: {} as AddressDTO,
  setMainAddress: (mainAddress: AddressDTO) => set({ mainAddress }),
}))
