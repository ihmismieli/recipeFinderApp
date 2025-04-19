import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import FavoriteList from '../components/favorite/FavoriteList'

export default function ListScreen() {
  return (
    <SafeAreaView>
        <FavoriteList />
    </SafeAreaView>
  )
}
