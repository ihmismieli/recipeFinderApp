/* For searching meals by given query in HomeScreen*/

import { useState, useEffect } from 'react'
import { Keyboard, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper'
import { searchMealsByName } from '../../Api';
import ListMeals from './ListMeals';
import { searchMealsByCategory } from '../../Api';

export default function Search({category}) {

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
            // setSearchQuery("");
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
                style={styles.search}
                placeholder="Search recipes"
                onChangeText={setSearchQuery}
                value={searchQuery}
                onIconPress={handleSearch}
                onSubmitEditing={handleSearch}
            />
            {
                showMeals &&
                <ListMeals foundMeals={foundMeals} />
            }
        </>
    )
}

const styles = StyleSheet.create({
    search: {
        width: '90%',
        alignSelf: 'center',
        fontFamily: 'Roboto_300Light',
    }
})
