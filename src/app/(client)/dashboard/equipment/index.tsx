import { Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'

import { EquipmentDTO } from '@/dtos'

import { EquipmentForm } from '@/components/equipment-form'

import * as S from './styles'

export default function Address() {
  const { equipmentId } = useLocalSearchParams()

  const [isLoading, setIsLoading] = useState(false)
  const [equipment, setEquipment] = useState<EquipmentDTO | null>(null)

  async function fetchEquipment() {
    try {
      setIsLoading(true)
      // TODO: Fetch Equipment
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchEquipment()
  }, [equipmentId])

  if (isLoading) {
    return <Text>Carregando...</Text>
  }

  return (
    <S.Container>
      <EquipmentForm initialData={equipment} />
    </S.Container>
  )
}
