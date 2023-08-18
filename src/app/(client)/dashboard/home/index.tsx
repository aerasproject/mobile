import { useState } from 'react'
import { Feather } from '@expo/vector-icons'

import { EmptyBox } from '@/components/empty-box'

import * as S from './styles'
import { useAuth } from '@/hooks/use-auth'

export default function Dashboard() {
  const { user } = useAuth()

  const [addresses, setAddresses] = useState([])

  const hasAddresses = addresses.length > 0

  return (
    <S.Container>
      <S.Header>
        {!hasAddresses && (
          <EmptyBox
            title="Nenhum endereço cadastrado"
            href="/(client)/dashboard/address/create/"
            icon={<Feather name="map-pin" size={24} color="#0051B6" />}
          />
        )}
      </S.Header>
      <S.Content>
        <S.Text>username: {user.name}</S.Text>
        <S.Text>
          O planejamento e informações de manutenção dos equipamentos vão
          aparecer aqui
        </S.Text>
      </S.Content>
    </S.Container>
  )
}
