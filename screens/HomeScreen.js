/*Home page of the application (Recipes tab)*/

import { useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Text, useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import Categories from '../components/home/Categories'
import Search from '../components/home/Search'
import DialogShake from '../components/home/DialogShake'



export default function HomeScreen() {

  const theme = useTheme();
  const [category, setCategory] = useState(''); 

  const handleCategoryPress = (category) => {
    setCategory(category); 
  };

  return (
<SafeAreaView  style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.text}>
          <Text variant="headlineSmall" style={styles.hi}>Hi Gourmie!</Text>
          <DialogShake />
        </View>
        <Categories handleCategoryPress={handleCategoryPress} />
        <Search category={category}/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
hi:{
  fontFamily: 'Roboto_400Regular',
},
  text: {
    paddingLeft:20,
    paddingRight: 20,
    marginTop:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});