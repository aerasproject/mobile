import { useMutation } from '@tanstack/react-query'

import { api } from '@/lib/axios'

type DataProps = {
  brand: string
  capacity: string
  name: string
  type: string
  voltage: string
  environmentId: number
  addressId: number
  equipmentId: number
}

export function useUpdateEquipment() {
  return useMutation(['UPDATE_EQUIPMENT'], async (data: DataProps) => {
    await api.put(`/equipment/${data.equipmentId}`, {
      brand: data.brand,
      capacity: data.capacity,
      name: data.name,
      type: data.type,
      voltage: data.voltage,
      addressId: data.addressId,
      environmentId: data.environmentId,
    })
  })
}
