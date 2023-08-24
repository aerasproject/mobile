import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    padding: 16px;
    background-color: ${theme.COLORS.GRAY_100};
    border-radius: 12px;
    margin-bottom: 16px;
    gap: 16px;
  `}
`

export const Name = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: 500;
`

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

export const PMOCCode = styled.View``

export const PMOCCodeLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`

export const PMOCCodeText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_500};
    font-weight: 500;
  `}
`

export const BtnIcon = styled.Pressable`
  background-color: #0051b6;
  padding: 8px;
  border-radius: 999px;
`
