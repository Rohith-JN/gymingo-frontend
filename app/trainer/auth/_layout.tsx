import { Stack, useRouter } from 'expo-router';
import { Text, Pressable } from 'react-native'

const Layout = () => {
    const router = useRouter()
    return (
        <Stack>
            <Stack.Screen
                name="login"
                options={{
                    headerTitle: '',
                    headerLeft: () => <Pressable onPress={() => router.back()}><Text style={{ color: 'green', fontSize: 15 }}>Go Back</Text></Pressable>,
                    headerRight: () => (
                        <Text style={{ fontFamily: 'Langar', fontSize: 20 }}>
                            Gymingo
                        </Text>
                    ),
                }}
            />
        </Stack>
    );
};

export default Layout;
