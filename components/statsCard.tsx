import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatsCard = ({ title, value }: { title: string, value: string }) => (
    <View style={styles.card}>
        <Text style={styles.cardText}>{title}</Text>
        <Text style={styles.cardValue}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    card: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '85%',
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    cardText: {
        color: 'grey',
        fontWeight: 'bold',
    },
    cardValue: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 30,
    },
});

export default StatsCard;
