import React, { useState } from 'react'
import { Button, Dialog, IconButton, Portal, Text } from 'react-native-paper'
import { View, StyleSheet } from 'react-native';
import { getRandomMeal } from '../../Api';
import { useNavigation } from '@react-navigation/native';

export default function DialogShake() {

  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const navigation = useNavigation();

  const searchRandomMeal = async () => {
   hideDialog();
    try {

      const data = await getRandomMeal();
      const meal = data.meals[0];
      navigation.navigate('Recipe', { meal });

    } catch (error) {
      console.error('Error in fetching random meal:', error);
    }
  };

  return (
    <View>
      <IconButton
        icon="magic-staff"
        iconColor='black'
        mode='contained-tonal'
        onPress={showDialog}
      />
      <Portal>
        <Dialog
          visible={visible}
        >
          <View style={styles.dialog}>
          <Dialog.Title>Feeling Hungry?</Dialog.Title>
          </View>
         
          <Dialog.Content style={styles.dialog}>
            <Text variant="bodyMedium">Press OK or shake your phone for a random recipe!</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancel</Button>
            <Button onPress={searchRandomMeal}>OK</Button>
          </Dialog.Actions>

        </Dialog>
      </Portal>
    </View>

  )
}


const styles = StyleSheet.create({
  dialog: {
    alignItems:'center',
    justifyContent:'center'
  }
})