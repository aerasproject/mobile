import { useAuth } from '@/hooks/use-auth'

import { Button } from '@/components/button'
import { ProfileDetails } from '@/components/profile-details'

import * as S from './styles'

export default function ProfileScreen() {
  const { user, signOut } = useAuth()

  return (
    <S.Container>
      <ProfileDetails user={user} />
      <Button variants="danger-ghost" title="Sair" onPress={signOut} />
    </S.Container>
  )
}
