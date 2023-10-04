import { useMainAddressStore } from '@/store/main-address-store'

import { EquipmentDTO } from '@/dtos'

import { formatNameAddress } from '@/utils/format-name-address'

import { InfoBox } from '@/components/info-box'
import { AvatarCircle } from '@/components/avatar-circle'
import { ModalHalfScreen, ModalRefProps } from '@/components/modal-half-screen'

import * as S from './styles'

type AddressAndEquipmentDetailsModalProps = {
  equipment: EquipmentDTO
  modalRef: React.RefObject<ModalRefProps>
}

export function AddressAndEquipmentDetailsModal({
  equipment,
  modalRef,
}: AddressAndEquipmentDetailsModalProps) {
  const mainAddress = useMainAddressStore((state) => state.mainAddress)

  const fullAddress = formatNameAddress(mainAddress)

  return (
    <ModalHalfScreen ref={modalRef} height="70%">
      <S.Container>
        <S.Header>
          <AvatarCircle title="RBC" />
          <S.HeaderTitle>{mainAddress.name}</S.HeaderTitle>
        </S.Header>

        <S.Content>
          <S.Box>
            <S.Label>Endereço</S.Label>
            <S.AddressText>{fullAddress}</S.AddressText>
          </S.Box>

          <S.Box>
            <S.Label>Equipamento</S.Label>
            <S.Wrapper>
              <InfoBox label="Marca" value={equipment.brand} />
              <InfoBox label="Modelo" value={equipment.model || '-'} />
              <InfoBox label="Capacidade" value={equipment.capacity} />
              <InfoBox label="Tipo" value={equipment.type} />
              <InfoBox label="Voltagem" value={`${equipment.voltage}V`} />
            </S.Wrapper>
          </S.Box>
        </S.Content>
      </S.Container>
    </ModalHalfScreen>
  )
}
