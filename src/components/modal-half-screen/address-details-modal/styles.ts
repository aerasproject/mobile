import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BLUE_800};
  height: 120px;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
`

export const TitleHeader = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 40px;
  font-weight: bold;
`

export const Content = styled.View`
  gap: 16px;

  border-radius: 8px;
  align-items: flex-start;
  padding: 16px;

  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Box = styled.View``

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
`

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const Wrapper = styled.View`
  border-top-width: 1px;
  border-top-color: #dfdfdf;
  padding-top: 16px;

  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
  margin-top: 16px;
`
