import React, { useState } from 'react'
import { PaperProvider, BottomNavigation, Title } from 'react-native-paper';
import HomeScreen from '../../screens/HomeScreen';
import ListScreen from '../../screens/ListScreen';

const HomeRoute = () => <HomeScreen />;

const ListRoute = () => <ListScreen />;

export default function TabNavigation() {


    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {
            key: 'home', title: 'Home', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'
        }, {
            key: 'list', title: 'List'
        }

    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        list: ListRoute,
    });

    return (
        <BottomNavigation
            navigationState={{index, routes}}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    )
}
