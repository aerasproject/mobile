import styled, { css } from 'styled-components/native'
import { Image as ExpoImage } from 'expo-image'

import imageAC from '@/assets/images/air-conditioning.png'

export const Container = styled.ScrollView`
  flex: 1;
`

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BRAND};
  gap: 16px;
  padding: 26px;
  align-items: center;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Content = styled.View`
  flex: 1;
  padding: 26px;
`

export const Text = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const BtnModal = styled.Pressable`
  flex-direction: row;
  gap: 16px;
`

export const MainAddressName = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const EquipmentContainer = styled.View`
  gap: 6px;
  align-items: center;
`

export const ImageAC = styled(ExpoImage).attrs({
  source: imageAC,
  contentFit: 'contain',
  transition: 1000,
  alt: 'Air Conditioning',
})`
  width: 100%;
  height: 108px;
`

export const EquipmentEnv = styled.Text`
  color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  font-weight: bold;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  margin-top: 16px;
`

export const EquipmentName = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: bold;
`

export const EquipmentBrand = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 500;
`

export const Badge = styled.Text`
  ${({ theme }) => css`
    padding: 8px 16px;
    font-weight: 500;
    background-color: ${theme.COLORS.SUCCESS};
    color: ${theme.COLORS.WHITE};
    border-radius: 999px;
    margin-bottom: 16px;
  `}
`
