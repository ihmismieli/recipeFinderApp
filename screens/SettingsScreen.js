import React from 'react'
import { Text, IconButton, Button, useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { signOut} from 'firebase/auth'
import { StyleSheet, ImageBackground } from 'react-native'
import { FIREBASE_AUTH } from '../FirebaseConfig'
import ThemeSettings from '../components/settings/ThemeSettings'

export default function SettingsScreen() {

    const theme = useTheme();

    const handleSignOut = async () => {
        try {
            await signOut(FIREBASE_AUTH)
            Alert.alert("Successfully signed out!")
        } catch (error) {
            Alert.alert("Something unexpected happened!")
        }
    }
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            {/* <ImageBackground
                source={require('../assets/favorites.jpg')}
                style={styles.image}
            > */}
            <ThemeSettings />
            <Button
                mode='contained-tonal'
                icon="logout"
                onPress={handleSignOut}
                style={[styles.signOut, { backgroundColor: theme.colors.primary }]}
                contentStyle={{ flexDirection: 'row-reverse' }}
            >
                Sign out
            </Button>
            {/* </ImageBackground> */}
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

