/* Handles the favorites of the user */
/* Docs: https://firebase.google.com/docs/database/web/start
*/

import { IconButton } from 'react-native-paper'
import { useFavorites } from '../../context/FavoritesContext';

export default function FavoriteIconButton({ recipe }) {

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
            iconColor={isFavorite(recipe.idMeal) ? "red" : undefined}
            onPress={handleFavoritePress}
        />
    )
}

