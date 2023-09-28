import { DefaultTheme } from 'styled-components'
import styled, { css } from 'styled-components/native'

import { ButtonProps } from '@/components/button'

type Props = Pick<ButtonProps, 'variants'>

const containerModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.COLORS.BLUE_800};
  `,
  'primary-outline': (theme: DefaultTheme) => css`
    background-color: transparent;
    border: 1px solid ${theme.COLORS.BLUE_800};
  `,
  'white-outline': (theme: DefaultTheme) => css`
    background-color: transparent;
    border: 1px solid ${theme.COLORS.WHITE};
  `,
  'danger-outline': (theme: DefaultTheme) => css`
    background-color: transparent;
    border: 1px solid ${theme.COLORS.ERROR};
  `,
  'danger-ghost': () => css`
    background-color: transparent;
  `,
  ghost: () => css`
    background-color: transparent;
  `,
}

const textModifiers = {
  primary: (theme: DefaultTheme) => css`
    color: ${theme.COLORS.WHITE};
  `,
  'primary-outline': (theme: DefaultTheme) => css`
    color: ${theme.COLORS.BLUE_800};
  `,
  'white-outline': (theme: DefaultTheme) => css`
    color: ${theme.COLORS.WHITE};
  `,
  'danger-outline': (theme: DefaultTheme) => css`
    color: ${theme.COLORS.ERROR};
  `,
  'danger-ghost': (theme: DefaultTheme) => css`
    color: ${theme.COLORS.ERROR};
  `,
  ghost: (theme: DefaultTheme) => css`
    color: ${theme.COLORS.BLUE_800};
  `,
}

export const Container = styled.TouchableOpacity<Props>`
  ${({ theme, variants }) => css`
    min-width: 120px;

    padding: 16px 16px;
    border-radius: 8px;
    gap: 8px;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    ${!!variants && containerModifiers[variants](theme)}
  `}
`

export const Title = styled.Text<Props>`
  ${({ theme, variants }) => css`
    font-weight: 500;
    font-size: ${theme.FONT_SIZE.MD}px;
    ${!!variants && textModifiers[variants](theme)}
  `}
`

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
}))``
