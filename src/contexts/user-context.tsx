import { createContext, useState } from 'react'

type UserProviderProps = {
  children: React.ReactNode
}

type UserContextDataProps = {
  username: string
}

export const UserContext = createContext({} as UserContextDataProps)

export function UserProvider({ children }: UserProviderProps) {
  const [username, setUsername] = useState('John Doe')

  return (
    <UserContext.Provider value={{ username }}>{children}</UserContext.Provider>
  )
}
