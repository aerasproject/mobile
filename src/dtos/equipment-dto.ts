import { EnvironmentDTO } from './environment-dto'

export type EquipmentDTO = {
  id: number
  name: string
  tag: string | null
  brand: string
  model: string | null
  voltage: string
  capacity: string
  type: string
  environment: EnvironmentDTO | null
}
