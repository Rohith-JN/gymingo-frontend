import { Stack, useRouter } from 'expo-router';
import { Text, Pressable } from 'react-native'

const Layout = () => {
    const router = useRouter()
    return (
        <Stack>
            <Stack.Screen
                name="onBoarding"
                options={{
                    headerTitle: '',
                    gestureEnabled: true,
                    headerLeft: () => <Pressable onPress={() => router.back()}><Text style={{ color: '#4280EF', fontSize: 15 }}>Go Back</Text></Pressable>,
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
