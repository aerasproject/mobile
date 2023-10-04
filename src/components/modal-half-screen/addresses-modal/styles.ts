import styled from 'styled-components/native'
import { css } from 'styled-components'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: 8px 24px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: 500;
  margin-bottom: 24px;
`

export const AddressItemContainer = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_200};
    padding: 16px;
    border-radius: 8px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 16px;
  `}
`

export const AddressItemTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_500};
    font-weight: 500;
  `}
`

export const Box = styled.View`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`
