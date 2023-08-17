import { LinearGradient } from 'expo-linear-gradient'

import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #dbf2ff;
`

export const Header = styled(LinearGradient)`
  height: 300px;
  padding: 26px;
  justify-content: flex-end;
`

export const Title = styled.Text`
  font-weight: 500;
  font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
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
