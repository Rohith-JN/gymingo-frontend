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
        backgroundColor: '#4280EF',
        padding: 20,
        borderRadius: 10,
    },
    cardText: {
        color: 'white',
        fontWeight: 'bold',
    },
    cardValue: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
});

export default StatsCard;
