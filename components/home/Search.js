import { useState } from 'react'
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper'

export default function Search() {

    const [searchQuery, setSearchQuery] = useState();
    return (
        <Searchbar
            style={styles.search}
            placeholder="Search recipes"
            onChangeText={setSearchQuery}
            value={searchQuery}
        />
    )
}

const styles = StyleSheet.create({
    search: {
        width: '80%',
        alignSelf: 'center'
    }
})