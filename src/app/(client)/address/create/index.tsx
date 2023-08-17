import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'expo-router'
import { z } from 'zod'

import { Input } from '@/components/input'
import { Button } from '@/components/button'

import * as S from './styles'

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
    router.push('/(client)/dashboard/')
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
        <Button title="Entrar" onPress={form.handleSubmit(onSubmit)} />
      </S.Form>
    </S.Container>
  )
}
