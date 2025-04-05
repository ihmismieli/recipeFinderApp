import { useState } from 'react'
import { StyleSheet, View, Keyboard, ScrollView } from 'react-native';
import { Surface, Text, Avatar, Card } from 'react-native-paper';
import { searchMealsByCategory } from '../../Api';
import ListMeals from './ListMeals';

export default function Categories({handleCategoryPress}) {


    return (
        <View>
            <View style={styles.categories}>
                <Card mode='elevated' style={styles.card} onPress={() => handleCategoryPress('Chicken')}>
                    <Card.Content style={styles.cardContent}>
                        <Avatar.Image size={55} source={require('../../assets/category/chicken.jpg')} />
                        <Text variant="bodyMedium" style={styles.text}>Chicken</Text>
                    </Card.Content>
                </Card>
                <Card style={styles.card} mode='elevated' onPress={() => handleCategoryPress('Vege')}>
                    <Card.Content style={styles.cardContent}>
                        <Avatar.Image size={55} source={require('../../assets/category/vegetarian.jpg')} />
                        <Text variant="bodyMedium" style={styles.text}>Vege</Text>
                    </Card.Content>
                </Card>
                <Card style={styles.card} mode='elevated' onPress={() => handleCategoryPress('Beef')}>
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
        width: 90,
        height: 90,
        marginHorizontal: 10,
        alignContent: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    cardContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        marginTop: 3,
        paddingBottom: 10,
    }

});