import { useCallback, useRef, useState } from 'react'
import { Alert, FlatList, Text } from 'react-native'
import { Link, useFocusEffect } from 'expo-router'

import { api } from '@/lib/axios'

import { EquipmentDTO } from '@/dtos'

import { useAddress } from '@/hooks/use-address'

import { AppError } from '@/utils/app-error'

import { Loading } from '@/components/loading'
import { Button } from '@/components/button'
import { ModalRefProps } from '@/components/modal'
import { EquipmentCard } from '@/components/equipment-card'
import { DropdownAddresses } from '@/components/dropdown-addresses'
import { EquipmentDetailsModal } from '@/components/modals/equipment-details-modal'

import * as S from './styles'

export default function Equipments() {
  const modalRef = useRef<ModalRefProps>(null)

  const { mainAddress } = useAddress()

  const [isLoading, setIsLoading] = useState(false)
  const [equipments, setEquipments] = useState<EquipmentDTO[]>([])

  function openModal() {
    modalRef.current?.toggle()
  }

  async function fetchEquipments() {
    try {
      setIsLoading(true)

      const response = await api.get('/equipment', {
        params: {
          addressId: mainAddress.id,
        },
      })

      setEquipments(response.data)
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
      fetchEquipments()
    }, [mainAddress]),
  )

  return (
    <>
      <S.Header>
        <DropdownAddresses />
      </S.Header>

      <S.Container>
        <Link asChild href="/(client)/dashboard/equipment/">
          <Button title="Cadastrar novo equipamento" />
        </Link>

        {isLoading && <Loading variants="secondary" />}

        {equipments.length ? (
          <FlatList
            data={equipments}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <>
                <EquipmentDetailsModal equipment={item} modalRef={modalRef} />
                <EquipmentCard equipment={item} openModal={openModal} />
              </>
            )}
          />
        ) : (
          <Text>Nenhum equipamento cadastrado</Text>
        )}
      </S.Container>
    </>
  )
}
