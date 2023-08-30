import { useAuth } from '@/hooks/use-auth'

import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { AvatarCircle } from '@/components/avatar-circle'
import { ProfileDetails } from '@/components/profile-details'

import * as S from './styles'

export default function ProfileScreen() {
  const { user, signOut } = useAuth()

  return (
    <S.Container>
      <S.Header>
        <Badge title="Manutenção em dia" />
        <AvatarCircle size="lg" title="RBC" />
        <S.Username>{user.name}</S.Username>
        <S.UserType>Empresa</S.UserType>
      </S.Header>
      <S.Content>
        <ProfileDetails user={user} />
        <Button variants="danger-ghost" title="Sair" onPress={signOut} />
      </S.Content>
    </S.Container>
  )
}
