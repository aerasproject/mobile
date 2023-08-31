import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #0167e9;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 16px 24px;
  gap: 8px;
`

export const Title = styled.Text`
  color: #ffffff;
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-weight: 500;
`

export const Subtitle = styled.Text`
  color: #ffffff;
  opacity: 0.5;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`
