import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FavoriteList from '../components/favorite/FavoriteList'
import { ImageBackground, ScrollView, StyleSheet } from 'react-native'

export default function FavoriteScreen() {
  return (
    <SafeAreaView style={styles.container}>
     
      <ScrollView>
        
        <FavoriteList />
        
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
      flex : 1,
      backgroundColor: '#EADDD7',
  }
})