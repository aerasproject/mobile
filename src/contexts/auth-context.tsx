import { useRouter } from 'expo-router'
import { createContext, useEffect, useState } from 'react'

import { UserDTO } from '@/dtos/user-dto'

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

import { api } from '@/lib/axios'

type AuthContextProviderProps = {
  children: React.ReactNode
}

type AuthContextDataProps = {
  user: UserDTO
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  isLoadingUserStorage: boolean
}

export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const router = useRouter()

  const [isLoadingUserStorage, setIsLoadingUserStorage] = useState(true)

  const [user, setUser] = useState<UserDTO>({} as UserDTO)

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
      } else {
        router.replace('/(onboarding)/welcome/')
      }
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorage(false)
    }
  }

  useEffect(() => {
    loadUserData()
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut, isLoadingUserStorage }}
    >
      {children}
    </AuthContext.Provider>
  )
}
