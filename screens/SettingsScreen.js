import React from 'react'
import { Text, IconButton, Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { signOut, getAuth } from 'firebase/auth'

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
        <SafeAreaView>
            <Button
            mode='contained-tonal'
                icon="logout"
                onPress={handleSignOut}
            >
                Sign out
            </Button>
        </SafeAreaView>
    )
}

