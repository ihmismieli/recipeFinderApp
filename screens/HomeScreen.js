import React from 'react'
import { Alert, View } from 'react-native'
import { Text, IconButton } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { signOut, getAuth } from 'firebase/auth'

export default function HomeScreen() {

    const auth = getAuth();

    const handleSignOut = async () => {
        try {
           await signOut(auth) 
           Alert.alert("Successfully signed out!")
        } catch (error) {
            Alert.alert("Something unexpected happened!")
        }
    }

  return (
    <SafeAreaView>
        <Text>Home</Text>
        <IconButton 
        icon='logout'
        onPress={handleSignOut}
        />
        <Text>HALOOO</Text>
    </SafeAreaView>
  )
}
