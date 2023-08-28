import { useCallback, useEffect, useRef } from 'react'
import { Dimensions } from 'react-native'
import { useFocusEffect, useRouter } from 'expo-router'
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons'
import Carousel from 'react-native-snap-carousel'

import { useAddress } from '@/hooks/use-address'
import { useGetAllAddresses } from '@/hooks/addresses/use-get-all-addresses'
import { useGetAllEquipments } from '@/hooks/equipments/use-get-all-equipments'

import { Button } from '@/components/button'
import { Loading } from '@/components/loading'
import { EmptyBox } from '@/components/empty-box'
import { ModalRefProps } from '@/components/modal-half-screen'
import { AddressesModal } from '@/components/modals/addresses-modal'
import { AddressAndEquipmentDetailsModal } from '@/components/modals/address-and-equipment-details-modal'

import * as S from './styles'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

export default function Dashboard() {
  const router = useRouter()

  const addressesModalRef = useRef<ModalRefProps>(null)
  const equipmentDetailsModalRef = useRef<ModalRefProps>(null)

  const { mainAddress, setMainAddress } = useAddress()

  const {
    data: addresses,
    isLoading: isLoadingAddresses,
    isError: isErrorAddresses,
    refetch: fetchAddresses,
  } = useGetAllAddresses()

  const {
    data: equipments,
    isLoading: isLoadingEquipments,
    isError: isErrorEquipments,
    refetch: fetchEquipments,
  } = useGetAllEquipments(mainAddress.id)

  useFocusEffect(
    useCallback(() => {
      fetchAddresses()

      if (addresses && addresses.length && !mainAddress) {
        setMainAddress(addresses[0])
      }
    }, [addresses, fetchAddresses, mainAddress, setMainAddress]),
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

  if (isErrorAddresses || isErrorEquipments) {
    return <EmptyBox title="Erro ao carregar de endereços e equipamentos" />
  }

  if (isLoadingAddresses || isLoadingEquipments) {
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

          <S.NewEquipmentBtn
            onPress={() => router.push('/(client)/dashboard/equipment/')}
          >
            <AntDesign name="pluscircleo" size={24} color="#ffffff" />
            <S.NewEquipmentText>Novo equipamento</S.NewEquipmentText>
          </S.NewEquipmentBtn>

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
              // TODO: Criar componente de equipamento
              <S.EquipmentContainer>
                <AddressAndEquipmentDetailsModal
                  equipment={item}
                  modalRef={equipmentDetailsModalRef}
                />
                <S.ImageAC />
                <S.EquipmentEnv>
                  {item.environment?.name || 'Sem ambiente'}
                </S.EquipmentEnv>
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
