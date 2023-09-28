import { Picker, PickerProps } from '@react-native-picker/picker'

import * as S from './styles'

export type ItemProps = {
  label: string
  value: string
}

type SelectProps = PickerProps & {
  label: string
  items: ItemProps[]
  errorMessage?: string
}

export function Select({ label, items, errorMessage, ...rest }: SelectProps) {
  return (
    <S.Container>
      <S.Label hasError={errorMessage}>{label}</S.Label>
      <S.Wrapper hasError={errorMessage}>
        <Picker {...rest}>
          <Picker.Item
            value=""
            label="Selecione uma opção"
            style={{ color: '#9e9e9e' }}
          />
          {items.map((item) => (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
              style={{ color: '#50555C' }}
            />
          ))}
        </Picker>
      </S.Wrapper>
      {!!errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  )
}
