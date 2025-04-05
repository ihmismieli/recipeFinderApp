/* For listing found meals from the HomeScreen's search */
/* Docs: https://reactnative.dev/docs/flatlist
        https://callstack.github.io/react-native-paper/docs/components/Card/
*/

import React from 'react'
import { StyleSheet } from 'react-native'
import { FlatList, Text} from 'react-native'
import { Card } from 'react-native-paper'

export default function ListMeals({foundMeals}) {
  return (
    <FlatList 
        style={styles.flatlist}
        scrollEnabled={false}
        data={foundMeals}
        renderItem={({item}) => 
            <Card>
                <Card.Title title={item.strMeal} />
                <Card.Content>
                    <Text>{item.strArea}</Text>
                </Card.Content>
                <Card.Cover source={{uri: item.strMealThumb}} />
            </Card>
        }
    />
  )
}

const styles = StyleSheet.create({
    flatlist: {
        width: '90%',
        alignSelf: 'center'
    }
})