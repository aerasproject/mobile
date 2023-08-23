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
          {items.map((item) => (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker>
      </S.Wrapper>

      {!!errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  )
}
