import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 26px;
  gap: 16px;
`

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BRAND};
  padding: 16px 32px;
`
