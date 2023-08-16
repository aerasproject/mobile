import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { HeaderBlue } from '@/components/header-blue'

import * as S from './styles'

const formSchema = z.object({
  name: z.string().min(3),
  cpf: z.string().min(11),
})

type FormValues = z.infer<typeof formSchema>

export default function SignUp() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      cpf: '',
    },
  })

  async function onSubmit(data: FormValues) {
    console.log(data)
  }

  return (
    <>
      <HeaderBlue
        height={120}
        subtitle="Crie sua conta"
        title="Criar cadastro"
      />
      <S.Container>
        <S.Content>
          <S.WrapperInputs>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Input
                  label="Nome completo"
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
                  value={field.value}
                  onBlur={field.onBlur}
                  onChangeText={field.onChange}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />

            {/* <Input label="Nome completo" placeholder="Digite seu nome" />
            <Input label="CPF" placeholder="Digite seu CPF" />
            <Input label="Email" placeholder="Digite seu e-mail" />
            <Input label="Digite a senha" placeholder="Digite sua senha" />
            <Input label="Repita a senha" placeholder="Repita sua senha" /> */}
            <S.Span>
              Ao se cadastrar, você aceita os Termos de Serviço e as Políticas
              de Privacidade.
            </S.Span>
            <Button
              title="Criar cadastro"
              onPress={form.handleSubmit(onSubmit)}
            />
          </S.WrapperInputs>
        </S.Content>
      </S.Container>
    </>
  )
}
