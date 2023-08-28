/* eslint-disable prettier/prettier */
import { forwardRef } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { Container, Loading, Title } from './styles'

export type ButtonProps = TouchableOpacityProps & {
  title: string
  isLoading?: boolean
  icon?: React.ReactNode
  variants?:
  | 'primary'
  | 'primary-outline'
  | 'white-outline'
  | 'danger-outline'
  | 'danger-ghost'
  | 'ghost'
}

export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ title, isLoading = false, variants = 'primary', icon, ...rest }, ref) => {
    return (
      <Container
        ref={ref}
        variants={variants}
        activeOpacity={0.7}
        disabled={isLoading}
        {...rest}
      >
        {isLoading ? <Loading /> : (
          <>
            {icon}
            <Title variants={variants}>{title}</Title>
          </>
        )}
      </Container>
    )
  },
)

Button.displayName = 'Button'
