/* FavoritesContext created with the help of:
    React.dev: https://react.dev/reference/react/useContext
    Firebase: https://firebase.google.com/docs/database/web/start
    Medium: https://medium.com/@idundunmd13/how-i-used-a-usecontext-hook-to-create-a-bookmark-feature-in-a-mern-application-5597750867b0
    and ChatGPT
*/

import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { FIREBASE_DB } from '../FirebaseConfig';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { ref, set, remove, get } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            if (user) {
              setUserId(user.uid);
            } else {
              setUserId(null);
              setFavorites([]); 
            }
          });
    }, []);

    useEffect(() => {
        if (userId) {
            loadFavorites();
        }
    }, [userId]);

    //loads favorites from the firebase db by a user
    const loadFavorites = async () => {
        setLoading(true);
        try {
            const favoritesRef = ref(FIREBASE_DB, `favorites/${userId}`);
            const snapshot = await get(favoritesRef);
            const data = snapshot.val();
            setFavorites(data ? Object.values(data) : []);
        } catch (error) {
            console.error('Error loading favorites: ', error)
        } finally {
            setLoading(false);
        }
    };

    //Is a recipe hearted (favorite)
    const isFavorite = (recipeId) => {
        return favorites.some(favorite => favorite.idMeal === recipeId);
    }

    const addFavorite = async (recipe) => {
        const recipeRef = ref(FIREBASE_DB, `favorites/${userId}/${recipe.idMeal}`);
        await set(recipeRef, recipe);
        setFavorites(prev => [...prev, recipe]);
    };

    const removeFavorite = async (recipeId) => {
        const recipeRef = ref(FIREBASE_DB, `favorites/${userId}/${recipeId}`);
        await remove(recipeRef);
        setFavorites(prev => prev.filter(recipe => recipe.idMeal !== recipeId));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, isFavorite, addFavorite, removeFavorite, loading }}>
            {children}
        </FavoritesContext.Provider>
    );

};

export const useFavorites = () => useContext(FavoritesContext);