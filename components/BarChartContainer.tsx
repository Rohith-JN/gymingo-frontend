import React from 'react';
import { View, Pressable, StyleSheet, Text, Dimensions } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

const BarChartContainer = () => {
    const screenWidth = Dimensions.get('window').width;
    const containerWidth = screenWidth * 0.68;

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
                { value: 7, color: '#5E8CDD' },
                { value: 11, color: '#F8B8B8', marginBottom: 2 },
            ],
            label: '20th',
        },
    ];

    return (
        <View style={styles.chartContainer}>
            <BarChart
                yAxisTextStyle={{ color: 'grey' }}
                xAxisLabelTextStyle={{ color: 'grey' }}
                xAxisColor='grey'
                yAxisColor='grey'
                rotateLabel
                noOfSections={stackData.length}
                spacing={10}
                stackData={stackData}
                width={containerWidth}
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
        backgroundColor: 'white',
        borderRadius: 10,
        paddingTop: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
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
        color: 'grey',
        fontWeight: 'bold',
    },
});

export default BarChartContainer;
