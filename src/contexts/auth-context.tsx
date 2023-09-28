import { useRouter } from 'expo-router'
import { createContext, useEffect, useState } from 'react'

import { UserDTO } from '@/dtos'

import {
  storageUserSave,
  storageUserLoad,
  storageUserRemove,
} from '@/storage/storage-user'
import {
  storageAuthTokenSave,
  storageAuthTokenGet,
  storageAuthTokenRemove,
} from '@/storage/storage-auth-token'
import { storageMainAddressRemove } from '@/storage/storage-main-address'

import { api } from '@/lib/axios'

type Credentials = {
  name: string
  email: string
  password: string
  document: string
  role: 'ADMIN'
}

type AuthContextProviderProps = {
  children: React.ReactNode
}

type AuthContextDataProps = {
  user: UserDTO
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  signUp: (data: Credentials) => Promise<void>
  isLoadingUserStorage: boolean
}

export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const router = useRouter()
  const [user, setUser] = useState<UserDTO>({} as UserDTO)
  const [isLoadingUserStorage, setIsLoadingUserStorage] = useState(true)

  function updateUserAndToken(userData: UserDTO, token: string) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`

    setUser(userData)
  }

  async function storageUserAndTokenSave(userData: UserDTO, token: string) {
    try {
      setIsLoadingUserStorage(true)

      await storageUserSave(userData)
      await storageAuthTokenSave(token)
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorage(false)
    }
  }

  async function signIn(email: string, password: string) {
    try {
      const response = await api.post('/authentication', {
        email,
        password,
      })

      const { user, token } = response.data

      if (user && token) {
        await storageUserAndTokenSave(user, token)
        updateUserAndToken(user, token)
        router.replace('/(client)/dashboard/home')
      }
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorage(false)
    }
  }

  async function signOut() {
    try {
      setIsLoadingUserStorage(true)

      setUser({} as UserDTO)

      await storageUserRemove()
      await storageMainAddressRemove()
      await storageAuthTokenRemove()

      router.replace('/(onboarding)/welcome/')
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorage(false)
    }
  }

  async function loadUserData() {
    try {
      setIsLoadingUserStorage(true)

      const user = await storageUserLoad()
      const token = await storageAuthTokenGet()

      if (user.id && token) {
        updateUserAndToken(user, token)

        router.replace('/(client)/dashboard/home/')
        // router.replace('/(worker)/maintenance/')
      } else {
        router.replace('/(onboarding)/welcome/')
      }
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorage(false)
    }
  }

  async function signUp(data: Credentials) {
    try {
      const response = await api.post('/user', data)

      const { user, token } = response.data

      if (user && token) {
        await storageUserAndTokenSave(user, token)
        updateUserAndToken(user, token)
      }
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    loadUserData()
  }, [])

  useEffect(() => {
    const subscribe = api.registerInterceptTokenManager(signOut)

    return () => subscribe()
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut, isLoadingUserStorage, signUp }}
    >
      {children}
    </AuthContext.Provider>
  )
}
