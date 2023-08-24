import { useCallback, useEffect, useRef, useState } from 'react'
import { Alert, Dimensions } from 'react-native'
import { useFocusEffect } from 'expo-router'
import { Ionicons, Feather } from '@expo/vector-icons'
import Carousel from 'react-native-snap-carousel'

import { api } from '@/lib/axios'

import { AppError } from '@/utils/app-error'

import { AddressDTO, EquipmentDTO } from '@/dtos'

import { useAddress } from '@/hooks/use-address'

import { Button } from '@/components/button'
import { Loading } from '@/components/loading'
import { ModalRefProps } from '@/components/modal'
import { EmptyBox } from '@/components/empty-box'
import { AddressesModal } from '@/components/modals/addresses-modal'
import { AddressAndEquipmentDetailsModal } from '@/components/modals/address-and-equipment-details-modal'

import * as S from './styles'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

export default function Dashboard() {
  const addressesModalRef = useRef<ModalRefProps>(null)
  const equipmentDetailsModalRef = useRef<ModalRefProps>(null)

  const { mainAddress, setMainAddress } = useAddress()

  const [isLoading, setIsLoading] = useState(false)
  const [addresses, setAddresses] = useState<AddressDTO[]>([])
  const [equipments, setEquipments] = useState<EquipmentDTO[]>([])

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

  async function fetchAddresses() {
    try {
      setIsLoading(true)

      const response = await api.get('/client/address')

      if (response.data.length) {
        setMainAddress(response.data[0])
      }

      setAddresses(response.data)
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
      fetchAddresses()
    }, []),
  )

  useEffect(() => {
    fetchEquipments()
  }, [mainAddress])

  function openAddressesModal() {
    addressesModalRef.current?.toggle()
  }

  function openEquipmentDetailsModal() {
    equipmentDetailsModalRef.current?.toggle()
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <AddressesModal addresses={addresses} modalRef={addressesModalRef} />

      <S.Container>
        <S.Header>
          {!addresses.length && (
            <EmptyBox
              title="Nenhum endereço cadastrado"
              href="/(client)/dashboard/address/"
              icon={<Feather name="map-pin" size={32} color="#0051B6" />}
            />
          )}

          <S.BtnModal onPress={openAddressesModal}>
            <S.MainAddressName>{mainAddress.name}</S.MainAddressName>
            <Ionicons name="ios-chevron-down" size={32} color="#ffffff" />
          </S.BtnModal>

          {!equipments.length && (
            <EmptyBox
              title="Nenhum equipamento cadastrado"
              href="/(client)/dashboard/equipment/"
              icon={<Feather name="settings" size={32} color="#0051B6" />}
            />
          )}

          <Carousel
            data={equipments}
            sliderWidth={SCREEN_WIDTH}
            useScrollView={true}
            itemWidth={Math.round(SCREEN_WIDTH * 0.8)}
            renderItem={({ item }) => (
              <S.EquipmentContainer>
                <AddressAndEquipmentDetailsModal
                  equipment={item}
                  modalRef={equipmentDetailsModalRef}
                />
                <S.ImageAC />
                <S.EquipmentEnv>{item.environment?.name}</S.EquipmentEnv>
                <S.EquipmentName>{item.name}</S.EquipmentName>
                <S.EquipmentBrand>{item.brand}</S.EquipmentBrand>
                <S.Badge>Manutenção em dia</S.Badge>

                <Button
                  variants="white-outline"
                  title="Mais informações"
                  onPress={openEquipmentDetailsModal}
                />
              </S.EquipmentContainer>
            )}
          />
        </S.Header>
        <S.Content>
          <S.Text>
            O planejamento e informações de manutenção dos equipamentos vão
            aparecer aqui
          </S.Text>
        </S.Content>
      </S.Container>
    </>
  )
}
