import { AddressDTO } from '@/dtos'

export function formatNameAddress(address: AddressDTO) {
  return `${address.street}, ${address.number}, ${address.complement} - ${address.neighborhood}, ${address.city} - ${address.state}`
}
