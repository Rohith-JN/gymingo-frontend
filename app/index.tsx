import { View, SafeAreaView, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import MainButton from '../components/mainButton';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <MainButton title="Gym User" onPress={() => { }}></MainButton>
        <MainButton title="Trainer" onPress={() => { }}></MainButton>
        <MainButton
          title="Gym Admin"
          onPress={() => router.push('/admin/login')}
        ></MainButton>
      </View>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  subContainer: {
    flexDirection: 'column',
    gap: 15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})