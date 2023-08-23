import { Alert } from 'react-native'
import { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'

import { EquipmentDTO } from '@/dtos'

import { api } from '@/lib/axios'

import { AppError } from '@/utils/app-error'

import { Loading } from '@/components/loading'
import { EquipmentForm } from '@/components/equipment-form'

import * as S from './styles'

export default function Address() {
  const { equipmentId } = useLocalSearchParams()

  const [isLoading, setIsLoading] = useState(false)
  const [equipment, setEquipment] = useState<EquipmentDTO | null>(null)

  async function fetchEquipment() {
    try {
      setIsLoading(true)

      const response = await api.get(`/equipment/${equipmentId}`)

      setEquipment(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError
      if (isAppError) {
        Alert.alert(error.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchEquipment()
  }, [equipmentId])

  if (isLoading) {
    return <Loading variants="secondary" />
  }

  return (
    <S.Container>
      <EquipmentForm initialData={equipment} />
    </S.Container>
  )
}
