import { Alert } from 'react-native'
import { useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { api } from '@/lib/axios'
import { AppError } from '@/utils/app-error'

import { Input } from '@/components/input'
import { Button } from '@/components/button'

import * as S from './styles'

const formSchema = z.object({
  name: z.string().min(1, {
    message: 'O nome deve ter no mínimo 1 caracteres',
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function Environment() {
  const router = useRouter()
  const { addressId, addressName } = useLocalSearchParams<{
    addressId: string
    addressName: string
  }>()

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  })

  async function onSubmit({ name }: FormValues) {
    try {
      setIsLoading(true)

      await api.post('/environment', {
        addressId: Number(addressId),
        name,
      })

      router.push({
        pathname: '/(client)/dashboard/environments/',
        params: { addressId, addressName },
      })
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
    <S.Container>
      <Controller
        name="name"
        control={form.control}
        render={({ field, fieldState }) => (
          <Input
            label="Nome do ambiente"
            autoCorrect={false}
            placeholder="Digite o nome do ambiente"
            returnKeyType="next"
            value={field.value}
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Button
        title="Criar"
        isLoading={isLoading}
        disabled={isLoading}
        onPress={form.handleSubmit(onSubmit)}
      />
    </S.Container>
  )
}
