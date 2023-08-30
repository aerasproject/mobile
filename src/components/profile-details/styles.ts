import styled from 'styled-components/native'

export const Box = styled.View`
  align-items: center;
  margin: 32px 0;
  gap: 8px;
`

export const Form = styled.View`
  gap: 16px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-weight: 500;
`
