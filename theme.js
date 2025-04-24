import { MD3LightTheme as DefaultTheme} from 'react-native-paper';

export const theme = {
    ...DefaultTheme,
    fonts: {
      ...DefaultTheme.fonts,
      regular: { fontFamily: 'Roboto_400Regular' },
      medium: { fontFamily: 'Roboto_400Regular' },
      bold: { fontFamily: 'Roboto_700Bold' },
      light: { fontFamily: 'Roboto_300Light' },
      extra: { fontFamily: 'Roboto_200ExtraLight' },
    },
    typography: {
        headlineSmall: {
          fontFamily: 'Roboto_400Regular', 
          fontSize: 0,
          fontWeight: '400',
        },
    }
  };

// export const theme = {
//     ...DefaultTheme,
//     fonts: {
//         ...DefaultTheme.fonts,
//         regular: { fontFamily: 'Roboto_400Regular' },
//         medium: { fontFamily: 'Roboto_400Regular' },
//         bold: { fontFamily: 'Roboto_700Bold' },
//         light: { fontFamily: 'Roboto_300Light' },
//         extra: { fontFamily: 'Roboto_200ExtraLight' },
//     },
//     colors: {
//         ...DefaultTheme.colors,
//         primary: '#fff',
//         surfaceDisabled: "rgba(26, 28, 30, 0.12)",
//         onSurfaceDisabled: "rgba(26, 28, 30, 0.38)",
//         backdrop: "rgba(43, 49, 55, 0.4)",
//         backgroundContainer: "rgb(212, 227, 255)",
//         container: "rgb(0, 28, 58)",
//         onBackgroundContainer: "rgb(0, 28, 58)"
//     },
// }