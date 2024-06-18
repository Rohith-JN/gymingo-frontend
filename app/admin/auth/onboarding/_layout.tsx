import { Stack, useRouter } from 'expo-router';
import { Text } from 'react-native'
import BackButton from '../../../../components/backButton';

const Layout = () => {
    const router = useRouter()
    return (
        <Stack>
            <Stack.Screen
                name="onBoarding"
                options={{
                    headerTitle: '',
                    gestureEnabled: true,
                    headerLeft: () => <BackButton />,
                    headerRight: () => (
                        <Text style={{ fontFamily: 'Langar', fontSize: 20 }}>
                            Gymingo
                        </Text>
                    ),
                }}
            />
            <Stack.Screen
                name="location"
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    );
};

export default Layout;
