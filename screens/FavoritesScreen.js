import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FavoriteList from '../components/favorite/FavoriteList'
import { ScrollView, StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper'


export default function FavoriteScreen() {

  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView>
        <FavoriteList />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})