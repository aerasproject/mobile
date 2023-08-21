import { Alert } from 'react-native'
import { useCallback, useState } from 'react'
import { Link, useFocusEffect, useLocalSearchParams } from 'expo-router'
import { FlatList } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import { api } from '@/lib/axios'

import { AppError } from '@/utils/app-error'

import { EnvironmentDTO } from '@/dtos/environment-dto'

import { Button } from '@/components/button'
import { Loading } from '@/components/loading'

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

  useFocusEffect(
    useCallback(() => {
      fetchEnvironments()
    }, [addressId]),
  )

  return (
    <S.Container>
      <S.Header>
        <S.Title>Ambientes Cadastrados</S.Title>
        <S.Subtitle>Endereço: {addressName}</S.Subtitle>
      </S.Header>

      {isLoading && <Loading variants="secondary" />}

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

      <Link
        asChild
        href={{
          pathname: '/(client)/dashboard/environment',
          params: { addressId, addressName },
        }}
      >
        <Button title="Cadastrar novo ambiente" />
      </Link>
    </S.Container>
  )
}
