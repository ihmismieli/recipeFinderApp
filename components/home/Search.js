/* For searching meals by given query in HomeScreen*/

import { useState, useEffect } from 'react'
import { Keyboard, StyleSheet } from 'react-native';
import { Searchbar, useTheme, Text } from 'react-native-paper'
import { searchMealsByName } from '../../Api';
import ListMeals from './ListMeals';
import { searchMealsByCategory } from '../../Api';

export default function Search({ category }) {

    const theme = useTheme();

    const [searchQuery, setSearchQuery] = useState("");
    const [foundMeals, setFoundMeals] = useState([{}])
    const [showMeals, setShowMeals] = useState(false);

    useEffect(() => {
        if (category) {
            handleCategorySearch(category);
        } else {
            handleSearch(searchQuery)
        }
    }, [category]);

    const handleSearch = async () => {
        try {
            const data = await searchMealsByName(searchQuery);
            // console.log("DATA:", data.meals);
            setFoundMeals(data.meals);
            setShowMeals(true);
            setSearchQuery("");
            Keyboard.dismiss();
        } catch (error) {
            console.error("Error in fetching meals: ", error)
        }
    }

    const handleCategorySearch = async (category) => {
        try {
            const data = await searchMealsByCategory(category);
            setFoundMeals(data.meals);
            setShowMeals(true);
        } catch (error) {
            console.error('Error in fetching meals:', error);
        }
    };


    return (
        <>
            <Searchbar
                style={[styles.search, { backgroundColor: theme.colors.surface }]}
                placeholder="Search recipes"
                onChangeText={setSearchQuery}
                value={searchQuery}
                onIconPress={handleSearch}
                onSubmitEditing={handleSearch}
            />
            {
                showMeals && (
                    foundMeals && foundMeals.length > 0 ? (
                        <ListMeals foundMeals={foundMeals} />
                    ) : (
                        <Text
                            variant='bodyMedium'
                            style={[styles.errorSearch, theme.fonts.bodyLarge]}
                        >
                            No meals were found for this search. Please try another ingredient or food!
                        </Text>
                    )
                )

            }
        </>
    )
}

const styles = StyleSheet.create({
    search: {
        width: '90%',
        alignSelf: 'center',
        fontFamily: 'Roboto_300Light',
    },
    errorSearch: {
        textAlign: 'center',
        marginTop: 20,
        marginHorizontal: 20,
        fontSize: 20,

    }
})
