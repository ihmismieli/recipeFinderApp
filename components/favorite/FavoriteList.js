/* Shows a list of user's favorites on the FavoritesScreeen (Faves tab) */

import { ActivityIndicator, Card } from 'react-native-paper';
import FavoriteIconButton from './FavoriteIconButton';
import { View, StyleSheet, FlatList } from 'react-native';
import { useFavorites } from '../../context/FavoritesContext';
import { useNavigation } from '@react-navigation/native';

export default function FavoriteList({ }) {

    const { favorites, loading } = useFavorites();
    const navigation = useNavigation();

    if (loading)
        return <ActivityIndicator></ActivityIndicator>

    return (
        <View style={styles.container}>
            
            <FlatList
                data={favorites}
                scrollEnabled={false}
                renderItem={({ item }) => (

                    <Card
                        style={styles.cards}
                        onPress={() => navigation.navigate('Recipe', { meal: item })}
                    >

                        <Card.Title
                            title={item.strMeal}
                            right={() => <FavoriteIconButton recipe={item} />}
                        />

                        <Card.Cover source={{ uri: item.strMealThumb }} />

                    </Card>
                )}
                
                keyExtractor={(item) => item.idMeal.toString()}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    cards: {
        marginVertical: 10,
    }, 
    container: {
        padding:10,
    }
})