import { css } from 'styled-components'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BRAND};
  height: 120px;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
`

export const TitleHeader = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 40px;
  font-weight: bold;
`

export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 16px;
`

export const Badge = styled.Text`
  ${({ theme }) => css`
    padding: 8px 16px;
    background-color: ${theme.COLORS.GREEN_LIGHT};
    color: ${theme.COLORS.GRAY_500};
    border-radius: 999px;
  `}
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  margin-top: 16px;
`

export const Subtitle = styled.Text`
  color: #171717;
`

export const Text = styled.Text``

export const Label = styled.Text`
  color: #50555c;
  font-size: 14px;
`

export const Wrapper = styled.View`
  margin-top: 16px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`

export const Box = styled.View``

export const BtnWrapper = styled.View`
  gap: 8px;
  margin-top: 16px;
  justify-content: space-between;
`
