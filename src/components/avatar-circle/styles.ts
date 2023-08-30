import styled, { css, DefaultTheme } from 'styled-components/native'

import { AvatarCircleProps } from '@/components/avatar-circle'

type Props = Pick<AvatarCircleProps, 'size'>

const containerModifiers = {
  sm: () => css`
    width: 48px;
    height: 48px;
  `,
  md: () => css`
    width: 64px;
    height: 64px;
  `,
  lg: () => css`
    width: 88px;
    height: 88px;
  `,
}

const titleModifiers = {
  sm: (theme: DefaultTheme) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
  `,
  md: (theme: DefaultTheme) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
  `,
  lg: (theme: DefaultTheme) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
  `,
}

export const Container = styled.View<Props>`
  ${({ size }) => css`
    padding: 6px;
    border-radius: 999px;
    align-items: center;
    justify-content: center;

    border: 3px solid ${({ theme }) => theme.COLORS.CYAN};
    background-color: ${({ theme }) => theme.COLORS.BLUE_800};

    ${!!size && containerModifiers[size]}
  `}
`

export const Title = styled.Text<Props>`
  ${({ theme, size }) => css`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: bold;

    ${!!size && titleModifiers[size](theme)}
  `}
`
