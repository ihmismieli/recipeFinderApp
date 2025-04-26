import { Button, useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { signOut} from 'firebase/auth'
import { StyleSheet } from 'react-native'
import { FIREBASE_AUTH } from '../FirebaseConfig'
import ThemeSettings from '../components/theme/ThemeSettings'

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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    signOut: {
        margin: 20,
    }
})

