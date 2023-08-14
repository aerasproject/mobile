import { forwardRef } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import {
  Container,
  Loading,
  Title,
  VariantsContainer,
  VariantsText
} from './styles';

type Props = TouchableOpacityProps & {
  title: string
  type?: 'primary' | 'primary-outline'
  isLoading?: boolean
}

export const Button = forwardRef<TouchableOpacity, Props>(({
  title,
  isLoading = false,
  type = 'primary',
  ...rest
}, ref) => {
  return (
    <Container
      ref={ref}
      activeOpacity={0.7}
      disabled={isLoading}
      style={VariantsContainer[type]}
      {...rest}
    >
      {isLoading
        ? <Loading />
        : (
          <Title style={VariantsText[type]}>
            {title}
          </Title>
        )
      }
    </Container>
  );
});