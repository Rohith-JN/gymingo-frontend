import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, router } from 'expo-router';
import MainButton from '../components/mainButton';

const Home = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View
        style={{
          flexDirection: 'column',
          gap: 15,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
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
