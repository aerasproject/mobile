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
}

export const Container = styled.TouchableOpacity<Props>`
  ${({ theme, variants }) => css`
    width: 100%;
    padding: 8px 16px;
    min-height: 56px;
    max-height: 56px;
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
