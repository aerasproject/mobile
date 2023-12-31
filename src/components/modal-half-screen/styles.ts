import styled from 'styled-components/native'

type Props = {
  height: string
}

export const Overlay = styled.TouchableOpacity`
  flex: 1;
  height: '100%';
  background-color: 'rgba(0, 0, 0, 0.5)';
`

export const Content = styled.TouchableOpacity<Props>`
  margin-top: auto;
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
  padding: 16px 0px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  height: ${({ height }) => height};
  align-items: center;
`

export const ActionIcon = styled.View`
  margin: 16px 8px;
  width: 60px;
  height: 6px;
  border-radius: 8px;
  opacity: 0.4;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`
