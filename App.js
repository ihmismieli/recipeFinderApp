/*
Docs: 
https://docs.expo.dev/develop/user-interface/fonts/
https://docs.expo.dev/versions/latest/sdk/splash-screen/
*/

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import { PaperProvider, BottomNavigation } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth'
import { FIREBASE_AUTH } from './FirebaseConfig';
import TabNavigation from './components/navigation/TabNavigation';
import RecipeScreen from './screens/RecipeScreen';
import { FavoritesProvider } from './context/FavoritesContext';
// import { DefaultTheme} from 'react-native-paper';
import { theme } from './theme';
import { Roboto_400Regular, Roboto_700Bold, Roboto_300Light, Roboto_200ExtraLight } from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font'; 
import { useMemo } from 'react';




const Stack = createNativeStackNavigator();


export default function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const appContext = useMemo(() =>{
    return {isDarkTheme, setIsDarkTheme};
  })

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_300Light,
    Roboto_200ExtraLight,
  });


  useEffect(() => {
    if (fontsLoaded) {
      console.log('Fonts are loaded');
    } else {
      console.log('Fonts are still loading...');
    }
  }, [fontsLoaded]);

  // Set the currently authenticated firebase user
  const [user, setUser] = useState(null);

  useEffect(() => {
   onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if(user){
        console.log('user', user);
        setUser(user);
      } else {
        setUser(null);
      }
    })
  }, []);


  return (
    <PaperProvider theme={theme}>
    <FavoritesProvider>
    
        <NavigationContainer>
          <Stack.Navigator>
            {user ? (
              <>
                <Stack.Screen name='Inside' component={TabNavigation} options={{ headerShown: false }} />
                <Stack.Screen name="Recipe" component={RecipeScreen} options={{ title: 'Recipe Details' }} />
              </>
            ) : (
              <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
     
    </FavoritesProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// const theme = {
//     ...DefaultTheme,
//     fonts: {
//       ...DefaultTheme.fonts,
//       regular: { fontFamily: 'Roboto_400Regular' },
//       medium: { fontFamily: 'Roboto_400Regular' },
//       bold: { fontFamily: 'Roboto_700Bold' },
//       light: { fontFamily: 'Roboto_300Light' },
//       extra: { fontFamily: 'Roboto_200ExtraLight' },
//     },
//     colors: {
//       background: '#fff'
//     },
//     typography: {
//         headlineSmall: {
//           fontFamily: 'Roboto_400Regular', 
//           fontSize: 0,
//           fontWeight: '400',
//         },
//     }
//   };