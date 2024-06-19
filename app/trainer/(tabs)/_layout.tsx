import { Tabs } from 'expo-router';
import { Text } from 'react-native';

const Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="[id]"
                options={{
                    headerShown: false
                }}
            />
        </Tabs>
    );
};

export default Layout;
