import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Index = () => {

    const [contacts] = useState([
        {
            uid: 1,
            name: 'Nitish Kumar',
            status: 'Building your secure banking',
            imageUrl: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
        },
        {
            uid: 2,
            name: 'Mohit Singh',
            status: 'Building your secure banking',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
        },
        {
            uid: 1,
            name: 'Nitish Kumar',
            status: 'Building your secure banking',
            imageUrl: 'https://t3.ftcdn.net/jpg/09/03/97/84/360_F_903978458_J4jkrtgeQ1eiZ41sggtembvfArXBvNvV.jpg',
        },
        {
            uid: 2,
            name: 'Mohit Singh',
            status: 'Building your secure banking',
            imageUrl: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
        },
        {
            uid: 1,
            name: 'Nitish Kumar',
            status: 'Building your secure banking',
            imageUrl: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
        },
        {
            uid: 2,
            name: 'Mohit Singh',
            status: 'Building your secure banking',
            imageUrl: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
        },
    ]);

    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView
                style={styles.container}
            >
                {
                    contacts?.map(({name, uid, status, imageUrl}) => (
                        <View style={styles.contactCard} key={uid}>
                            <Image
                            style={styles.profileImage}
                                source={{
                                    uri: imageUrl,
                                }}
                            />
                            <View style={styles.contactDetails}>
                                <Text style={styles.contacName}>Name: {name}</Text>
                                <Text style={styles.status}>{status}</Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 10,
    },
    container: {},
    contactCard: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
    },
    profileImage: {
        height: 60,
        width: 60,
        borderRadius: 50,
        marginRight: 10,
    },
    contactDetails: {
        paddingTop: 10,
        paddingBottom: 5,
        fontWeight: 'bold',
    },
    contacName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    status: {
        fontWeight: 'bold',
    }
});

export default Index;
