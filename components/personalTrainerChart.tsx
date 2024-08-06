import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

const PersonalTrainerChart = () => {
    const screenWidth = Dimensions.get('window').width;
    const containerWidth = screenWidth * 0.65;

    const data = [
        { value: 5, label: '10th' },
        { value: 10, label: '14th' },
        { value: 20, label: '18th' },
        { value: 25, label: '26th' },
    ];

    const data2 = [
        { value: 2, label: '10th' },
        { value: 3, label: '14th' },
        { value: 6, label: '16th' },
        { value: 4, label: '18th' },
    ];
    return (
        <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>PERSONAL TRAINER SUBSCRIPTION GROWTH</Text>
            <Text style={styles.chartSubtitle}>8 May - 26 May</Text>
            <LineChart
                xAxisColor='grey'
                yAxisColor='grey'
                yAxisTextStyle={{ color: 'grey' }}
                xAxisLabelTextStyle={{ color: 'grey' }}
                data={data}
                data2={data2}
                height={170}
                spacing={78}
                width={containerWidth}
                initialSpacing={15}
                thickness1={3}
                thickness2={3}
                color1="green"
                color2="red"
                noOfSections={4}
                dataPointsColor1="green"
                dataPointsColor2="red"
                textShiftY={-2}
                textShiftX={-5}
                textFontSize={13}
            />
            <View style={styles.legendContainer}>
                <View style={styles.legendItem}>
                    <Text style={styles.legendText}>Joined</Text>
                </View>
                <View style={styles.legendItem}>
                    <Text style={styles.legendText}>Left</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    chartContainer: {
        height: 365,
        width: '85%',
        alignItems: 'center',
        gap: 20,
        backgroundColor: 'white',
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
    chartTitle: {
        color: 'grey',
        fontSize: 10,
        marginTop: 20,
        fontWeight: 'bold',
    },
    chartSubtitle: {
        color: 'grey',
        fontSize: 10,
        fontWeight: 'bold',
    },
    legendContainer: {
        width: '100%',
        alignItems: 'flex-start',
        flexDirection: 'row',
        paddingLeft: 20,
        gap: 10,
    },
    legendItem: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        backgroundColor: 'green',
    },
    legendText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default PersonalTrainerChart;
