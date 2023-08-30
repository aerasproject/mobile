import styled, { css, DefaultTheme } from 'styled-components/native'

import { BadgeProps } from '@/components/badge'

type Props = Pick<BadgeProps, 'variants'>

const containerModifiers = {
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.COLORS.SUCCESS};
  `,
  warning: (theme: DefaultTheme) => css`
    background-color: ${theme.COLORS.WARNING};
  `,
  danger: (theme: DefaultTheme) => css`
    border: 1px solid ${theme.COLORS.ERROR};
  `,
}

const titleModifiers = {
  success: (theme: DefaultTheme) => css`
    color: ${theme.COLORS.WHITE};
  `,
  warning: (theme: DefaultTheme) => css`
    color: ${theme.COLORS.WHITE};
  `,
  danger: (theme: DefaultTheme) => css`
    color: ${theme.COLORS.WHITE};
  `,
}

export const Container = styled.View<Props>`
  ${({ theme, variants }) => css`
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    border-radius: 999px;

    ${!!variants && containerModifiers[variants](theme)}
  `}
`

export const Title = styled.Text<Props>`
  ${({ theme, variants }) => css`
    font-weight: 500;

    ${!!variants && titleModifiers[variants](theme)}
  `}
`
