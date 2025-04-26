import { MD3LightTheme as DefaultTheme} from 'react-native-paper';

import { DefaultTheme as NavigationTheme } from '@react-navigation/native'

export const theme = {
    ...DefaultTheme,

    colors: {
      ...DefaultTheme.colors,

      primary: '#fff',       //effects tab
      onPrimary: 'black',  
      primaryContainer: '#fff',    
      secondary: '#00897B',
      background: '#EADDD7',
      // background: '#A7CAB1',
      surface: '#fff', 
      // onSurface: 'black',
      secondaryContainer: "rgb(242, 233, 239)", //SegmentedButtons
      // surfaceVariant: "rgb(222, 227, 235)",
      onSurfaceVariant: "black", //effects tab text
      elevation: {
      "level0": "transparent",
      "level1": "rgb(248, 242, 251)",
      "level2": "rgb(242, 233, 239)", //tab bar color
      "level3": "rgb(240, 231, 246)",
      "level4": "rgb(239, 229, 245)",
      "level5": "rgb(236, 226, 243)"
    },
    
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


  // export const navigationTheme = {

  //   ...NavigationTheme,
  // colors: {
  //   ...NavigationTheme.colors,

   
  //   card: '#ffffff',       
  //   text: 'black',          
  //   primary: 'black',       
  //   border: '#dddddd',    
  // }
  // }

// import { MD3LightTheme as DefaultTheme, MD3DarkTheme} from 'react-native-paper';

// export const lightTheme = {
//     ...DefaultTheme,
//     colors: {
//       ...DefaultTheme.colors,

//       // primary: 'black',       
//       // onPrimary: '#ffffff',      
//       // secondary: '#00897B',
//       // background: '#FFF8F0',   

      
//     },

//     fonts: {
//       ...DefaultTheme.fonts,

//       bodyLarge: {
//         fontFamily: 'Roboto_300Light',
//         fontWeight: '300',
//         fontSize: 16,
//       },
//       bodyMedium: {
//         fontFamily: 'Roboto_400Regular',
//         fontSize: 14,
//       },
//       bodySmall: {
//         fontFamily: 'Roboto_300Light',
//         fontSize: 12, 
//       },

//       displayLarge: {
//         fontFamily: 'Roboto_300Light',
//         fontSize: 70,
//       },
//       displayMedium: {
//         fontFamily: 'Roboto_300Light',
//         fontSize: 50,
//       },
//       displaySmall: {
//         fontFamily: 'Roboto_400Regular',
//         fontSize: 24,
//       },

//       headlineSmall: {
//         fontFamily: 'Roboto_300Light',
//         fontSize: 24,
        
//       },

//     },
//   };


//   export const darkTheme = {
//     ...MD3DarkTheme,
//     colors: {
//       ...MD3DarkTheme.colors,
//       primary: 'rgb(220, 184, 255)', 
//       onPrimary: 'rgb(236, 232, 239)',
//       background: 'rgb(29, 27, 30)',
//       surface: 'rgb(29, 27, 30)',
//     },

//     fonts: {
//       ...MD3DarkTheme.fonts,
//       bodyLarge: {
//         fontFamily: 'Roboto_300Light',
//         fontWeight: '300',
//         fontSize: 16,
//       },
//       bodyMedium: {
//         fontFamily: 'Roboto_400Regular',
//         fontSize: 14,
//       },
//       bodySmall: {
//         fontFamily: 'Roboto_300Light',
//         fontSize: 12,
//       },
//       displayLarge: {
//         fontFamily: 'Roboto_300Light',
//         fontSize: 70,
//       },
//       displayMedium: {
//         fontFamily: 'Roboto_300Light',
//         fontSize: 50,
//       },
//       displaySmall: {
//         fontFamily: 'Roboto_400Regular',
//         fontSize: 24,
//       },
//       headlineSmall: {
//         fontFamily: 'Roboto_300Light',
//         fontSize: 24,
//       },
//     },
//   };