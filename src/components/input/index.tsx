import { TextInputProps } from 'react-native'

import * as S from './styles'

type InputProps = TextInputProps & {
  label?: string
  errorMessage?: string
}

export function Input({ label, errorMessage, ...rest }: InputProps) {
  return (
    <S.Container>
      {!!label && <S.Label>{label}</S.Label>}
      <S.Input hasError={errorMessage} {...rest} />
      {!!errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  )
}
