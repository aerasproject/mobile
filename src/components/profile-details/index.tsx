import { Controller, useForm } from 'react-hook-form'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

import { UserDTO } from '@/dtos'

import { Input } from '@/components/input'
import { Button } from '@/components/button'

import * as S from './styles'

type ProfileDetailsProps = {
  user: UserDTO
}

export function ProfileDetails({ user }: ProfileDetailsProps) {
  const form = useForm({
    defaultValues: {
      document: user.document,
      name: user.name,
      email: user.email,
    },
  })

  return (
    <>
      <S.Box>
        <FontAwesome5 name="user-circle" size={32} color="#00ECA0" />
        <S.Title>Informações Pessoais</S.Title>
        <Button
          variants="ghost"
          title="Editar Informações Pessoais"
          icon={
            <MaterialCommunityIcons
              name="circle-edit-outline"
              size={24}
              color="#0167E9"
            />
          }
        />
      </S.Box>
      <S.Form>
        <Controller
          name="document"
          control={form.control}
          render={({ field }) => (
            <Input
              editable={false}
              label="CPF"
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
            />
          )}
        />
        <Controller
          name="name"
          control={form.control}
          render={({ field }) => (
            <Input
              label="Nome"
              editable={false}
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
            />
          )}
        />
        <Controller
          name="email"
          control={form.control}
          render={({ field }) => (
            <Input
              label="E-mail"
              editable={false}
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
            />
          )}
        />
      </S.Form>
      <S.Box>
        <S.Title>Senha e Segurança</S.Title>
        <Button
          variants="ghost"
          title="Alterar senha"
          icon={
            <MaterialCommunityIcons
              name="circle-edit-outline"
              size={24}
              color="#0167E9"
            />
          }
        />
      </S.Box>
    </>
  )
}
