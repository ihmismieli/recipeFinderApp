import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FavoriteList from '../components/favorite/FavoriteList'
import { ScrollView } from 'react-native'

export default function FavoriteScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FavoriteList />
      </ScrollView>
    </SafeAreaView>
  )
}
