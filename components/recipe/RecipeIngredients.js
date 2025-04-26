import { StyleSheet} from 'react-native'
import { useState } from 'react';
import { View } from 'react-native';
import { Checkbox, Text, Card, useTheme } from 'react-native-paper'

export default function RecipeIngredients( { meal }) {

  const theme = useTheme();

     const [checkedIngredients, setCheckedIngredients] = useState({});

     const checked = (index) => {
        setCheckedIngredients(prev => ({
            ...prev,
            [index]: !prev[index]
          }));
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

                    <Text variant='bodyMedium'>
                      {measure} {ingredient}
                    </Text>

                  </View>
                )
              }
            }
            return ingredientsWithMeasures;
          }

          
  return (
    <View style={styles.ingredients}>

    <Card
    style={{ backgroundColor: theme.colors.surface }}
    >
      <Card.Content>
        
        <Text variant='headlineSmall' style={styles.text}>Ingredients</Text>

        {getIngredients(meal)}

      </Card.Content>
    </Card>

  </View>
  )
}

const styles = StyleSheet.create({
    ingredient: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      ingredients: {
        marginVertical: 10,
        justifyContent: 'center',
      },
      text: {
        marginVertical: 10,
      },
  });
