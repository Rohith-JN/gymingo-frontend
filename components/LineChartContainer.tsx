import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart, lineDataItem } from 'react-native-gifted-charts';

const LineChartContainer = ({ title, subtitle, data, data2 }: { title: string, subtitle: string, data: lineDataItem[], data2: lineDataItem[] }) => (
    <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>{title}</Text>
        <Text style={styles.chartSubtitle}>{subtitle}</Text>
        <LineChart
            xAxisColor='white'
            yAxisColor='white'
            yAxisTextStyle={{ color: 'white' }}
            xAxisLabelTextStyle={{ color: 'white' }}
            data={data}
            data2={data2}
            height={170}
            spacing={60}
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

const styles = StyleSheet.create({
    chartContainer: {
        height: 355,
        width: '85%',
        alignItems: 'center',
        gap: 20,
        backgroundColor: '#373637',
        borderRadius: 10,
    },
    chartTitle: {
        color: 'white',
        fontSize: 10,
        marginTop: 20,
        fontWeight: 'bold',
    },
    chartSubtitle: {
        color: 'white',
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

export default LineChartContainer;
