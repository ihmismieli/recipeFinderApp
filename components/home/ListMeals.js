/* For listing found meals from the HomeScreen's search */

/* Docs: https://reactnative.dev/docs/flatlist
         https://callstack.github.io/react-native-paper/docs/components/Card/
*/

import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native'
import { Card } from 'react-native-paper'
import FavoriteIconButton from '../favorite/FavoriteIconButton';

export default function ListMeals({ foundMeals }) {

    const navigation = useNavigation();

    return (
        <FlatList
            style={styles.flatlist}
            scrollEnabled={false}
            data={foundMeals}
            renderItem={({ item }) =>
                <Card
                    style={styles.cards}
                    onPress={() => navigation.navigate('Recipe', { meal: item })}
                >
                    <Card.Title
                        title={item.strMeal}
                        titleStyle={styles.cardTitle}
                        right={() => <FavoriteIconButton recipe={item} />}
                    />
                    <Card.Cover source={{ uri: item.strMealThumb }} />
                </Card>
            }
        />
    )
}

const styles = StyleSheet.create({
    flatlist: {
        width: '90%',
        alignSelf: 'center',
    },
    cards: {
        marginVertical: 20,
    },
    cardTitle: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 20,
    }
})