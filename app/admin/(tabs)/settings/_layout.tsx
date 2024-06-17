import { Stack, useRouter } from 'expo-router';
import { Text, Pressable } from 'react-native';

const Layout = () => {
    const router = useRouter()
    return (
        <Stack>
            <Stack.Screen
                name="settingsPage"
                options={{
                    headerTitle: 'ZENFITNESS',
                    headerTitleStyle: {
                        fontSize: 20, fontWeight: 'bold'
                    },
                }}
            />
            <Stack.Screen
                name="trainerOnboarding"
                options={{
                    headerTitle: '',
                    headerBackTitleVisible: false,
                    headerBackVisible: false,
                    gestureEnabled: true,
                    headerLeft: () => <Pressable onPress={() => router.back()}><Text style={{ color: '#4280EF', fontSize: 15 }}>Go Back</Text></Pressable>,
                }}
            />
        </Stack>
    );
};

export default Layout;

/*
app
    admin
        (tabs)
            settings
                _layout.tsx
                settingsPage.tsx
                trainerOnboarding.tsx
            _layout.tsx
            [id].tsx
            auth
                onBoarding
                    _layout.tsx
                    location.tsx
                    onBoarding.tsx
                _layout.tsx
                login.tsx
        _layout.tsx
    _layout.tsx
    index.tsx
*/