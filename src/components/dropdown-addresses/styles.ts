import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 8px;
  align-items: center;
`

export const BtnModal = styled.Pressable`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`

export const MainAddressName = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const MainAddress = styled.Text`
  text-align: center;
  margin-top: 8px;
  opacity: 0.8;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  line-height: 20px;
`
