import { StyleSheet} from 'react-native'
import {  Text, Card} from 'react-native-paper'

export default function RecipeInstructions({ instructions }) {
    return (
        <Card style={styles.card}>
            <Card.Content>
                <Text variant='bodyLarge'>{instructions}</Text>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
      marginVertical: 20,
    }
  });