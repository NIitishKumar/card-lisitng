import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FlatCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>Flat Cards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Card</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Card</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Card</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 26,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: 300,
    },
    card: {
        height: 100,
        width: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        margin: 8,
    },
    cardOne: {
        backgroundColor: 'red',
        width: 100,
    },
    cardTwo: {
        backgroundColor: 'green',
        width: 100,
    },
    cardThree: {
        backgroundColor: 'blue',
        width: 100,
    },
});

export default FlatCards;
