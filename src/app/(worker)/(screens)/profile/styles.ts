import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'stretch',
  },
})`
  flex: 1;
`

export const Header = styled.View`
  align-items: center;
  padding: 16px;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.BRAND};
`

export const Username = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
  font-weight: 500;
  text-transform: capitalize;
`

export const UserType = styled.Text`
  color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 500;
`

export const Content = styled.View`
  padding: 0 16px;
`
