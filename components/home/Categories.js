/* Category buttons on the HomeScreen */

import { StyleSheet, View } from 'react-native';
import { Text, Avatar, Card } from 'react-native-paper';

export default function Categories({ handleCategoryPress }) {

    return (
        <View>
            <View style={styles.categories}>
                <Card
                    mode='elevated'
                    style={styles.card}
                    onPress={() => handleCategoryPress('Chicken')}
                >

                    <Card.Content style={styles.cardContent}>
                        <Avatar.Image size={55} source={require('../../assets/category/chicken.jpg')} />
                        <Text variant="bodyMedium" style={styles.text}>Chicken</Text>
                    </Card.Content>

                </Card>

                <Card
                    style={styles.card}
                    mode='elevated'
                    onPress={() => handleCategoryPress('Vege')}
                >

                    <Card.Content style={styles.cardContent}>
                        <Avatar.Image size={55} source={require('../../assets/category/vegetarian.jpg')} />
                        <Text variant="bodyMedium" style={styles.text}>Vege</Text>
                    </Card.Content>

                </Card>

                <Card
                    style={styles.card}
                    mode='elevated'
                    onPress={() => handleCategoryPress('Beef')}
                >

                    <Card.Content style={styles.cardContent}>
                        <Avatar.Image size={55} source={require('../../assets/category/beef.jpg')} />
                        <Text variant="bodyMedium" style={styles.text}>Beef</Text>
                    </Card.Content>

                </Card>

            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    categories: {
        flexDirection: 'row',
        marginVertical: 20,
        alignSelf: 'center',
    },
    card: {
        width: 100,
        height: 100,
        marginHorizontal: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    cardContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
    }

});