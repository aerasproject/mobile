import { DefaultTheme } from 'styled-components'
import styled, { css } from 'styled-components/native'

import { ButtonProps } from '.'

type Props = Pick<ButtonProps, 'type'>

const containerModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.COLORS.BRAND};
  `,
  'primary-outline': (theme: DefaultTheme) => css`
    background-color: transparent;
    border: 1px solid ${theme.COLORS.BRAND};
  `,
}

const textModifiers = {
  primary: (theme: DefaultTheme) => css`
    color: ${theme.COLORS.WHITE};
  `,
  'primary-outline': (theme: DefaultTheme) => css`
    color: ${theme.COLORS.BRAND};
  `,
}

export const Container = styled.TouchableOpacity<Props>`
  ${({ theme, type }) => css`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    border-radius: 6px;

    align-items: center;
    justify-content: center;

    ${!!type && containerModifiers[type](theme)}
  `}
`

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    ${!!type && textModifiers[type](theme)}
  `}
`

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
}))``
