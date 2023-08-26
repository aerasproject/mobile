import { useRef, useState } from 'react'
import { FlatList, Text } from 'react-native'
import { Link } from 'expo-router'

import { AddressDTO } from '@/dtos'

import { useGetAll } from '@/hooks/addresses/use-get-all'

import { Loading } from '@/components/loading'
import { Button } from '@/components/button'
import { ModalRefProps } from '@/components/modal-half-screen'
import { AddressCard } from '@/components/address-card'
import { AddressDetailsModal } from '@/components/modals/address-details-modal'

import * as S from './styles'

export default function Addresses() {
  const modalRef = useRef<ModalRefProps>(null)

  const { data: addresses, isLoading } = useGetAll()

  const [selectedAddress, setSelectedAddress] = useState<AddressDTO>(
    {} as AddressDTO,
  )

  function openModal(address: AddressDTO) {
    modalRef.current?.toggle()
    setSelectedAddress(address)
  }

  const hasAddresses = addresses?.length > 0

  return (
    <>
      <AddressDetailsModal address={selectedAddress} modalRef={modalRef} />

      <S.Container>
        <Link asChild href="/(client)/dashboard/address/">
          <Button title="Cadastrar novo endereço" />
        </Link>

        {isLoading && <Loading variants="secondary" />}
        {!hasAddresses && <Text>Nenhum endereço cadastrado</Text>}

        <FlatList
          data={addresses}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <AddressCard address={item} openModal={() => openModal(item)} />
          )}
        />
      </S.Container>
    </>
  )
}
