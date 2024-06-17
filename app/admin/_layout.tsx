import { Stack } from 'expo-router';

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="auth"
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="(tabs)"
                options={{
                    gestureEnabled: false,
                    headerBackVisible: false,
                    headerShown: false
                }}
            />
        </Stack>
    );
};

export default Layout;
