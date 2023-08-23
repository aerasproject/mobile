import { useState } from 'react'
import { Alert } from 'react-native'
import { Link, useRouter } from 'expo-router'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { voltages, capacities, brands, types } from '@/static-data/equipment'

import { useAddress } from '@/hooks/use-address'

import { EquipmentDTO } from '@/dtos'

import { api } from '@/lib/axios'

import { AppError } from '@/utils/app-error'

import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { Select } from '@/components/select'

import * as S from './styles'

const formSchema = z.object({
  name: z.string().min(3),
  brand: z.string().min(1),
  voltage: z.string().min(1),
  capacity: z.string().min(1),
  type: z.string().min(1),
  environmentId: z.coerce.number().min(1),
})

type FormValues = z.infer<typeof formSchema>

type EquipmentFormProps = {
  initialData: EquipmentDTO | null
}

export function EquipmentForm({ initialData }: EquipmentFormProps) {
  const router = useRouter()
  const { mainAddress } = useAddress()

  const [isLoading, setIsLoading] = useState(false)

  const [formattedEnvironments, _] = useState(() => {
    return mainAddress.environments.map((env) => ({
      id: env.id,
      label: env.name,
      value: env.id.toString(),
    }))
  })

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: '',
      brand: '',
      voltage: '',
      capacity: '',
      type: '',
      environmentId: undefined,
    },
  })

  async function onSubmit(data: FormValues) {
    try {
      setIsLoading(true)

      if (initialData) {
        // TODO: Update Equipment
        console.log(data)
      } else {
        // TODO: Create Equipment

        await api.post('/equipment', {
          brand: data.brand,
          capacity: data.capacity,
          environmentId: data.environmentId,
          name: data.name,
          type: data.type,
          voltage: data.voltage,
          addressId: mainAddress.id,
        })

        router.push('/(client)/dashboard/equipments/')
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

  const title = initialData ? 'Editar equipamento' : 'Cadastrar equipamento'
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
              label="Nome do equipamento"
              autoCorrect={false}
              placeholder="Ex: Split do João"
              returnKeyType="next"
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="brand"
          control={form.control}
          render={({ field, fieldState }) => (
            <Select
              label="Marca"
              items={brands}
              selectedValue={field.value}
              onValueChange={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="type"
          control={form.control}
          render={({ field, fieldState }) => (
            <Select
              label="Tipo"
              items={types}
              selectedValue={field.value}
              onValueChange={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="capacity"
          control={form.control}
          render={({ field, fieldState }) => (
            <Select
              label="Capacidade"
              items={capacities}
              selectedValue={field.value}
              onValueChange={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="voltage"
          control={form.control}
          render={({ field, fieldState }) => (
            <Select
              label="Voltagem"
              items={voltages}
              selectedValue={field.value}
              onValueChange={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="environmentId"
          control={form.control}
          render={({ field, fieldState }) => (
            <Select
              label="Ambiente"
              items={formattedEnvironments}
              selectedValue={field.value}
              onValueChange={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Button
          title={action}
          isLoading={isLoading}
          disabled={isLoading}
          onPress={form.handleSubmit(onSubmit)}
        />
        <Link href="/(client)/dashboard/home/">Cancelar</Link>
      </S.Form>
    </>
  )
}
