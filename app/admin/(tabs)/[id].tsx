import { SafeAreaView, ScrollView, Text, View, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import StatsCard from '../../../components/statsCard';
import LineChartContainer from '../../../components/LineChartContainer';
import BarChartContainer from '../../../components/BarChartContainer';
import { LineChart } from 'react-native-gifted-charts';

const User = () => {
  const { id } = useLocalSearchParams();
  const [option, setOption] = useState('MUSCLE')
  const lineData = [
    { value: 5, label: '10th' },
    { value: 10, label: '14th' },
    { value: 20, label: '18th' },
    { value: 25, label: '26th' },
  ];

  const lineData2 = [
    { value: 2, label: '10th' },
    { value: 3, label: '14th' },
    { value: 6, label: '16th' },
    { value: 4, label: '18th' },
  ];

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
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <StatsCard title="Number of trainers" value="03" />
          <StatsCard title="Total Trainees" value="26" />
          <LineChartContainer
            title="PERSONAL TRAINER SUBSCRIPTION GROWTH"
            subtitle="8 May - 26 May"
            data={lineData}
            data2={lineData2}
          />
          <BarChartContainer stackData={stackData} />
          <View style={{ height: 345, width: '85%', alignItems: 'flex-end', gap: 20, backgroundColor: '#373637', borderRadius: 10 }}>
            <Text style={{ color: 'white', fontSize: 16, marginTop: 20, fontWeight: 'bold', paddingRight: 20 }}>{option == 'MUSCLE' ? 'MUSCLE MASS%' : 'FAT%'}</Text>
            <LineChart
              xAxisColor='white'
              yAxisColor='white'
              yAxisTextStyle={{ color: 'white' }}
              xAxisLabelTextStyle={{ color: 'white' }}
              data={option == 'MUSCLE' ? MuscleMass : Fat}
              height={170}
              spacing={30}
              initialSpacing={15}
              thickness1={3}
              color1={option == 'MUSCLE' ? "red" : "yellow"}
              noOfSections={4}
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
              }} style={{ paddingVertical: 10, paddingHorizontal: 15, borderRadius: 20, backgroundColor: 'red', borderColor: 'white', borderWidth: option == 'MUSCLE' ? 1.5 : 0 }}><Text style={{ color: 'white', fontWeight: 'bold' }}>MUSCLE</Text></Pressable>
              <Pressable onPress={() => {
                if (option == 'FAT') {

                }
                else {
                  setOption('FAT')
                }
              }} style={{ paddingVertical: 10, paddingHorizontal: 15, borderRadius: 20, backgroundColor: 'yellow', borderColor: 'white', borderWidth: option == 'FAT' ? 1.5 : 0 }}><Text style={{ color: 'black', fontWeight: 'bold' }}>FAT</Text></Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    width: '100%',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
  },
  lineChartContainer: {
    height: 345,
    width: '85%',
    alignItems: 'flex-end',
    gap: 20,
    backgroundColor: '#373637',
    borderRadius: 10,
  },
  chartTitle: {
    color: 'white',
    fontSize: 16,
    marginTop: 20,
    fontWeight: 'bold',
    paddingRight: 20,
  },
});

export default User;
