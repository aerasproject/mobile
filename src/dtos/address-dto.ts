export type AddressDTO = {
  id: number
  name: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
  postalCode?: string
  isFavorite?: boolean
}
