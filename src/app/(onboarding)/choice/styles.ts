import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { Image as ExpoImage } from 'expo-image'

import aerasLogo from '@/assets/images/aeras.png'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled(LinearGradient)`
  padding: 32px;
  align-items: center;
`

export const Image = styled(ExpoImage).attrs({
  source: aerasLogo,
  contentFit: 'contain',
})`
  width: 160px;
  height: 160px;
`

export const Text = styled.Text`
  line-height: 24px;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Content = styled.View`
  flex: 1;
  padding: 32px 24px;
  justify-content: space-between;
`

export const Wrapper = styled.View`
  display: flex;
  align-items: center;
  gap: 32px;
`
