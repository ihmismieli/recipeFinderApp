import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, useTheme } from 'react-native-paper';

export default function RecipeLinkButton({ url }) {

    const theme = useTheme();
    
    return (
        <Button
            style={[styles.button, { backgroundColor: theme.colors.surface }]}
            mode='elevated'
            onPress={() => openURL(url)}
            labelStyle={styles.label}
        >
            Original Recipe
        </Button>
    )
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 20,
    },
    label: {
        fontFamily: 'Roboto_700Bold',
        color: 'black',
        fontSize: 16,
    }
});