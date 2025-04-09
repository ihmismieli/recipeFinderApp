/* Tab navigation of the application */
/* Docs: https://callstack.github.io/react-native-paper/docs/components/BottomNavigation/BottomNavigationBar*/

import React, { useState } from 'react'
import { PaperProvider, BottomNavigation, Title } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import FavoritesScreen from '../../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

const HomeRoute = () => <HomeScreen />;

const FavoriteRoute = () => <FavoritesScreen />;

const SettingsRoute = () => <SettingsScreen />;


export default function TabNavigation() {


    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {
            key: 'home', title: 'Recipes', focusedIcon: 'bowl-mix', unfocusedIcon: 'bowl-mix-outline'
        },
        {
            key: 'favorite', title: 'Faves', focusedIcon: 'cards-heart', unfocusedIcon: 'cards-heart-outline'
        }, 
        {
            key: 'settings', title: 'Settings', focusedIcon: 'account-circle', unfocusedIcon: 'account-circle-outline'
        }

    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        favorite: FavoriteRoute,
        settings: SettingsRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    )
}
