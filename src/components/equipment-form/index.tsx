import { useState } from 'react'
import { Alert } from 'react-native'
import { Link } from 'expo-router'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { EquipmentDTO } from '@/dtos'

import { AppError } from '@/utils/app-error'

import { Input } from '@/components/input'
import { Button } from '@/components/button'

import * as S from './styles'

const formSchema = z.object({
  name: z.string().min(3),
})

type FormValues = z.infer<typeof formSchema>

type EquipmentFormProps = {
  initialData: EquipmentDTO | null
}

export function EquipmentForm({ initialData }: EquipmentFormProps) {
  // const { user } = useAuth()
  // const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: '',
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
        console.log(data)
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
