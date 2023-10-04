import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 16px;
  gap: 32px;
  border-radius: 16px;
  width: ${SCREEN_WIDTH * 0.9}px;
`

export const Header = styled.View`
  background-color: #fff1dc;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 8px;
`

export const HeaderTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #ffb84e;
`

export const Description = styled.Text`
  font-size: 14px;
  text-align: center;
  padding: 0 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const ButtonsWrapper = styled.View`
  gap: 8px;
`
