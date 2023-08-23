import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  gap: 32px;
  padding: 32px 26px;
`

export const Header = styled.View`
  align-items: center;
  gap: 2px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-weight: 500;
`

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const EnvironmentCard = styled.View`
  background-color: #f8f8f8;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const EnvironmentCardTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-weight: 500;
`
