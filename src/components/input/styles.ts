import { TextInput } from 'react-native'
import styled from 'styled-components/native'

type Props = {
  hasError?: string
}

export const Container = styled.View`
  width: 100%;
  gap: 8px;
  border-radius: 8px;
`

export const Label = styled.Text<Props>`
  padding-left: 8px;
  color: ${({ theme, hasError }) =>
    hasError ? theme.COLORS.ERROR : theme.COLORS.GRAY_500};
`

export const Input = styled(TextInput).attrs<Props>({
  placeholderTextColor: '#96999d',
})<Props>`
  border-radius: 8px;
  opacity: ${({ editable }) => (editable === false ? 0.5 : 1)};
  height: 56px;
  padding: 0 16px;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  border: ${({ theme, hasError }) =>
    hasError
      ? `1px solid ${theme.COLORS.ERROR}`
      : `1px solid ${theme.COLORS.GRAY_200}`};

  background-color: ${({ theme, editable }) =>
    editable === false ? theme.COLORS.BLUE_100 : 'transparent'};
`

export const ErrorMessage = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  color: ${({ theme }) => theme.COLORS.ERROR};
`
