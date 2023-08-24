import AsyncStorage from '@react-native-async-storage/async-storage'

import { UserDTO } from '@/dtos'

import { USER_STORAGE } from '@/storage/storage-config'

export async function storageUserSave(user: UserDTO) {
  await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user))
}

export async function storageUserLoad(): Promise<UserDTO> {
  const storage = await AsyncStorage.getItem(USER_STORAGE)

  const user: UserDTO = storage ? JSON.parse(storage) : {}

  return user
}

export async function storageUserRemove() {
  await AsyncStorage.removeItem(USER_STORAGE)
}
