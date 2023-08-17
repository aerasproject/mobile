import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'expo-router'
import { z } from 'zod'

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
  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: FormValues) {
    // TODO: SEND DATA TO API
    console.log(data)
    router.push('/(client)/dashboard/')
  }

  return (
    <>
      <HeaderBlue
        height={120}
        subtitle="Hora de logar"
        title="Entrar na sua conta"
      />
      <S.Container>
        <S.Content>
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
            <Button title="Entrar" onPress={form.handleSubmit(onSubmit)} />
          </S.WrapperInputs>
        </S.Content>
      </S.Container>
    </>
  )
}
