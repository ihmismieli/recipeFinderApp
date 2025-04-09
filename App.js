import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import { PaperProvider, BottomNavigation } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth'
import { FIREBASE_AUTH } from './FirebaseConfig';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigation from './components/navigation/TabNavigation';
import RecipeScreen from './screens/RecipeScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const [user, setUser] = useState(null);

  useEffect (() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    }, []);
  })


  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          { user ? (
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