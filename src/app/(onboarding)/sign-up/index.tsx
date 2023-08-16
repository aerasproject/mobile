import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { HeaderBlue } from '@/components/header-blue'

import * as S from './styles'

const formSchema = z
  .object({
    name: z.string().min(3),
    cpf: z.string().min(11),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas devem ser iguais',
    path: ['confirmPassword'],
  })

type FormValues = z.infer<typeof formSchema>

export default function SignUp() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      cpf: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  async function onSubmit(data: FormValues) {
    // TODO: SEND DATA TO API
    console.log(data)
  }

  return (
    <>
      <HeaderBlue
        height={120}
        subtitle="Crie sua conta"
        title="Criar cadastro"
      />
      <S.Container>
        <S.Content>
          <S.WrapperInputs>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Input
                  label="Nome completo"
                  autoCapitalize="words"
                  returnKeyType="next"
                  placeholder="Digite seu nome completo"
                  value={field.value}
                  onBlur={field.onBlur}
                  onChangeText={field.onChange}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="cpf"
              control={form.control}
              render={({ field, fieldState }) => (
                <Input
                  label="CPF"
                  placeholder="Digite seu CPF"
                  returnKeyType="next"
                  keyboardType="numeric"
                  autoCorrect={false}
                  value={field.value}
                  onBlur={field.onBlur}
                  onChangeText={field.onChange}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Input
                  label="E-mail"
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  placeholder="Digite seu e-mail"
                  returnKeyType="next"
                  value={field.value}
                  onBlur={field.onBlur}
                  onChangeText={field.onChange}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Input
                  label="Senha"
                  secureTextEntry
                  autoCorrect={false}
                  returnKeyType="next"
                  placeholder="Digite sua senha"
                  value={field.value}
                  onBlur={field.onBlur}
                  onChangeText={field.onChange}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="confirmPassword"
              control={form.control}
              render={({ field, fieldState }) => (
                <Input
                  label="Repita sua senha"
                  placeholder="Digite sua senha novamente"
                  secureTextEntry
                  autoCorrect={false}
                  returnKeyType="next"
                  value={field.value}
                  onBlur={field.onBlur}
                  onChangeText={field.onChange}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />
            <S.Span>
              Ao se cadastrar, você aceita os
              <S.Strong> Termos de Serviço </S.Strong>e as
              <S.Strong> Políticas de Privacidade</S.Strong>
            </S.Span>
            <Button
              title="Criar cadastro"
              onPress={form.handleSubmit(onSubmit)}
            />
          </S.WrapperInputs>
        </S.Content>
      </S.Container>
    </>
  )
}
