import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Index = () => {
    return (
        <View>
            <Text style={styles.heading} >Elevated Cards</Text>
            <ScrollView horizontal style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Tap</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        color: '#FFFFFF',
    },
    container: {
        padding: 8,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: 100,
        gap: 10,
        marginRight: 10,
        padding: 10,
        borderRadius: 5,
    },
    cardOne: {
        backgroundColor: 'red',
        elevation:0,
        shadowOffset: {
            height:1,
            width:1,
        },
        shadowColor: 'green',
    },
})

export default Index;
