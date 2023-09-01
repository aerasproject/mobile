import styled, { css } from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

type Props = {
  isActive: boolean
}

export const Container = styled.View`
  flex: 1;
  z-index: 1;
`

export const Header = styled.View`
  position: relative;
  padding: 32px;
  gap: 24px;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BRAND};
`

export const CloseIcon = styled(Ionicons).attrs({
  name: 'close-circle-outline',
  size: 40,
  color: '#fff',
})`
  position: absolute;
  top: 24px;
  right: 24px;
`

export const Username = styled.Text`
  text-transform: capitalize;
  text-align: center;
  margin-top: 24px;

  font-weight: bold;
  font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Content = styled.View`
  padding: 54px;
  flex: 1;
  gap: 42px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const ItemNav = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`

export const ItemTitle = styled.Text<Props>`
  ${({ theme, isActive }) => css`
    font-size: ${isActive ? theme.FONT_SIZE.XL : theme.FONT_SIZE.LG}px;
    color: ${isActive ? theme.COLORS.BRAND : theme.COLORS.GRAY_500};
    font-weight: ${isActive ? 'bold' : 'normal'};
  `}
`
