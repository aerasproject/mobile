import styled from 'styled-components/native'
import { Image } from 'expo-image'

import imageAC from '@/assets/images/air-conditioning.png'

export const Container = styled.View`
  gap: 6px;
  align-items: center;
`

export const ImageAC = styled(Image).attrs({
  source: imageAC,
  contentFit: 'contain',
  transition: 1000,
  alt: 'Air Conditioning',
})`
  width: 100%;
  height: 108px;
`

export const EnvironmentName = styled.Text`
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
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 500;
`
