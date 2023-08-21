import styled from 'styled-components/native'
import { css } from 'styled-components'

export const Container = styled.View`
  flex: 1;
  gap: 16px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-weight: bold;
`

export const AddressItemContainer = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_100};
    padding: 16px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    border: 1px solid ${theme.COLORS.GRAY_300};
  `}
`

export const AddressItemTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`
