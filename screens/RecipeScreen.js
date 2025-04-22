/* Stack Screen which includes the details of a recipe*/
/* Docs: https://docs.expo.dev/versions/latest/sdk/linking/
        https://lonelycpp.github.io/react-native-youtube-iframe/install
*/

import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native'
import { Text, Surface, ActivityIndicator } from 'react-native-paper'
import YoutubePlayer from "react-native-youtube-iframe";
import RecipeIngredients from '../components/recipe/RecipeIngredients';
import RecipeInstructions from '../components/recipe/RecipeInstructions';
import RecipeLinkButton from '../components/recipe/RecipeLinkButton';
import FavoriteIconButton from '../components/favorite/FavoriteIconButton';

export default function RecipesScreen({ route }) {

  const { meal } = route.params;
  const [loading, setLoading] = useState(true);

  return (
    <ImageBackground
    source={ require('../assets/recipe.jpg')}
    >
    <ScrollView>

      <View style={styles.recipe}>

        <Surface style={styles.surface} elevation={4}>

          <Text variant='displaySmall' style={styles.textSurface}>{meal.strMeal}</Text>
          <Text variant='bodyLarge'>{meal.strArea}</Text>
          <FavoriteIconButton style={styles.favorite} recipe={meal} />

        </Surface>


        <View style={styles.youtubePlayer}>

          {loading && (

            <ActivityIndicator
              animating={true}
              size='large'
            />

          )}

          <YoutubePlayer
            height={200}
            play={false}
            videoId={meal.strYoutube.split('v=')[1]}
            onReady={() => setLoading(false)}
          />

        </View>

        <RecipeIngredients meal={meal} />

        <RecipeInstructions instructions={meal.strInstructions} />

        <RecipeLinkButton url={meal.strSource} />

      </View>
    </ScrollView>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  recipe: {
    paddingHorizontal: 20,
  },
  favorite: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  surface: {
    marginTop: 20,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    textAlign: 'center',
    position: 'relative',
  },
  textSurface: {
    textAlign: 'center',
  },
  text: {
    marginVertical: 10,
  },
  youtubePlayer: {
    marginTop: 20,
  }
});