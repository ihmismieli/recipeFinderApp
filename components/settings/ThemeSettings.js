import React, { useState } from 'react'
import { SegmentedButtons, Text, useTheme } from 'react-native-paper'
import { View, StyleSheet } from 'react-native';
// import { useTheme } from '../../context/ThemeContext';


export default function ThemeSettings() {

    const theme = useTheme();

    const [selectedTheme, setSelectedTheme] = useState('light');

    const handleThemeChange = (newTheme) => {
        setSelectedTheme(newTheme);
    }

    return (
        <View style={styles.container}>
            <Text variant='bodyMedium' style={styles.text}>Choose your theme</Text>
            <SegmentedButtons
                value={selectedTheme}
                onValueChange={handleThemeChange}
                buttons={[
                    {
                        value: 'light',
                        label: 'Light',
                        
                    },
                    {
                        value: 'dark',
                        label: 'Dark'
                    },
                ]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        justifyContent:'center',
        alignSelf:'center',
        marginTop: 20,
    },
    text: {
        textAlign: 'center',
        marginVertical:10,
        fontSize: 20,
    }
})