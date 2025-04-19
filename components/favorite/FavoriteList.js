/* Shows a list of user's favorites on the FavoritesScreeen (Faves tab) */

import { ActivityIndicator, Card } from 'react-native-paper';
import FavoriteIconButton from './FavoriteIconButton';
import { View } from 'react-native';
import { FlatList } from 'react-native';
import { useFavorites } from '../../context/FavoritesContext';
import { useNavigation } from '@react-navigation/native';

export default function FavoriteList({ }) {

    const { favorites, loading } = useFavorites();
    const navigation = useNavigation();

    if (loading)
        return <ActivityIndicator></ActivityIndicator>
    
    return (
        <View>
            <FlatList
                data={favorites}
                renderItem={({ item }) => (
                    <Card
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


