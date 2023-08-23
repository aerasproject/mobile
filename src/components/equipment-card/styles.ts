import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    padding: 16px;
    background-color: ${theme.COLORS.GRAY_100};
    border-radius: 10px;
    border: 1px solid #d4d4d4;
    margin-bottom: 16px;
  `}
`

export const Badge = styled.Text`
  ${({ theme }) => css`
    padding: 8px 16px;
    background-color: ${theme.COLORS.GREEN_LIGHT};
    color: ${theme.COLORS.GRAY_500};
    border-radius: 999px;
  `}
`

export const Name = styled.Text`
  font-size: 20px;
  font-weight: 500;
`
