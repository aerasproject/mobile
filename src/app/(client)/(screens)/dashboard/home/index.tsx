import { useCallback, useEffect, useRef } from 'react'
import { Dimensions } from 'react-native'
import { useFocusEffect, useRouter } from 'expo-router'
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons'
import Carousel from 'react-native-snap-carousel'

import { useMainAddressStore } from '@/store/main-address-store'

import { useGetAllAddresses } from '@/hooks/addresses/use-get-all-addresses'
import { useGetAllEquipments } from '@/hooks/equipments/use-get-all-equipments'

import { Loading } from '@/components/loading'
import { EmptyBox } from '@/components/empty-box'
import { ModalRefProps } from '@/components/modal-half-screen'
import { AddressesModal } from '@/components/modal-half-screen/addresses-modal'

import { EquipmentHome } from '../../../_components/equipment-home'

import * as S from './styles'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

export default function Dashboard() {
  const router = useRouter()
  const addressesModalRef = useRef<ModalRefProps>(null)

  const [mainAddress, setMainAddress] = useMainAddressStore((state) => [
    state.mainAddress,
    state.setMainAddress,
  ])

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
    refetch: refetchEquipments,
  } = useGetAllEquipments(mainAddress.id)

  useFocusEffect(
    useCallback(() => {
      fetchAddresses()

      if (addresses && addresses.length && !mainAddress.id) {
        setMainAddress(addresses[0])
      }
    }, [addresses, fetchAddresses, mainAddress, setMainAddress]),
  )

  useEffect(() => {
    refetchEquipments()
  }, [mainAddress.id])

  function openAddressesModal() {
    addressesModalRef.current?.toggle()
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
          {!addresses.length ? (
            <EmptyBox
              title="Nenhum endereço cadastrado"
              href="/(client)/(screens)/dashboard/address/"
              icon={<Feather name="map-pin" size={32} color="#0051B6" />}
            />
          ) : (
            <>
              <S.BtnModal onPress={openAddressesModal}>
                <S.MainAddressName>{mainAddress.name}</S.MainAddressName>
                <Ionicons name="ios-chevron-down" size={32} color="#ffffff" />
              </S.BtnModal>

              {!equipments.length ? (
                <EmptyBox
                  title="Nenhum equipamento cadastrado"
                  href="/(client)/(screens)/dashboard/equipment"
                  icon={<Feather name="settings" size={32} color="#0051B6" />}
                />
              ) : (
                <S.NewEquipmentBtn
                  onPress={() =>
                    router.push('/(client)/(screens)/dashboard/equipment')
                  }
                >
                  <AntDesign name="pluscircleo" size={20} color="#ffffff" />
                  <S.NewEquipmentText>Novo equipamento</S.NewEquipmentText>
                </S.NewEquipmentBtn>
              )}
            </>
          )}
          <Carousel
            data={equipments}
            sliderWidth={SCREEN_WIDTH}
            useScrollView={true}
            itemWidth={Math.round(SCREEN_WIDTH * 0.8)}
            renderItem={({ item }) => <EquipmentHome equipment={item} />}
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
