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
                    headerShown: false,
                    gestureEnabled: false
                }}
            />
        </Stack>
    );
};

export default Layout;
