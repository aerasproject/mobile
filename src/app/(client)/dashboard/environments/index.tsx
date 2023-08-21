import { Alert, Text } from 'react-native'
import { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { FlatList } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import { api } from '@/lib/axios'
import { AppError } from '@/utils/app-error'
import { EnvironmentDTO } from '@/dtos/enviroment-dto'

import { Button } from '@/components/button'

import * as S from './styles'

export default function Environments() {
  const { addressId, addressName } = useLocalSearchParams()

  const [isLoading, setIsLoading] = useState(false)
  const [environments, setEnvironments] = useState<EnvironmentDTO[]>([])

  async function fetchEnvironments() {
    try {
      setIsLoading(true)

      const response = await api.get(`/environment/${addressId}`)

      setEnvironments(response.data)
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
    fetchEnvironments()
  }, [addressId])

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Ambientes Cadastrados</S.Title>
        <S.Subtitle>Endereço: {addressName}</S.Subtitle>
      </S.Header>

      <FlatList
        data={environments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <S.EnvironmentCard>
            <S.EnvironmentCardTitle>{item.name}</S.EnvironmentCardTitle>
            <Feather name="trash-2" size={20} color="red" />
          </S.EnvironmentCard>
        )}
      />

      <Button
        title="Cadastrar novo ambiente"
        onPress={() => console.log('TODO: Cadastrar novo ambiente')}
      />
    </S.Container>
  )
}
