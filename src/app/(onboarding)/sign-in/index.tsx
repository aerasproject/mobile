import { useAuth } from '@/hooks/use-auth'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'expo-router'
import { Alert } from 'react-native'
import { z } from 'zod'

import { AppError } from '@/utils/app-error'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { HeaderBlue } from '@/components/header-blue'

import * as S from './styles'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type FormValues = z.infer<typeof formSchema>

export default function SignIn() {
  const { signIn } = useAuth()
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit({ email, password }: FormValues) {
    try {
      setIsLoading(true)
      await signIn(email, password)
      router.push('/dashboard/home/')
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
        height={120}
        subtitle="Hora de logar"
        title="Entrar na sua conta"
      />
      {/* TODO: REMOVE CONTAINER AND USE ONLY CONTENT */}
      <S.Container>
        <S.Form>
          <S.WrapperInputs>
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
            <Button
              title="Entrar"
              isLoading={isLoading}
              disabled={isLoading}
              onPress={form.handleSubmit(onSubmit)}
            />
          </S.WrapperInputs>
        </S.Form>
      </S.Container>
    </>
  )
}
