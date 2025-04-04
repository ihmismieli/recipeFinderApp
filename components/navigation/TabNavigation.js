import React, { useState } from 'react'
import { PaperProvider, BottomNavigation, Title } from 'react-native-paper';
import HomeScreen from '../../screens/HomeScreen';
import ListScreen from '../../screens/FavoritesScreen';
import SettingsScreen from '../../screens/SettingsScreen';

const HomeRoute = () => <HomeScreen />;

const FavoriteRoute = () => <ListScreen />;

const SettingsRoute = () => <SettingsScreen />;

export default function TabNavigation() {


    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {
            key: 'home', title: 'Tasties', focusedIcon: 'emoticon-happy', unfocusedIcon: 'emoticon-happy-outline'
        }, {
            key: 'favorite', title: 'Faves', focusedIcon: 'cards-heart', unfocusedIcon: 'cards-heart-outline'
        }, {
            key: 'settings', title: 'Settings', focusedIcon: 'account-circle', unfocusedIcon: 'account-circle-outline'
        }

    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        list: FavoriteRoute,
        settings: SettingsRoute,
    });

    return (
        <BottomNavigation
            navigationState={{index, routes}}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    )
}
