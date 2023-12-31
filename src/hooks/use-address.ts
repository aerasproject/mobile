import { useContext } from 'react'

import { AddressContext } from '@/contexts/address-context'

export function useAddress() {
  const context = useContext(AddressContext)

  if (!context) {
    throw new Error('useAddress must be used within an AddressProvider')
  }

  return context
}
