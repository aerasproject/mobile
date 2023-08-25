import { useQuery } from '@tanstack/react-query'

import { api } from '@/lib/axios'

async function fetchEquipments(addressId: number) {
  const response = await api.get('/equipment', {
    params: {
      addressId,
    },
  })

  return response.data
}

export const useGetAll = (addressId: number) => {
  return useQuery(['GET_ALL_EQUIPMENTS', addressId], () =>
    fetchEquipments(addressId),
  )
}
