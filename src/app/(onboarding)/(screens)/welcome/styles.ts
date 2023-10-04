import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #dbf2ff;
`
export const Content = styled.View`
  flex: 1;
  padding: 45px 26px;
  justify-content: space-between;
`

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  line-height: 24px;
`
