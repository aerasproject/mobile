import styled, { css } from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'

type Props = {
  isMain: boolean
  isFavorite?: boolean
}

export const Container = styled.View<Props>`
  ${({ theme, isMain }) => css`
    position: relative;

    margin-bottom: 48px;

    padding: 16px;
    border-radius: 10px;
    background-color: ${isMain ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};
    border: 1px solid ${theme.COLORS.GRAY_200};
  `}
`

export const AvatarCircle = styled.View`
  position: absolute;
  top: -30px;
  left: 16px;

  width: 60px;
  height: 60px;
  padding: 4px;

  background-color: ${({ theme }) => theme.COLORS.BRAND};
  border-radius: 999px;
  align-items: center;
  justify-content: center;
`

export const AvatarCircleText = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`

export const StartIcon = styled(AntDesign).attrs<Props>((props) => ({
  name: props.isFavorite ? 'star' : 'staro',
  size: 24,
  color: '#00ECA0',
}))``

export const StarCircle = styled.View`
  position: absolute;
  top: -30px;
  left: 90px;

  width: 60px;
  height: 60px;
  padding: 4px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  align-items: center;
  justify-content: center;
`

export const Content = styled.View`
  margin-top: 24px;
  gap: 8px;
  align-items: flex-start;
`

export const Box = styled.View`
  flex: 1;
`

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
`

export const AddressName = styled.Text`
  font-size: 20px;
  font-weight: 500;
`

export const AddressStreet = styled.Text`
  margin-top: 4px;
  color: #747474;
`

export const BtnIcon = styled.Pressable`
  height: 40px;
  width: 40px;
  background-color: #0051b6;
  padding: 8px;
  border-radius: 999px;
`
