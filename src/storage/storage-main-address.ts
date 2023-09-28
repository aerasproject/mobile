import AsyncStorage from '@react-native-async-storage/async-storage'

import { MAIN_ADDRESS_STORAGE } from '@/storage/storage-config'

import { AddressDTO } from '@/dtos'

export async function storageMainAddressSave(address: AddressDTO) {
  await AsyncStorage.setItem(MAIN_ADDRESS_STORAGE, JSON.stringify(address))
}

export async function storageMainAddressRemove() {
  await AsyncStorage.removeItem(MAIN_ADDRESS_STORAGE)
}

export async function storageMainAddressLoad(): Promise<AddressDTO> {
  const storage = await AsyncStorage.getItem(MAIN_ADDRESS_STORAGE)

  const mainAddress: AddressDTO = storage ? JSON.parse(storage) : {}

  return mainAddress
}
