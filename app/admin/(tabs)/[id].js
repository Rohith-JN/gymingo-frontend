import { SafeAreaView, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const User = () => {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>{id}</Text>
    </SafeAreaView>
  );
};

export default User;
