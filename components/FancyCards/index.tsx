import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Index = () => {
    return (
        <View>
            <Text style={styles.cardHeading}>Fancy Cards</Text>
            <ScrollView horizontal>
            <View style={styles.card}>
                <Image
                    source={{
                        uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Generated with AI</Text>
                    <Text style={styles.cardDescription}>LetsEnhance: Image quality AI - make photos HD/4k & more online</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Image
                    source={{
                        uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Generated with AI</Text>
                    <Text style={styles.cardDescription}>LetsEnhance: Image quality AI - make photos HD/4k & more online</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Image
                    source={{
                        uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Generated with AI</Text>
                    <Text style={styles.cardDescription}>LetsEnhance: Image quality AI - make photos HD/4k & more online</Text>
                </View>
            </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    cardHeading: {},
    card: {
        color: 'white',
        // textCol
        width: '30%',
        marginLeft: 10,
        borderRadius: 5,
        backgroundColor: 'black',
    },
    cardImage: {
        height: 200,
        // width: '50%',
    },
    cardBody: {
        padding: 10,
        borderRadius: 5,
    },
    cardTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    cardDescription: {
        color: 'white',
        lineHeight: 22,
        marginBottom: 5,
    },
})

export default Index;
