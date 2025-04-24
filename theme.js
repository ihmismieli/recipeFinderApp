import { MD3LightTheme as DefaultTheme} from 'react-native-paper';

export const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      
      primary: 'black',       
      onPrimary: '#ffffff',      
      secondary: '#00897B',
      background: '#FFF8F0',   
    },

    fonts: {
      ...DefaultTheme.fonts,

      bodyLarge: {
        fontFamily: 'Roboto_300Light',
        fontWeight: '300',
        fontSize: 16,
      },
      bodyMedium: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 14,
      },
      bodySmall: {
        fontFamily: 'Roboto_300Light',
        fontSize: 12, 
      },

      displayLarge: {
        fontFamily: 'Roboto_300Light',
        fontSize: 70,
      },
      displayMedium: {
        fontFamily: 'Roboto_300Light',
        fontSize: 50,
      },
      displaySmall: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 24,
      },

      headlineSmall: {
        fontFamily: 'Roboto_300Light',
        fontSize: 24,
        
      },

    },
  };
