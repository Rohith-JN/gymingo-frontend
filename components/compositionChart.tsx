import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { useState } from 'react';

const CompositionChart = () => {
    const screenWidth = Dimensions.get('window').width;
    const containerWidth = screenWidth * 0.65;
    const [option, setOption] = useState('MUSCLE')

    const MuscleMass = [
        { value: 10, label: 'Jan' },
        { value: 15 },
        { value: 15, label: 'Mar' },
        { value: 20 },
        { value: 25, label: 'May' },
        { value: 30 },
        { value: 32, label: 'July' },
    ]
    const Fat = [
        { value: 50, label: 'Jan' },
        { value: 45 },
        { value: 40, label: 'Mar' },
        { value: 35 },
        { value: 30, label: 'May' },
        { value: 20 },
        { value: 10, label: 'July' },
    ]
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{option == 'MUSCLE' ? 'MUSCLE MASS%' : 'FAT%'}</Text>
            <LineChart
                xAxisColor='grey'
                yAxisColor='grey'
                yAxisTextStyle={{ color: 'grey' }}
                xAxisLabelTextStyle={{ color: 'grey' }}
                data={option == 'MUSCLE' ? MuscleMass : Fat}
                height={170}
                spacing={30}
                initialSpacing={15}
                thickness1={3}
                color1={option == 'MUSCLE' ? "red" : "yellow"}
                noOfSections={4}
                width={containerWidth}
                dataPointsColor1={option == 'MUSCLE' ? "red" : "yellow"}
                textShiftY={-2}
                textShiftX={-5}
                textFontSize={13}
            // rulesThickness={} show grid
            />

            <View style={{ width: '100%', alignItems: 'flex-start', flexDirection: 'row', paddingLeft: 20, gap: 10 }}>
                <Pressable onPress={() => {
                    if (option == 'MUSCLE') {

                    }
                    else {
                        setOption('MUSCLE')
                    }
                }} style={{ paddingVertical: 10, paddingHorizontal: 15, borderRadius: 20, backgroundColor: 'red', borderColor: 'grey', borderWidth: option == 'MUSCLE' ? 1.5 : 0 }}><Text style={{ color: 'white', fontWeight: 'bold' }}>MUSCLE</Text></Pressable>
                <Pressable onPress={() => {
                    if (option == 'FAT') {

                    }
                    else {
                        setOption('FAT')
                    }
                }} style={{ paddingVertical: 10, paddingHorizontal: 15, borderRadius: 20, backgroundColor: 'yellow', borderColor: 'grey', borderWidth: option == 'FAT' ? 1.5 : 0 }}><Text style={{ color: 'grey', fontWeight: 'bold' }}>FAT</Text></Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 345, width: '85%', alignItems: 'flex-end', gap: 20, backgroundColor: 'white', borderRadius: 10, shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    title: {
        color: 'grey', fontSize: 16, marginTop: 20, fontWeight: 'bold', paddingRight: 20
    }
})

export default CompositionChart