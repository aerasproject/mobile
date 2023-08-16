import styled from 'styled-components/native'

type ContainerProps = {
  height: number
}

export const Container = styled.View<ContainerProps>`
  min-height: ${({ height }) => height}px;
  background-color: #0167e9;
  justify-content: flex-end;
  padding: 24px;
`

export const Title = styled.Text`
  color: #ffffff;
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-weight: 500;
`

export const Subtitle = styled.Text`
  color: #ffffff;
  opacity: 0.5;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`
