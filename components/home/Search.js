/* For searching meals by given query in HomeScreen*/

import { useState } from 'react'
import { Keyboard, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper'
import { searchMealByName } from '../../Api';
import ListMeals from './ListMeals';
import HomeScreen from '../../screens/HomeScreen';

export default function Search() {

    const [searchQuery, setSearchQuery] = useState("");
    const [foundMeals, setFoundMeals] = useState([{}])

    const handleSearch = async () => {
        try {
            const data = await searchMealByName(searchQuery);
            console.log("DATA:", data.meals);
            setFoundMeals(data.meals);
            Keyboard.dismiss();
        } catch (error) {
            console.error("Error in fetching meals: ", error)
        }
    }

    return (
        <>
        <Searchbar
            style={styles.search}
            placeholder="Search recipes"
            onChangeText={setSearchQuery}
            value={searchQuery}
            onIconPress={handleSearch}
        />
        <ListMeals foundMeals={foundMeals} />
        </>
    )
}

const styles = StyleSheet.create({
    search: {
        width: '80%',
        alignSelf: 'center'
    }
})