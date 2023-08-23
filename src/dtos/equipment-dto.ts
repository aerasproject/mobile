import { EnvironmentDTO } from './environment-dto'

export type EquipmentDTO = {
  id: number
  name: string
  tag: string
  brand: string
  model: string
  voltage: string
  capacity: string
  type: string
  environment: EnvironmentDTO | null
}
