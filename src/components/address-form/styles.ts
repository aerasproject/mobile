import styled from 'styled-components/native'

export const Form = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 26px;
`

export const Select = styled.View`
  border-radius: 8px;
  height: 56px;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  border: ${({ theme }) => `1px solid ${theme.COLORS.GRAY_100}`};
`

export const ErrorMessage = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  color: ${({ theme }) => theme.COLORS.ERROR};
`
