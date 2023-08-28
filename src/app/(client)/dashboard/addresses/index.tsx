import { useRef, useState } from 'react'
import { FlatList, Text } from 'react-native'
import { Link } from 'expo-router'

import { AddressDTO } from '@/dtos'

import { useGetAllAddresses } from '@/hooks/addresses/use-get-all-addresses'

import { Loading } from '@/components/loading'
import { EmptyBox } from '@/components/empty-box'
import { Button } from '@/components/button'
import { ModalRefProps } from '@/components/modal-half-screen'
import { AddressCard } from '@/components/address-card'
import { AddressDetailsModal } from '@/components/modal-half-screen/address-details-modal'

import * as S from './styles'

export default function Addresses() {
  const modalRef = useRef<ModalRefProps>(null)

  const { data: addresses, isLoading, isError } = useGetAllAddresses()

  const [selectedAddress, setSelectedAddress] = useState<AddressDTO>(
    {} as AddressDTO,
  )

  function openModal(address: AddressDTO) {
    modalRef.current?.toggle()
    setSelectedAddress(address)
  }

  const hasAddresses = addresses && addresses?.length > 0

  if (isError) {
    return <EmptyBox title="Erro ao carregar de dados de equipamentos" />
  }

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
