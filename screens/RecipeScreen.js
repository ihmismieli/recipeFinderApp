/* Stack Screen which includes the details of a recipe*/
/* Docs: https://docs.expo.dev/versions/latest/sdk/linking/
        https://lonelycpp.github.io/react-native-youtube-iframe/install
*/

import { openURL } from 'expo-linking';
import React, { useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Button, Checkbox, Text, Card, Surface } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import YoutubePlayer from "react-native-youtube-iframe";


export default function RecipesScreen({ route }) {


  const { meal } = route.params;

  const [checkedIngredients, setCheckedIngredients] = useState({});

  //Created with the help of ChatGPT
  const checked = (index) => {
    setCheckedIngredients({
      ...checkedIngredients,
      [index]: !checkedIngredients[index],
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

          <View style={styles.ingredients}>

            <Card>
              <Card.Content>
                <Text variant='headlineSmall' style={styles.text}>Ingredients</Text>
                {getIngredients(meal)}
              </Card.Content>
            </Card>

          </View>

          <Card style={styles.card}>
            <Card.Content>
              <Text variant='bodyMedium'>{meal.strInstructions}</Text>
            </Card.Content>
          </Card>

          <Button
            style={styles.button}
            mode='elevated'
            onPress={() => openURL(meal.strSource)}
          >
            Original Recipe
          </Button>

        </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
  },
  card: {
    marginVertical: 20,
  },
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 200
  },
  ingredient: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ingredients: {
    marginVertical: 10,
    justifyContent: 'center',
  },
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
})