import React, { useState } from 'react'
import { Switch, Text } from 'react-native-paper'
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeContext';


export default function ThemeSettings() {

    const { isDarkMode, toggleTheme } = useTheme();

    const handleToggleSwitch = () => {
        toggleTheme(isDarkMode ? 'light' : 'dark');
    };

    return (
        <View style={styles.container}>
            <Text
                variant='bodyMedium'
                style={styles.text}
            >
                Choose your theme
            </Text>
            <View style={styles.switchContainer}>
                <Text variant='bodyMedium'>
                    {isDarkMode ? 'Dark Mode is On' : 'Light Mode is On'}
                </Text>
                <Switch
                    value={isDarkMode}
                    onValueChange={handleToggleSwitch}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 30,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
    },
    text: {
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 20,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    }
})