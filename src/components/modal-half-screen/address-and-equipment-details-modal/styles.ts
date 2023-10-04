import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 8px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px;
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
`

export const CircleText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 16px;
  font-weight: bold;
`

export const Content = styled.View`
  flex: 1;
  padding: 8px;
  gap: 16px;
`

export const Box = styled.View`
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 8px;
  gap: 16px;
`

export const Label = styled.Text`
  font-weight: bold;
  line-height: 24px;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  border-bottom-width: 1px;
  border-bottom-color: #dfdfdf;
  padding-bottom: 16px;
`

export const AddressText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-weight: 500;
`

export const Badge = styled.Text`
  ${({ theme }) => css`
    padding: 8px 16px;
    font-weight: 500;
    background-color: ${theme.COLORS.SUCCESS};
    color: ${theme.COLORS.WHITE};
    border-radius: 999px;
    margin-bottom: 16px;
  `}
`

export const Wrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px;
`
