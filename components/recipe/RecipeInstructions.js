import { StyleSheet} from 'react-native'
import {  Text, Card, useTheme} from 'react-native-paper'

export default function RecipeInstructions({ instructions }) {

     const theme = useTheme();
    return (
        <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
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