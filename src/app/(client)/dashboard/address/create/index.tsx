import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useRouter } from 'expo-router'
import { z } from 'zod'

import { Input } from '@/components/input'
import { Button } from '@/components/button'

import * as S from './styles'
import { Text } from 'react-native'

const formSchema = z.object({
  name: z.string().min(3),
  street: z.string().min(3),
  number: z.string().min(3),
  complement: z.string().optional(),
  neighborhood: z.string().min(3),
  city: z.string().min(3),
  state: z.string().min(3),
})

type FormValues = z.infer<typeof formSchema>

export default function AddressCreate() {
  const router = useRouter()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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
    // TODO: SEND DATA TO API
    console.log(data)
  }

  return (
    <S.Container>
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
            <Input
              label="Estado"
              autoCorrect={false}
              placeholder="Ex: SP, RJ, etc..."
              returnKeyType="next"
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Button
          title="Continuar para ambientes"
          onPress={form.handleSubmit(onSubmit)}
        />
        <Link href="/(client)/dashboard/home/">
          <Text>Cancelar</Text>
        </Link>
      </S.Form>
    </S.Container>
  )
}
