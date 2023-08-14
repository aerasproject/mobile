import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image as ExpoImage } from "expo-image";

// @ts-ignore
import logo from "../../../../assets/logo.png"

export const Container = styled(SafeAreaView)`
  flex: 1;
`

export const Header = styled(LinearGradient)`
  height: 300px;
  padding: 26px;
  align-items: center;
`

export const Image = styled(ExpoImage)
  .attrs({
    source: logo,
    resizeMode: "contain"
  })`
    width: 160;
    height: 160;
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



