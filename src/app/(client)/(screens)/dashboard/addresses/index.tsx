import { Link } from 'expo-router'
import { useRef, useState } from 'react'
import { FlatList, View } from 'react-native'

import { AddressDTO } from '@/dtos'

import { useGetAllAddresses } from '@/hooks/addresses/use-get-all-addresses'

import { Button } from '@/components/button'
import { Loading } from '@/components/loading'
import { EmptyBox } from '@/components/empty-box'
import { AddressCard } from '@/components/address-card'
import { ModalRefProps } from '@/components/modal-half-screen'
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
        <Link asChild href="/(client)/(screens)/dashboard/address/">
          <Button title="Cadastrar novo endereço" />
        </Link>

        {isLoading && <Loading variants="secondary" />}
        {!hasAddresses && <EmptyBox title="Nenhum endereço cadastrado" />}

        <FlatList
          data={addresses}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={<View style={{ height: 36 }} />}
          renderItem={({ item }) => (
            <AddressCard address={item} openModal={() => openModal(item)} />
          )}
        />
      </S.Container>
    </>
  )
}
