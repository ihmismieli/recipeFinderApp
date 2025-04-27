/*
Docs: 
https://docs.expo.dev/develop/user-interface/fonts/
*/

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import { PaperProvider } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth'
import { FIREBASE_AUTH } from './FirebaseConfig';
import TabNavigation from './components/navigation/TabNavigation';
import RecipeScreen from './screens/RecipeScreen';
import { FavoritesProvider } from './context/FavoritesContext';
import { Roboto_400Regular, Roboto_700Bold, Roboto_300Light, Roboto_200ExtraLight } from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font';
import { theme, darkTheme } from './theme';

const Stack = createNativeStackNavigator();

  function MainApp() {

    const { isDarkMode } = useTheme();

    const chosenTheme = isDarkMode ? darkTheme : theme;

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
        <PaperProvider theme={chosenTheme}>
            <FavoritesProvider>
                <NavigationContainer>
                    <StatusBar backgroundColor="#EADDD7" />
                    <Stack.Navigator>
                        {user ? (
                            <>
                                <Stack.Screen
                                    name="Inside"
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
                            <Stack.Screen
                                name="Login"
                                component={LoginScreen}
                                options={{ headerShown: false }}
                            />
                        )}
                    </Stack.Navigator>
                </NavigationContainer>
            </FavoritesProvider>
        </PaperProvider>
    );
}

export default function App() {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
        Roboto_300Light,
        Roboto_200ExtraLight,
    });

    if (!fontsLoaded) {
        return null; 
    }

    return (
        <ThemeProvider>
            <MainApp />
        </ThemeProvider>
    );
}