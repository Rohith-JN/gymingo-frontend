import { Stack, useRouter } from 'expo-router';
import { Text, Pressable } from 'react-native'

const Layout = () => {
    const router = useRouter()
    return (
        <Stack>
            <Stack.Screen
                name="login"
                options={{
                    gestureEnabled: true,
                    headerTitle: '',
                    headerLeft: () => <Pressable onPress={() => router.back()}><Text style={{ color: '#4280EF', fontSize: 15 }}>Go Back</Text></Pressable>,
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
