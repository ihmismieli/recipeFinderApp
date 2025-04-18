/* Tab navigation of the application */
/* Docs: 
https://callstack.github.io/react-native-paper/docs/components/BottomNavigation/BottomNavigationBar
https://reactnavigation.org/docs/bottom-tab-navigator/
*/

import { BottomNavigation } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CommonActions } from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import FavoritesScreen from '../../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={({ navigation, state, descriptors, insets }) => (
                <BottomNavigation.Bar
                    navigationState={state}
                    safeAreaInsets={insets}
                    onTabPress={({ route }) => {
                        navigation.dispatch({
                            ...CommonActions.navigate(route.name, route.params),
                            target: state.key,
                        });
                    }}
                    renderIcon={({ route, focused }) => {
                        const { options } = descriptors[route.key];
                        if (options.tabBarIcon) {
                            return options.tabBarIcon({ focused, size: 24 });
                        }

                        return null;
                    }}
                    getLabelText={({ route }) => {
                        const { options } = descriptors[route.key];
                        return options.tabBarLabel;
                    }}
                />
            )}
        >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Recipes',
                    tabBarIcon: ({ focused, size }) => {
                        return <Icon
                            name={focused ? 'bowl-mix' : 'bowl-mix-outline'}
                            size={size}
                        />
                    }
                }}
            />
            <Tab.Screen
                name='favorite'
                component={FavoritesScreen}
                options={{
                    tabBarLabel: 'Faves',
                    tabBarIcon: ({ focused, size }) => {
                        return <Icon
                            name={focused ? 'cards-heart' : 'cards-heart-outline'}
                            size={size}
                        />
                    }
                }}
            />
            <Tab.Screen
                name='settings'
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ focused, size }) => {
                        return <Icon
                            name={focused ? 'account-circle' : 'account-circle-outline'}
                            size={size}
                        />
                    }
                }}
            />
        </Tab.Navigator>
    )
}
