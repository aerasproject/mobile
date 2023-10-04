import { Button } from '@/components/button'
import { Input } from '@/components/input'

import { Feather } from '@expo/vector-icons'

import * as S from './styles'

export default function MaintenanceScreen() {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Meus PMOCs</S.Title>
        <Button
          title="Novo PMOC"
          icon={<Feather name="plus-circle" size={24} color="white" />}
        />
      </S.Header>

      <Input placeholder="Empresa ou a tag do equipamento" />
    </S.Container>
  )
}
