/* Stack Screen which includes the details of a recipe*/
/* Docs: https://docs.expo.dev/versions/latest/sdk/linking/
        https://lonelycpp.github.io/react-native-youtube-iframe/install
*/

import React, { useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Text, Surface } from 'react-native-paper'
import YoutubePlayer from "react-native-youtube-iframe";
import RecipeIngredients from '../components/recipe/RecipeIngredients';
import RecipeInstructions from '../components/recipe/RecipeInstructions';
import RecipeLinkButton from '../components/recipe/RecipeLinkButton';

export default function RecipesScreen({ route }) {

  const { meal } = route.params;

  return (
    <ScrollView>

      <View style={styles.recipe}>

        <Surface style={styles.surface} elevation={4}>
          <Text variant='displaySmall' style={styles.textSurface}>{meal.strMeal}</Text>
          <Text variant='bodyLarge'>{meal.strArea}</Text>
        </Surface>

        <View style={styles.youtubePlayer}>
          <YoutubePlayer
            height={200}
            play={false}
            videoId={meal.strYoutube.split('v=')[1]}
          />
        </View>

        <RecipeIngredients meal={meal} />

        <RecipeInstructions instructions={meal.strInstructions} />

        <RecipeLinkButton url={meal.strSource} />

      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  recipe: {
    paddingHorizontal: 20,
  },
  surface: {
    marginTop: 20,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    textAlign: 'center'
  },
  text: {
    marginVertical: 10,
  },
  youtubePlayer: {
    marginTop: 20,
  }
});