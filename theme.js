import { DefaultTheme } from 'react-native-paper';

export const theme = {
    ...DefaultTheme,
    fonts: {
        ...DefaultTheme.fonts,
        regular: { fontFamily: 'Roboto_400Regular' },
        medium: { fontFamily: 'Roboto_400Regular' },
        bold: { fontFamily: 'Roboto_700Bold' },
        thin: { fontFamily: 'Roboto_300Light'},
      },
}