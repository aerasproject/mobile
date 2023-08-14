import styled from 'styled-components/native'

import theme from '@/theme'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.COLORS.BRAND};
`

export const LoadIndicator = styled.ActivityIndicator.attrs(() => ({
  color: theme.COLORS.GREEN_LIGHT,
}))``
