/*
Docs: 
https://docs.expo.dev/develop/user-interface/fonts/
https://docs.expo.dev/versions/latest/sdk/splash-screen/
*/


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import { PaperProvider } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth'
import { FIREBASE_AUTH } from './FirebaseConfig';
import TabNavigation from './components/navigation/TabNavigation';
import RecipeScreen from './screens/RecipeScreen';
import { FavoritesProvider } from './context/FavoritesContext';
// import { DefaultTheme} from 'react-native-paper';
import { Roboto_400Regular, Roboto_700Bold, Roboto_300Light, Roboto_200ExtraLight } from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font';
import { useTheme, ThemeProvider } from './context/ThemeContext';
import { theme, navigationTheme } from './theme';


const Stack = createNativeStackNavigator();


export default function App() {

  // const { theme } = useTheme();

  // Fonts start

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

  //Fonts end

  // Set the currently authenticated firebase user
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        console.log('user', user);
        setUser(user);
      } else {
        setUser(null);
      }
    })
  }, []);


  return (
    <ThemeProvider>
      <PaperProvider theme={theme}>
        <FavoritesProvider>
          <NavigationContainer theme={navigationTheme}>
            <Stack.Navigator>
              {user ? (
                <>
                  <Stack.Screen
                    name='Inside'
                    component={TabNavigation}
                    options={{ headerShown: false }} 
                    />
                  <Stack.Screen
                    name="Recipe"
                    component={RecipeScreen}
                    options={{ title: 'Recipe Details' }} 
                    />
                </>
              ) : (
                <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
              )}
            </Stack.Navigator>
          </NavigationContainer>

        </FavoritesProvider>
      </PaperProvider>
    </ThemeProvider>
  );
}
