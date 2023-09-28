import { useState } from 'react'
import { Alert } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '@/hooks/use-auth'
import { z } from 'zod'

import { AppError } from '@/utils/app-error'

import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { HeaderBlue } from '@/components/header-blue'

import * as S from './styles'

const formSchema = z
  .object({
    name: z.string().min(3, {
      message: 'O nome deve ter no mínimo 3 caracteres',
    }),
    cpf: z.string().min(11, {
      message: 'O CPF deve ter no mínimo 11 caracteres',
    }),
    email: z.string().email({
      message: 'Digite um e-mail válido',
    }),
    password: z.string().min(6, {
      message: 'A senha deve ter no mínimo 6 caracteres',
    }),
    confirmPassword: z.string().min(6, {
      message: 'A senha deve ter no mínimo 6 caracteres',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas devem ser iguais',
    path: ['confirmPassword'],
  })

type FormValues = z.infer<typeof formSchema>

export default function SignUp() {
  const { signUp } = useAuth()
  const router = useRouter()
  const { type } = useLocalSearchParams<{ type: 'client' | 'worker' }>()

  const [isLoading, setIsLoading] = useState(false)

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
    try {
      await signUp({
        name: data.name,
        email: data.email,
        password: data.password,
        document: data.cpf,
        // TODO: Remove this hard coded role and replace it with a dynamic one
        role: 'ADMIN',
      })

      if (type === 'client') {
        router.push('/(client)/dashboard/home/')
      }

      if (type === 'worker') {
        router.push('/(onboarding)/sign-up/worker-choice/')
      }
    } catch (error) {
      const isAppError = error instanceof AppError
      if (isAppError) {
        Alert.alert(error.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <HeaderBlue
        subtitle="Crie sua conta"
        title="Criar cadastro"
        badge={type === 'client' ? 'Cliente' : 'Prestador de serviço'}
      />
      <S.Container>
        <S.Content>
          <S.Form>
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
              isLoading={isLoading}
              disabled={isLoading}
              onPress={form.handleSubmit(onSubmit)}
            />
          </S.Form>
        </S.Content>
      </S.Container>
    </>
  )
}
