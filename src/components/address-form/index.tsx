import { useState } from 'react'
import { Alert } from 'react-native'
import { Link, useRouter } from 'expo-router'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import statesBR from '@/static-data/states-br'

import { api } from '@/lib/axios'

import { useAuth } from '@/hooks/use-auth'

import { AppError } from '@/utils/app-error'

import { AddressDTO } from '@/dtos/address-dto'

import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { Select } from '@/components/select'

import * as S from './styles'

const formSchema = z.object({
  name: z.string().min(3),
  street: z.string().min(3),
  number: z.string().min(3),
  complement: z.string().optional(),
  neighborhood: z.string().min(3),
  city: z.string().min(3),
  state: z.string().min(1),
})

type FormValues = z.infer<typeof formSchema>

type AddressFormProps = {
  initialData: AddressDTO | null
}

export function AddressForm({ initialData }: AddressFormProps) {
  const { user } = useAuth()
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  })

  async function onSubmit(data: FormValues) {
    try {
      setIsLoading(true)

      if (initialData) {
        await api.put<AddressDTO>(`/client/address/${initialData.id}`, data)

        router.push('/(client)/dashboard/addresses/')
      } else {
        const response = await api.post<AddressDTO>('/client/address', {
          userId: user.id,
          street: data.street,
          number: data.number,
          city: data.city,
          state: data.state,
          name: data.name,
          complement: data.complement,
          neighborhood: data.neighborhood,
        })

        router.push({
          pathname: '/(client)/dashboard/environments/',
          params: {
            addressId: response.data.id,
            addressName: response.data.name,
          },
        })
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

  const title = initialData ? 'Editar endereço' : 'Cadastrar endereço'
  const action = initialData ? 'Salvar alterações' : 'Cadastrar'

  return (
    <>
      <S.Header>
        <S.Title>{title}</S.Title>
      </S.Header>
      <S.Form>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              label="Nome para o local"
              autoCorrect={false}
              placeholder="Ex: Casa, Trabalho, etc..."
              returnKeyType="next"
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="street"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              label="Rua"
              autoCorrect={false}
              placeholder="Ex: Rua das Flores"
              returnKeyType="next"
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="number"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              label="Número"
              autoCorrect={false}
              placeholder="Ex: 1234"
              returnKeyType="next"
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="complement"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              label="Complemento (opcional)"
              autoCorrect={false}
              placeholder="Ex: Blocos A, Apto 34"
              returnKeyType="next"
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="neighborhood"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              label="Bairro"
              autoCorrect={false}
              placeholder="Ex: Centro, Jardim, etc..."
              returnKeyType="next"
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="city"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              label="Cidade"
              autoCorrect={false}
              placeholder="Ex: São Paulo, Rio de Janeiro, etc..."
              returnKeyType="next"
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="state"
          control={form.control}
          render={({ field, fieldState }) => (
            <Select
              label="Estado"
              items={statesBR}
              errorMessage={fieldState.error?.message}
              selectedValue={field.value}
              onValueChange={field.onChange}
            />
          )}
        />
        {initialData && (
          <Link
            asChild
            href={{
              pathname: '/(client)/dashboard/environments/',
              params: {
                addressId: initialData.id,
                addressName: initialData.name,
              },
            }}
          >
            <Button
              variants="primary-outline"
              title="Ver e adicionar ambientes"
              isLoading={isLoading}
              disabled={isLoading}
            />
          </Link>
        )}
        <Button
          title={action}
          onPress={form.handleSubmit(onSubmit)}
          isLoading={isLoading}
          disabled={isLoading}
        />
        <Link href="/(client)/dashboard/home/">Cancelar</Link>
      </S.Form>
    </>
  )
}
