import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})``

export const Content = styled.View`
  flex: 1;
  padding: 26px;
  justify-content: space-between;
`

export const Span = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  text-align: center;
`

export const WrapperInputs = styled.View`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
