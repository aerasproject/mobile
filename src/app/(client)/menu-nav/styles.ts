import styled from 'styled-components/native'
import { Link } from 'expo-router'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  padding: 26px;
  gap: 16px;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BRAND};
`

export const Username = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.XXXL};
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Content = styled.View`
  padding: 26px;
  gap: 40px;
`

export const ItemNav = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`

export const ItemTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
`

export const ItemSubtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  color: ${({ theme }) => theme.COLORS.GRAY_500};
`
