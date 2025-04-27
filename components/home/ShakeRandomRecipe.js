import { useEffect } from 'react'

import { useNavigation } from '@react-navigation/native';
import RNShake from 'react-native-shake';

export default function ShakeRandomRecipe() {

    const navigation = useNavigation();

    const searchRandomMeal = async () => {
        try {
            const data = await getRandomMeal();
            const meal = data.meals[0];
            navigation.navigate('Recipe', { meal });
        } catch (error) {
            console.error('Error in fetching random meal:', error);
        }
    };

    useEffect(() => {
        const subscription = RNShake.addListener(() => {
            searchRandomMeal();
        });

        return () => {
            subscription.remove();
        };
    }, []);

    return null;

}

