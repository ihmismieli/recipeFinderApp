/*Home page of the application (Tasties tab)*/


import { Alert, View, StyleSheet, ScrollView} from 'react-native'
import { Text, IconButton, Searchbar, Surface } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import Categories from '../components/home/Categories'
import Search from '../components/home/Search'


export default function HomeScreen() {


    return (
        <SafeAreaView styles={styles.container}>
            <Text variant="headlineSmall">Hi Gourmie!</Text>
            <Search />
            <Categories />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:5,
  },
});