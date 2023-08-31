import styled, { css } from 'styled-components/native'
import { Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Image as ExpoImage } from 'expo-image'

import workerChoice from '@/assets/svg/worker-choice.svg'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

type Props = {
  variant: 'primary' | 'secondary'
}

export const Container = styled.View`
  flex: 1;
`

export const Header = styled(LinearGradient)`
  padding: 32px;
  align-items: center;
  gap: 8px;
`

export const Image = styled(ExpoImage).attrs({
  source: workerChoice,
  contentFit: 'contain',
})`
  width: ${SCREEN_WIDTH * 0.8}px;
  height: 206px;
`

export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Content = styled.View`
  flex: 1;
  padding: 32px 24px;
  gap: 16px;
`

export const CardContainer = styled.TouchableOpacity<Props>`
  ${({ theme, variant }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border: 1px solid ${theme.COLORS.BRAND};

    gap: 16px;
    padding: 24px;
    border-radius: 8px;
    background-color: ${variant === 'primary'
      ? theme.COLORS.BLUE_800
      : 'transparent'};
  `}
`

export const Wrapper = styled.View`
  flex: 1;
  gap: 8px;
`

export const CardTitle = styled.Text<Props>`
  ${({ theme, variant }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-weight: bold;

    color: ${variant === 'primary' ? theme.COLORS.WHITE : theme.COLORS.BRAND};
  `}
`

export const CardDescription = styled.Text<Props>`
  ${({ theme, variant }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    line-height: 20px;

    color: ${variant === 'primary'
      ? theme.COLORS.WHITE
      : theme.COLORS.GRAY_500};
  `}
`
