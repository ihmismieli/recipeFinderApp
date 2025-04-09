/* Screen that opens to a Stack Screen. Includes the details of a recipe*/
/* Docs: https://docs.expo.dev/versions/latest/sdk/linking/
        https://lonelycpp.github.io/react-native-youtube-iframe/install
*/

import { openURL } from 'expo-linking';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image, View, ScrollView } from 'react-native'
import { Button, Checkbox, Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import YoutubePlayer from "react-native-youtube-iframe";
import Youtube from '../components/recipe/Youtube';


export default function RecipesScreen({ route }) {
  

  const { meal } = route.params;

  const navigation = useNavigation(); 

  const [checkedIngredients, setCheckedIngredients] = useState({});

  //Created with the help of ChatGPT
  const checked = (index) => {
    setCheckedIngredients({
    ...checkedIngredients,
    [index] : !checkedIngredients[index],
    });
  };

  const getIngredients = (meal) => {
    const ingredientsWithMeasures = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient) {
        ingredientsWithMeasures.push(
          <View key={i} style={styles.ingredient}>
            <Checkbox
              status={checkedIngredients[i] ? 'checked' : 'unchecked'}
              onPress={() => checked(i)}
            />
            <Text>
              {measure} {ingredient}
            </Text>
          </View>
        )
      }
    }
    return ingredientsWithMeasures;
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
      <YoutubePlayer
            height={250}
            play={false}  
            videoId={meal.strYoutube.split('v=')[1]} 
          />
        <View style={styles.recipe}>
          <Text variant='headlineMedium'>{meal.strMeal}</Text>
          <Text variant='bodyMedium'>{meal.strArea}</Text>
          <Text variant='headlineSmall'>Ingredients</Text>
          <View style={styles.ingredients}>
            {getIngredients(meal)}
          </View>
          <Text>{meal.strInstructions}</Text>
          <Button 
          mode='elevated'
          onPress={() => openURL(meal.strSource)}
          >
           Original Recipe
          </Button>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 200
  },
  ingredient: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ingredients: {
    margin: 10,
    justifyContent: 'center',
  },
  recipe: {
    padding: 20,
  }
})