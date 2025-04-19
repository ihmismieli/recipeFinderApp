/*Home page of the application (Recipes tab)*/

import { useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import Categories from '../components/home/Categories'
import Search from '../components/home/Search'
import DialogShake from '../components/home/DialogShake'



export default function HomeScreen() {


  const [category, setCategory] = useState(''); 

  const handleCategoryPress = (category) => {
    setCategory(category); 
  };

  return (

    <SafeAreaView styles={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.text}>
          <Text variant="headlineSmall">Hi Gourmie!</Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  scrollView: {
    width: '100%',
    height: '100%'
  }, 
  text: {
    paddingLeft:20,
    paddingRight: 20,
    marginTop:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});