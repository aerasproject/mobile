import { useState } from 'react'
import { Feather } from '@expo/vector-icons'

import { EmptyBox } from '@/components/empty-box'

import * as S from './styles'

export default function Dashboard() {
  const [addresses, setAddresses] = useState([])

  const hasAddresses = addresses.length > 0

  return (
    <S.Container>
      <S.Header>
        {!hasAddresses && (
          <EmptyBox
            title="Nenhum endereço cadastrado"
            href="/(onboarding)/choice/"
            icon={<Feather name="map-pin" size={24} color="#0051B6" />}
          />
        )}
      </S.Header>
      <S.Content>
        <S.Text>
          O planejamento e informações de manutenção dos equipamentos vão
          aparecer aqui
        </S.Text>
      </S.Content>
    </S.Container>
  )
}
