import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
`

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BRAND};
  gap: 16px;
  padding: 26px;
  align-items: center;
`

export const Content = styled.View`
  flex: 1;
  padding: 26px;
`

export const NewEquipmentBtn = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const NewEquipmentText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
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
