import { useContext } from 'react'

import { UserContext } from '@/contexts/user-context'

export function useUser() {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used within an UserProvider')
  }

  return context
}