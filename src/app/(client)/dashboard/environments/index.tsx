import { Alert, Pressable } from 'react-native'
import { useCallback, useState } from 'react'
import { Link, useFocusEffect, useLocalSearchParams } from 'expo-router'
import { FlatList } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import { api } from '@/lib/axios'

import { AppError } from '@/utils/app-error'

import { EnvironmentDTO } from '@/dtos'

import { Button } from '@/components/button'
import { Loading } from '@/components/loading'
import { AlertModal } from '@/components/modals/alert-modal'

import * as S from './styles'

export default function Environments() {
  const { addressId, addressName } = useLocalSearchParams()

  const [isLoading, setIsLoading] = useState(false)
  const [isModalVisible, setModalVisible] = useState(false)
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

  async function onConfirm(environmentId: number) {
    try {
      await api.delete(`/environment/${environmentId}`)

      setModalVisible(false)
    } catch (error) {
      console.error(error)
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
          <>
            <AlertModal
              onConfirm={() => onConfirm(item.id)}
              isModalVisible={isModalVisible}
              setModalVisible={setModalVisible}
              description={`Você deseja mesmo excluir o ambiente ${item.name}`}
            />

            <S.EnvironmentCard>
              <S.EnvironmentCardTitle>{item.name}</S.EnvironmentCardTitle>
              <Pressable onPress={() => setModalVisible(true)}>
                <Feather name="trash-2" size={24} color="red" />
              </Pressable>
            </S.EnvironmentCard>
          </>
        )}
      />

      <Link
        asChild
        href={{
          params: { addressId, addressName },
          pathname: '/(client)/dashboard/environment',
        }}
      >
        <Button title="Cadastrar novo ambiente" />
      </Link>
    </S.Container>
  )
}
