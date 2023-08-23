import styled, { css } from 'styled-components/native'

type Props = {
  isMain: boolean
}

export const Container = styled.View<Props>`
  ${({ theme, isMain }) => css`
    padding: 16px;
    background-color: ${isMain ? theme.COLORS.GRAY_200 : 'transparent'};
    border-radius: 10px;
    border: 1px solid #d4d4d4;
    margin-bottom: 48px;
    position: relative;
  `}
`

export const Circle = styled.View`
  position: absolute;
  top: -30px;
  left: 16px;
  background-color: ${({ theme }) => theme.COLORS.BRAND};
  border-radius: 999px;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  padding: 4px;
`

export const CircleText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  font-weight: bold;
`

export const Badge = styled.Text`
  ${({ theme }) => css`
    padding: 8px 16px;
    background-color: ${theme.COLORS.GREEN_LIGHT};
    color: ${theme.COLORS.GRAY_500};
    border-radius: 999px;
  `}
`

export const AddressWrap = styled.View``

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const AddressName = styled.Text`
  font-size: 20px;
  margin-top: 24px;
  font-weight: 500;
`

export const AddressStreet = styled.Text`
  margin-top: 8px;
  color: #747474;
`

export const BtnIcon = styled.Pressable`
  background-color: '#0051B6';
  padding: 8px;
  border-radius: 999px;
`
