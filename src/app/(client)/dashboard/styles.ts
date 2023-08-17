import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled.ScrollView`
  flex: 1;
`

export const Header = styled(LinearGradient).attrs((prop) => ({
  colors: prop.theme.COLORS.LINEAR_GRADIENT,
}))`
  min-height: 300px;
  gap: 24px;
  padding: 26px;
  align-items: center;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Content = styled.View`
  flex: 1;
  padding: 26px;
`

export const Text = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
`
