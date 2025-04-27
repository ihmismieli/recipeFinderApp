// Login and signup of the application
// Auth docs: https://firebase.google.com/docs/auth/web/password-auth#web_4


import { useState } from 'react'
import { View, StyleSheet, Alert, ImageBackground, StatusBar, ScrollView } from 'react-native'
import { ActivityIndicator, Text, TextInput, Portal, Dialog, Button, useTheme } from 'react-native-paper'
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen() {

    const theme = useTheme();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [dialogText, setDialogText] = useState('');
    const [dialogTitle, setDialogTitle] = useState('');

    const hideDialog = () => setVisible(false);

    //signing in to the application
    const signIn = async () => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
            const user = userCredential.user;
            console.log(user);
        } catch (error) {
            console.log(error);
            setDialogTitle('Ohh no!')
            setDialogText(`Sign in failed: ${error.message} `)
        } finally {
            setVisible(true);
            setLoading(false);
        }
    }

    //signing up to the application
    const signUp = async () => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
            const user = userCredential.user;
            console.log(user);
            Alert.alert('Account created succesfully!!')
        } catch (error) {
            console.log(error);
            Alert.alert('Sign up failed: ', error.message)
        } finally {
            setLoading(false);
        }
    }

    return (

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content"
            />

            <View style={styles.container}>

                <ImageBackground
                    source={require('../assets/basilTomatoes.jpg')}
                    resizeMode="cover"
                    style={styles.image}
                >

                    <View style={styles.titleContainer}>
                        <Text
                            variant='displayLarge'
                            style={[styles.title, { color: theme.colors.primary }]}
                        >
                            DELISH
                        </Text>
                        <Text
                            variant='displayMedium'
                            style={[styles.title, { color: theme.colors.primary }]}
                        >
                            DISH
                        </Text>
                    </View>

                    <Text variant='labelLarge' style={styles.text}>Login or Create account to enter the world of yummy recipes!</Text>
                    
                    <View style={styles.inputView}>

                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            autoCapitalize='none'
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Password'
                            autoCapitalize='none'
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry
                            right={<TextInput.Icon icon="eye" />}
                        />

                        {loading ? (
                            <ActivityIndicator animating={true} size='large' />
                        ) : (
                            <View style={styles.buttons}>

                                <Button
                                    style={styles.button}
                                    onPress={signIn}
                                    mode='contained-tonal'
                                    buttonColor='#83B692'
                                >
                                    Login
                                </Button>

                                <Button
                                    style={styles.button}
                                    onPress={signUp}
                                    mode='elevated'
                                    buttonColor='#ECE2E0'
                                    labelStyle={{ color: 'black' }}
                                >
                                    Create account
                                </Button>

                            </View>
                        )}

                    </View>

                    <Portal>

                        <Dialog
                            visible={visible}
                            onDismiss={hideDialog}
                            style={styles.dialog}
                        >
                            <Dialog.Icon
                                icon="alert"
                                color={theme.colors.onPrimary}
                            />

                            <Dialog.Title style={styles.title}>{dialogTitle}</Dialog.Title>
                            
                            <Dialog.Content>
                                <Text style={[styles.text, { color: theme.colors.onPrimary }]} variant="bodyMedium">{dialogText}</Text>
                            </Dialog.Content>

                            <Dialog.Actions >
                                <Button
                                    onPress={hideDialog}
                                    textColor={theme.colors.onPrimary}
                                >
                                    Done
                                </Button>
                            </Dialog.Actions>
                            
                        </Dialog>

                    </Portal>

                </ImageBackground>
            </View >
        </ScrollView>

    )
}


const styles = StyleSheet.create({
    buttons: {
        marginTop: 45,
    },
    button: {
        marginVertical: 8,
    },
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    input: {
        marginVertical: 6,
        height: 50,
        backgroundColor: '#F9F1F1',
    },
    inputView: {
        width: '80%',
        marginTop: 20,
    },
    text: {
        padding: 20,
        textAlign: 'center',
        color: '#fff',
        fontSize: 15,
        fontFamily: 'Roboto_300Light'
    },
    title: {
        textAlign: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto_300Light'
    },
    titleContainer: {
        marginTop: 50,
    },


});
