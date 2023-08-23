import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  gap: 16px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-weight: bold;
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`
