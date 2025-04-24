/*
Font docs: 
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
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_200Thin_Italic, Roboto_300Light } from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';

const Stack = createNativeStackNavigator();

export default function App() {

  /* fonts */
  const [loaded, error] = useFonts({
    Roboto_200Thin_Italic,
  });

  useEffect(() => {
    if(loaded || error){
      SplashScreen.hideAsync();
    }
  })

  /*fonts end */

  /* Set the currently authenticated firebase*/
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

    <FavoritesProvider>
      <PaperProvider>
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
      </PaperProvider>
    </FavoritesProvider>
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
