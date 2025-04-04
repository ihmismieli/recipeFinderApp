import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';
import { Surface, Text, Avatar, Card } from 'react-native-paper';

export default function Categories() {
    return (
        <View>
            <View style={styles.categories}>
                <Card mode='elevated' style={styles.card}>
                    <Card.Content>
                        <Avatar.Image size={64} source={require('../../assets/category/chicken.jpg')} />
                        <Text variant="bodyMedium" style={styles.text}>Chicken</Text>
                    </Card.Content>
                </Card>
                <Card style={styles.card} mode='elevated'>
                    <Card.Content style={styles.content}>
                        <Avatar.Image size={64} source={require('../../assets/category/vegetarian.jpg')} />
                        <Text variant="bodyMedium" style={styles.text}>Vege</Text>
                    </Card.Content>
                </Card>
                <Card style={styles.card} mode='elevated'>
                    <Card.Content>
                        <Avatar.Image size={64} source={require('../../assets/category/beef.jpg')} />
                        <Text variant="bodyMedium" style={styles.text}>Beef</Text>
                    </Card.Content>
                </Card>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    categories: {
        flexDirection: 'row',
        marginVertical: 20,
        alignSelf: 'center',
    },
    card: {
        marginHorizontal:10,
        alignContent:'center',
        alignSelf:'center',
        marginVertical:5,
    },
    text: {
        textAlign:'center',
        marginTop:10,
    }
    
});