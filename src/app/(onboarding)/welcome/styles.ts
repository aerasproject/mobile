import { LinearGradient } from 'expo-linear-gradient';

import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #DBF2FF;
`

export const Header = styled(LinearGradient)`
  height: 300px;
  padding: 26px;
  justify-content: flex-end;
`

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 45px 26px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
  font-weight: 500;
  color: #fff;
`

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY}; 
  line-height: 24px;
`

