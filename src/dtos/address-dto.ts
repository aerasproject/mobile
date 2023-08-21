import { EnvironmentDTO } from './environment-dto'

export type AddressDTO = {
  id: number
  name: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
  postalCode: string | null
  isFavorite?: boolean
  environments: EnvironmentDTO[]
}
