import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'stretch',
    gap: 8,
  },
})`
  flex: 1;
  padding: 0 16px;
`
