import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { Image as ExpoImage } from 'expo-image'

import aerasLogo from '../../../../assets/logo.png'

export const Container = styled.ScrollView`
  flex: 1;
`

export const Header = styled(LinearGradient)`
  height: 300px;
  padding: 26px;
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
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
  line-height: 24px;
`

export const Content = styled.View`
  flex: 1;
  padding: 45px 26px;
  justify-content: space-between;
`

export const WrapperButtons = styled.View`
  display: flex;
  flex-direction: columns;
  gap: 32px;
`
