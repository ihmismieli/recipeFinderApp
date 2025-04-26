/* Handles the favorites of the user */

import { IconButton } from 'react-native-paper'
import { useFavorites } from '../../context/FavoritesContext';

export default function FavoriteIconButton({ recipe, style }) {

    const { isFavorite, addFavorite, removeFavorite } = useFavorites();

    const handleFavoritePress = () => {
        if (isFavorite(recipe.idMeal)){
            removeFavorite(recipe.idMeal);
        } else {
            addFavorite(recipe);
        }
    };

    return (
        <IconButton
            icon={isFavorite(recipe.idMeal) ?"heart" : "heart-outline"}
            iconColor={isFavorite(recipe.idMeal) ? "#F9ADA0" : "#F9ADA0"}
            onPress={handleFavoritePress}
            style={style}
        />
    )
}

