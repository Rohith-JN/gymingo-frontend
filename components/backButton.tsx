import { useRouter } from 'expo-router';
import { Pressable, Text } from 'react-native';

const BackButton = () => {
    const router = useRouter();
    return (<Pressable onPress={() => router.back()}><Text style={{ color: '#4280EF', fontSize: 15 }}>Go Back</Text></Pressable>);
}

export default BackButton