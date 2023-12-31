import { useCallback, useRef, useState } from 'react'
import { FlatList } from 'react-native'
import { Link, useFocusEffect } from 'expo-router'

import { EquipmentDTO } from '@/dtos'

import { useMainAddressStore } from '@/store/main-address-store'

import { useGetAllEquipments } from '@/hooks/equipments/use-get-all-equipments'

import { EmptyBox } from '@/components/empty-box'
import { Loading } from '@/components/loading'
import { Button } from '@/components/button'
import { ModalRefProps } from '@/components/modal-half-screen'
import { EquipmentCard } from '@/components/equipment-card'
import { DropdownAddresses } from '@/components/dropdown-addresses'
import { EquipmentDetailsModal } from '@/components/modal-half-screen/equipment-details-modal'

import * as S from './styles'

export default function Equipments() {
  const modalRef = useRef<ModalRefProps>(null)

  const mainAddress = useMainAddressStore((state) => state.mainAddress)

  const {
    data: equipments,
    isError,
    isLoading,
    refetch,
  } = useGetAllEquipments(mainAddress.id)

  const [selectedEquipment, setSelectedEquipment] = useState<EquipmentDTO>(
    {} as EquipmentDTO,
  )

  function openModal(equipment: EquipmentDTO) {
    modalRef.current?.toggle()
    setSelectedEquipment(equipment)
  }

  const hasEquipment = equipments && equipments?.length > 0

  useFocusEffect(
    useCallback(() => {
      refetch()
    }, [mainAddress]),
  )

  if (isError) {
    return <EmptyBox title="Erro ao carregar de dados de equipamentos" />
  }

  return (
    <>
      <EquipmentDetailsModal
        modalRef={modalRef}
        equipment={selectedEquipment}
      />

      <S.Header>
        <DropdownAddresses />
      </S.Header>

      <S.Container>
        <Link asChild href="/(client)/(screens)/dashboard/equipment/">
          <Button title="Cadastrar novo equipamento" />
        </Link>

        {isLoading && <Loading variants="secondary" />}
        {!hasEquipment && (
          <EmptyBox title="Nenhum equipamento cadastrado nesse endereço" />
        )}

        <FlatList
          data={equipments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <>
              <EquipmentCard
                equipment={item}
                openModal={() => openModal(item)}
              />
            </>
          )}
        />
      </S.Container>
    </>
  )
}
