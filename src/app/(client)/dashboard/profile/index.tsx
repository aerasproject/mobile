import { Controller, useForm } from 'react-hook-form'
import { AntDesign, Feather } from '@expo/vector-icons'

import { useAuth } from '@/hooks/use-auth'

import { Input } from '@/components/input'
import { Button } from '@/components/button'

import * as S from './styles'

export default function ProfileScreen() {
  const { user, signOut } = useAuth()

  const form = useForm({
    defaultValues: {
      document: user.document,
      name: user.name,
      email: user.email,
    },
  })

  return (
    <S.Container>
      <AntDesign name="user" size={32} color="#00ECA0" />
      <S.Title>Informações Pessoais</S.Title>
      <Button variants="ghost" title="Editar Informações Pessoais" />
      <Controller
        name="document"
        control={form.control}
        render={({ field, fieldState }) => (
          <Input
            label="CPF"
            autoCorrect={false}
            returnKeyType="next"
            value={field.value}
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="name"
        control={form.control}
        render={({ field, fieldState }) => (
          <Input
            label="Nome"
            autoCorrect={false}
            returnKeyType="next"
            value={field.value}
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Feather name="at-sign" size={32} color="#00ECA0" />
      <S.Title>Informações de Acesso</S.Title>
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Input
            label="Email"
            autoCorrect={false}
            returnKeyType="next"
            value={field.value}
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <S.Title>Senha e Segurança</S.Title>
      <Button variants="ghost" title="Alterar senha" />
      <Button variants="danger-ghost" title="Sair" onPress={signOut} />
    </S.Container>
  )
}
