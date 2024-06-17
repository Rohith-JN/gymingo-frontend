import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import StatsCard from '../../../components/statsCard';
import PersonalTrainerChart from '../../../components/personalTrainerChart';
import BarChartContainer from '../../../components/barChartContainer';
import CompositionChart from '../../../components/compositionChart';

const User = () => {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <StatsCard title="Number of trainers" value="03" />
          <StatsCard title="Total Trainees" value="26" />
          <PersonalTrainerChart />
          <BarChartContainer />
          <CompositionChart />
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
    gap: 20,
    marginTop: 20,
    marginBottom: 20
  },
});

export default User;
