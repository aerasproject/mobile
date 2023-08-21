import { Container, LoadIndicator } from './styles'

export type LoadingProps = {
  variants?: 'primary' | 'secondary'
}

export function Loading({ variants = 'primary' }: LoadingProps) {
  return (
    <Container variants={variants}>
      <LoadIndicator size={60} />
    </Container>
  )
}
