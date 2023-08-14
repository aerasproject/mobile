import styled from 'styled-components/native'

export const VariantsText = {
  primary: {
    color: '#fff',
  },
  'primary-outline': {
    color: '#0051b6',
  },
}

export const VariantsContainer = {
  primary: {
    backgroundColor: '#0051b6',
    borderWidth: 1,
    borderColor: '#0051b6',
  },
  'primary-outline': {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#0051b6',
  },
}

export const Container = styled.TouchableOpacity`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BRAND};
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
}))``
