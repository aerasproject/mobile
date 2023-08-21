import styled, { DefaultTheme, css } from 'styled-components/native'

import { LoadingProps } from '@/components/loading'

type Props = Pick<LoadingProps, 'variants'>

const containerModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.COLORS.BRAND};
  `,
  secondary: () => css`
    background-color: transparent;
  `,
}

export const Container = styled.View<Props>`
  ${({ theme, variants }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;

    ${!!variants && containerModifiers[variants](theme)}
  `}
`

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_LIGHT,
}))``
