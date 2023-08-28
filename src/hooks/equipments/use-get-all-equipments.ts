import { useQuery } from '@tanstack/react-query'

import { api } from '@/lib/axios'

import { EquipmentDTO } from '@/dtos'

async function fetchEquipments(addressId: number) {
  const response = await api.get<EquipmentDTO[]>('/equipment', {
    params: {
      addressId,
    },
  })

  return response.data
}

export const useGetAllEquipments = (addressId: number) => {
  return useQuery(
    ['GET_ALL_EQUIPMENTS', addressId],
    () => fetchEquipments(addressId),
    {
      enabled: !!addressId,
    },
  )
}
