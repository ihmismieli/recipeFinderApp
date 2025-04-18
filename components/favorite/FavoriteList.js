import { useEffect, useInsertionEffect, useState } from 'react'
import { Card } from 'react-native-paper';
import { FIREBASE_DB } from '../../FirebaseConfig';
import { ref, get } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import FavoriteIconButton from './FavoriteIconButton';
import { View } from 'react-native';
import { FlatList } from 'react-native';

export default function FavoriteList() {

    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const userId = auth.currentUser.uid;

    useEffect(() => {
        if(userId){
            handleFavoriteRecipes();
        }
    }, [userId, favorites]);

    const handleFavoriteRecipes = async () => {
        setLoading(true)
        try {
            const favoritesRef = ref(FIREBASE_DB, `favorites/${userId}`);
            const snapshot = await get(favoritesRef);
            const favoritesData = snapshot.val();

            if (favoritesData) {
                const favoriteRecipes = Object.values(favoritesData);
                setFavorites(favoriteRecipes);
            } else {
                setFavorites([]);
            }
        } catch (error) {
            console.log("Error fetching favorites", error);
        } finally {
            setLoading(false);
        }
    }


    const handleFavoriteChange = () => {
        handleFavoriteRecipes();
    }
    return (
        <View>
            <FlatList
                data={favorites}
                renderItem={({ item }) => (
                    <Card>
                        <Card.Title
                            title={item.strMeal}
                            right={() => <FavoriteIconButton recipe={item} onFavoriteChange={handleFavoriteChange}/>}
                        />

                        <Card.Cover source={{ uri: item.strMealThumb }} />

                    </Card>
                )}
                keyExtractor={(item) => item.idMeal.toString()}
            />
        </View>
    )
}


