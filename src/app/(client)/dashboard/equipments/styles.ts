import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  gap: 16px;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BRAND};
  padding: 16px 32px;
`
