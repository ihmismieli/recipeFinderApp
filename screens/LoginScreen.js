// Login and signup of the application
// Auth docs: https://firebase.google.com/docs/auth/web/password-auth#web_4


import React, { use, useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { ActivityIndicator, Text, TextInput, Portal, Dialog, Button } from 'react-native-paper'
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider,signInWithRedirect } from 'firebase/auth';

export default function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;



    //signing in to the application
    const signIn = async () => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user);
            Alert.alert('Successfully logged in!');
        } catch (error) {
            console.log(error);
            Alert.alert('Sign in failed: ', error.message)
        } finally {
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
            <Text variant='displayLarge'>Delli Recipies </Text>
            <Text variant='headlineLarge'>Login</Text>
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
                {loading ? (<ActivityIndicator animating={true} size='large' />
                ) : (
                    <>
                        <Button onPress={signIn} mode='contained-tonal'>Login</Button>
                        <Button onPress={signUp} mode='elevated'>Create accout</Button>
                    </>
                )}
            </View>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderRadius: 10,
    },
    inputView: {
        width: '80%',
        marginTop: 20,
    }
});
