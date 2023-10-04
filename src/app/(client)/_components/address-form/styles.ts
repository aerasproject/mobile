import styled from 'styled-components/native'

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BRAND};
  padding: 16px 32px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: 500;
`

export const Form = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 32px 26px;
`

export const Select = styled.View`
  border-radius: 8px;
  height: 56px;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  border: ${({ theme }) => `1px solid ${theme.COLORS.GRAY_200}`};
`

export const ErrorMessage = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  color: ${({ theme }) => theme.COLORS.ERROR};
`
