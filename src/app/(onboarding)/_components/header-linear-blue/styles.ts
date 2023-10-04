import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'
import theme from '@/theme'

export const Container = styled(LinearGradient).attrs({
  colors: theme.COLORS.LINEAR_GRADIENT,
})`
  padding: 32px;
  align-items: center;
  min-height: 300px;
  justify-content: flex-end;
`

export const Title = styled.Text`
  font-weight: 500;
  font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: left;
`

export const Content = styled.View``
