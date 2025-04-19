import React from 'react'
import { StyleSheet} from 'react-native'
import { Button } from 'react-native-paper';

export default function RecipeLinkButton({ url }) {
    return (
        <Button
            style={styles.button}
            mode='elevated'
            onPress={() => openURL(url)}
        >
            Original Recipe
        </Button>
    )
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 20,
    }
});