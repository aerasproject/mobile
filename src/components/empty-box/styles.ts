import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  border-radius: 8px;
  gap: 16px;
  padding: 16px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-weight: 500;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`
