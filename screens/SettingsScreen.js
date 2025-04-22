import React from 'react'
import { Text, IconButton, Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { signOut, getAuth } from 'firebase/auth'
import { StyleSheet, ImageBackground } from 'react-native'

export default function SettingsScreen() {

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
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../assets/favorites.jpg')}
                style={styles.image}
            >
                <Button
                    mode='contained-tonal'
                    icon="logout"
                    onPress={handleSignOut}
                    style={styles.signOut}
                    contentStyle={{ flexDirection : 'row-reverse'}}
                >
                    Sign out
                </Button>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
      },
      signOut: {
        margin: 20,
        
      }
})

