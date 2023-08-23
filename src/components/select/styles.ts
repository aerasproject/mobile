import styled from 'styled-components/native'

type Props = {
  hasError?: string
}

export const Container = styled.View`
  gap: 8px;
  background-color: transparent;
  border-radius: 8px;
`

export const Label = styled.Text<Props>`
  padding-left: 8px;
  color: ${({ theme, hasError }) =>
    hasError ? theme.COLORS.ERROR : theme.COLORS.GRAY_500};
`

export const Wrapper = styled.View<Props>`
  border-radius: 8px;
  height: 56px;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  border: ${({ theme, hasError }) =>
    hasError
      ? `1px solid ${theme.COLORS.ERROR}`
      : `1px solid ${theme.COLORS.GRAY_200}`};
`

export const ErrorMessage = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  color: ${({ theme }) => theme.COLORS.ERROR};
`
