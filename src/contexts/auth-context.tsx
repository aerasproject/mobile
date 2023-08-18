import { useRouter } from 'expo-router'
import { createContext, useEffect, useState } from 'react'

import { UserDTO } from '@/dtos/user-dto'

import { storageUserSave, storageUserLoad } from '@/storage/storage-user'

import { api } from '@/lib/axios'

type AuthContextProviderProps = {
  children: React.ReactNode
}

type AuthContextDataProps = {
  user: UserDTO
  signIn: (email: string, password: string) => Promise<void>
  isLoadingUserStorage: boolean
}

export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const router = useRouter()

  const [isLoadingUserStorage, setIsLoadingUserStorage] = useState(true)

  const [user, setUser] = useState<UserDTO>({} as UserDTO)

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post('/authentication', {
        email,
        password,
      })

      console.log(data.user)

      if (data.user) {
        setUser(data.user)
        storageUserSave(data.user)
      }
    } catch (error) {
      throw error
    }
  }

  async function loadUserData() {
    try {
      const userLogged = await storageUserLoad()

      if (userLogged) {
        setUser(userLogged)
        router.replace('/(client)/dashboard/home')
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
    <AuthContext.Provider value={{ user, signIn, isLoadingUserStorage }}>
      {children}
    </AuthContext.Provider>
  )
}
