/* Handles the favorites of the user */
/* Docs: https://firebase.google.com/docs/database/web/start
*/

import React, { useEffect, useState } from 'react'
import { ActivityIndicator, IconButton } from 'react-native-paper'
import { FIREBASE_DB } from "../../FirebaseConfig"
import { ref, set, remove, get} from 'firebase/database'
import { getAuth } from "firebase/auth";

export default function FavoriteIconButton({ recipe, onFavoriteChange }) {

    const  [isFavorite, setIsFavorite] = useState(false);

    const auth = getAuth();
    const userId = auth.currentUser.uid;

    const recipeRef = ref(FIREBASE_DB, `favorites/${userId}/${recipe.idMeal}`)

    const addFavorite = async() => {
       await set(recipeRef, recipe)
       setIsFavorite(true);
       onFavoriteChange();
    }

    const removeFavorite = async() => {
        await remove(recipeRef)
        setIsFavorite(false);
        onFavoriteChange();
    }

    const handleFavoritePress = () => {
        if(isFavorite){
            removeFavorite();
        } else {
            addFavorite();
        }
    }

    const checkIsFavorite = async () => {
        const snapshot = await get(recipeRef);
        setIsFavorite(snapshot.exists());
    }

    useEffect(() => {
        checkIsFavorite();
    }, [recipe.idMeal]);

    return (
        <IconButton
            icon={isFavorite ?"heart" : "heart-outline"}
            iconColor={isFavorite ? "red" : undefined}
            onPress={handleFavoritePress}

        />
    )
}

