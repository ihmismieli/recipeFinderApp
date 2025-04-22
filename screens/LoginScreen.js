// Login and signup of the application
// Auth docs: https://firebase.google.com/docs/auth/web/password-auth#web_4


import React, { useState } from 'react'
import { View, StyleSheet, Alert, ImageBackground, Image } from 'react-native'
import { ActivityIndicator, Text, TextInput, Portal, Dialog, Button, Snackbar } from 'react-native-paper'
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

export default function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [dialogText, setDialogText] = useState('');
    const [dialogTitle, setDialogTitle] = useState('');

    const hideDialog = () => setVisible(false);

    const auth = FIREBASE_AUTH;

    //signing in to the application
    const signIn = async () => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
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
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
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
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={ require('../assets/basilTomatoes.jpg')}
                resizeMode="cover" 
                style={styles.image}
            >
            <Text variant='displayLarge' style={styles.title}>DELISH</Text>
            <Text variant='displayMedium' style={styles.title}>DISH</Text>
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
                        
                        <Button style={styles.button} onPress={signIn} mode='contained-tonal'>Login</Button>
                        <Button style={styles.button} onPress={signUp} mode='elevated'>Create accout</Button>

                    </View>
                )}
            </View>

            <Portal>

                <Dialog visible={visible} onDismiss={hideDialog} style={styles.dialog}>
                    <Dialog.Icon icon="alert" />
                    <Dialog.Title style={styles.title}>{dialogTitle}</Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium">{dialogText}</Text>
                    </Dialog.Content>
                    <Dialog.Actions >
                        <Button onPress={hideDialog}>Done</Button>
                    </Dialog.Actions>
                </Dialog>

            </Portal>
            </ImageBackground>
        </SafeAreaView >

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
    fork: {
        width: 80,
        height: 80,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
      },
    input: {
        marginVertical: 6,
        height: 50,
        borderRadius: 10,
    },
    inputView: {
        width: '80%',
        marginTop: 20,
    },
    text: {
        padding: 20,
        textAlign: 'center',
        color: '#fff'
    },
    title: {
        textAlign: 'center',
        alignItems: 'center',
        color: "#fff",
        fontFamily: 'Roboto_100Thin_Italic'
    },

});
