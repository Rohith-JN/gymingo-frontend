import React from 'react';
import { View, Pressable, StyleSheet, Text } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

const BarChartContainer = () => {
    const stackData = [
        {
            stacks: [
                { value: 10, color: '#5E8CDD' },
                { value: 20, color: '#F8B8B8', marginBottom: 2 },
            ],
            label: '15th',
        },
        {
            stacks: [
                { value: 10, color: '#5E8CDD' },
                { value: 11, color: '#F8B8B8', marginBottom: 2 },
            ],
            label: '16th',
        },
        {
            stacks: [
                { value: 14, color: '#5E8CDD' },
                { value: 18, color: '#F8B8B8', marginBottom: 2 },
            ],
            label: '18th',
        },
        {
            stacks: [
                { value: 7, color: '#5E8CDD' },
                { value: 11, color: '#F8B8B8', marginBottom: 2 },
            ],
            label: '20th',
        },
    ];
    return (
        <View style={styles.chartContainer}>
            <BarChart
                yAxisTextStyle={{ color: 'white' }}
                xAxisLabelTextStyle={{ color: 'white' }}
                xAxisColor='white'
                yAxisColor='white'
                rotateLabel
                noOfSections={4}
                stackData={stackData}
            />
            <View style={styles.buttonsContainer}>
                <Pressable style={styles.buttonAll}><Text style={styles.buttonText}>ALL</Text></Pressable>
                <Pressable style={styles.buttonRahul}><Text style={styles.buttonText}>RAHUL</Text></Pressable>
                <Pressable style={styles.buttonRohan}><Text style={styles.buttonTextRohan}>ROHAN</Text></Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    chartContainer: {
        height: 355,
        width: '85%',
        alignItems: 'center',
        gap: 35,
        backgroundColor: '#373637',
        borderRadius: 10,
        paddingTop: 20,
    },
    buttonsContainer: {
        width: '100%',
        alignItems: 'flex-start',
        flexDirection: 'row',
        paddingLeft: 20,
        gap: 10,
    },
    buttonAll: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        backgroundColor: '#00D198',
        borderColor: 'white',
        borderWidth: 1.5,
    },
    buttonRahul: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        backgroundColor: '#5E8CDD',
    },
    buttonRohan: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        backgroundColor: '#F8B8B8',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    buttonTextRohan: {
        color: 'black',
        fontWeight: 'bold',
    },
});

export default BarChartContainer;
