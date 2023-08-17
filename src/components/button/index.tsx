import { forwardRef } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { Container, Loading, Title } from './styles'

export type ButtonProps = TouchableOpacityProps & {
  title: string
  isLoading?: boolean
  variants?: 'primary' | 'primary-outline' | 'white-outline'
}

export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ title, isLoading = false, variants = 'primary', ...rest }, ref) => {
    return (
      <Container
        ref={ref}
        variants={variants}
        activeOpacity={0.7}
        disabled={isLoading}
        {...rest}
      >
        {isLoading ? <Loading /> : <Title variants={variants}>{title}</Title>}
      </Container>
    )
  },
)

Button.displayName = 'Button'
