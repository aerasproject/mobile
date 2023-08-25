import { DefaultTheme } from 'styled-components'
import styled, { css } from 'styled-components/native'

import { ButtonProps } from '.'

type Props = Pick<ButtonProps, 'variants'>

const containerModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.COLORS.BRAND};
  `,
  'primary-outline': (theme: DefaultTheme) => css`
    background-color: transparent;
    border: 1px solid ${theme.COLORS.BRAND};
  `,
  'white-outline': (theme: DefaultTheme) => css`
    background-color: transparent;
    border: 1px solid ${theme.COLORS.WHITE};
  `,
  'danger-outline': (theme: DefaultTheme) => css`
    background-color: transparent;
    border: 1px solid ${theme.COLORS.ERROR};
  `,
  'danger-raw': () => css`
    background-color: transparent;
  `,
}

const textModifiers = {
  primary: (theme: DefaultTheme) => css`
    color: ${theme.COLORS.WHITE};
  `,
  'primary-outline': (theme: DefaultTheme) => css`
    color: ${theme.COLORS.BRAND};
  `,
  'white-outline': (theme: DefaultTheme) => css`
    color: ${theme.COLORS.WHITE};
  `,
  'danger-outline': (theme: DefaultTheme) => css`
    color: ${theme.COLORS.ERROR};
  `,
  'danger-raw': (theme: DefaultTheme) => css`
    color: ${theme.COLORS.ERROR};
  `,
}

export const Container = styled.TouchableOpacity<Props>`
  ${({ theme, variants }) => css`
    height: 56px;
    min-width: 120px;

    padding: 8px 16px;
    border-radius: 6px;

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
