import { useEffect, useState } from 'react'
import { Alert, FlatList, Text } from 'react-native'

import { api } from '@/lib/axios'
import { AddressDTO } from '@/dtos/address-dto'

import { Button } from '@/components/button'
import { AddressCard } from '@/components/address-card'

import * as S from './styles'

export default function Addresses() {
  const [addresses, setAddresses] = useState<AddressDTO[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // TODO: Implementar lógica para definir endereço principal
  const [isMainAddress, _] = useState(true)

  async function fetchAddresses() {
    try {
      setIsLoading(true)

      const response = await api.get('/client/address')
      console.log(response.data)

      setAddresses(response.data)
    } catch (error) {
      Alert.alert('Erro ao buscar endereços')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchAddresses()
  }, [])

  return (
    <S.Container>
      <Button title="Cadastrar novo endereço" />

      {isLoading && <Text>Carregando...</Text>}

      {!isLoading && addresses.length ? (
        <FlatList
          data={addresses}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            // TODO: Implementar lógica para definir endereço principal
            <>
              <AddressCard address={item} />
              <AddressCard address={item} isMain={isMainAddress} />
            </>
          )}
        />
      ) : (
        <Text>Nenhum endereço cadastrado</Text>
      )}
    </S.Container>
  )
}
