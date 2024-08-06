import { Stack, useRouter } from 'expo-router';
import BackButton from '../../../../components/backButton';

const Layout = () => {
    const router = useRouter()
    return (
        <Stack>
            <Stack.Screen
                name="[id]"
                options={{
                    headerShown: false,
                    headerBackTitleVisible: false,
                    headerBackVisible: false,
                    gestureEnabled: false,
                    headerTitle: ''
                }}
            />
            <Stack.Screen
                name="traineePage"
                options={{
                    headerTitle: '',
                    headerLeft: () => <BackButton />
                }}
            />
        </Stack>
    );
};

export default Layout;