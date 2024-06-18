import { Stack, useRouter } from 'expo-router';
import { Text } from 'react-native'
import BackButton from '../../../components/backButton';

const Layout = () => {
    const router = useRouter()
    return (
        <Stack>
            <Stack.Screen
                name="login"
                options={{
                    gestureEnabled: true,
                    headerTitle: '',
                    headerLeft: () => <BackButton />,
                    headerRight: () => (
                        <Text style={{ fontFamily: 'Langar', fontSize: 20 }}>
                            Gymingo
                        </Text>
                    ),
                }}
            />
            <Stack.Screen
                name="onboarding"
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    );
};

export default Layout;
