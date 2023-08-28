import { useState } from 'react'
import { Link, useRouter } from 'expo-router'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { voltages, capacities, brands, types } from '@/static-data/equipment'

import { useAddress } from '@/hooks/use-address'

import { EquipmentDTO } from '@/dtos'

import { useCreateEquipment } from '@/hooks/equipments/use-create'
import { useUpdateEquipment } from '@/hooks/equipments/use-update'

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

  const createEquipment = useCreateEquipment()
  const updateEquipment = useUpdateEquipment()

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
    if (initialData) {
      updateEquipment.mutate({
        brand: data.brand,
        capacity: data.capacity,
        name: data.name,
        type: data.type,
        voltage: data.voltage,
        environmentId: data.environmentId,
        addressId: mainAddress.id,
        equipmentId: initialData.id,
      })
    } else {
      createEquipment.mutate({
        brand: data.brand,
        capacity: data.capacity,
        name: data.name,
        type: data.type,
        voltage: data.voltage,
        environmentId: data.environmentId,
        addressId: mainAddress.id,
      })
    }

    router.push('/(client)/dashboard/equipments/')
  }

  const isLoading = createEquipment.isLoading || updateEquipment.isLoading
  const title = initialData ? 'Editar Equipamento' : 'Cadastrar Equipamento'
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
        <Link asChild href="/(client)/dashboard/home/">
          <Button
            variants="danger-raw"
            title="Cancelar"
            isLoading={isLoading}
            disabled={isLoading}
          />
        </Link>
      </S.Form>
    </>
  )
}
