import { Tabs } from 'expo-router';
import { Text } from 'react-native';

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="[id]"
        options={{
          headerTitle: '',
          headerLeft: () => (
            <Text style={{ fontFamily: 'Langar', fontSize: 20 }}>
              Gymingo
            </Text>
          ),
          headerLeftContainerStyle: {
            paddingLeft: 20
          }
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false
        }}
      />
    </Tabs>
  );
};

export default Layout;
