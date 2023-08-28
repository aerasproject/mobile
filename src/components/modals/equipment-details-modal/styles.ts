import { css } from 'styled-components'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  gap: 16px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-size: 20px;
  font-weight: 500;
`

export const Circle = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BRAND};
  padding: 6px;
  width: 64px;
  height: 64px;
  border-radius: 999px;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.COLORS.BLUE_100};
`

export const CircleText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 16px;
  font-weight: bold;
`

export const Box = styled.View`
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 8px;
  gap: 16px;
`

export const BoxHeader = styled.View`
  gap: 8px;
  align-items: flex-start;
  border-bottom-width: 1px;
  padding-bottom: 16px;
  border-bottom-color: #dfdfdf;
`

export const EquipmentName = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: 20px;
  font-weight: 500;
`

export const Badge = styled.Text`
  ${({ theme }) => css`
    padding: 8px 16px;
    background-color: ${theme.COLORS.BRAND};
    color: ${theme.COLORS.WHITE};
    border-radius: 999px;
    font-weight: 500;
  `}
`

export const Wrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px;
`

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
`
