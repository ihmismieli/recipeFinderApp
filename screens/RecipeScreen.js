import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import Recipe from '../components/recipe/Recipe'
import { searchMealByMealId } from '../Api'

export default function RecipeScreen({ route }) {


    // const {mealId} = route.params;

    // const [meal, setMeal] = useState(null);

    // useEffect( async () => {
    //   try {
    //     const data = await searchMealByMealId(mealId);
    //     console.log("Meal id data: ", data.meals)
    //     setMeal(data.meals)
    //   } catch (error) {
    //     console.error("Error in fetching a meal: ", error)
    //   }
    // }), [mealId];
    
  return (
    <SafeAreaView>
        <Text>Recipes</Text>
        <Recipe />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
})