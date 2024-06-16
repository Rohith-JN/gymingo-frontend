import { Tabs } from 'expo-router';
import { Text } from 'react-native';

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="[id]"
        options={{
          headerLeft: () => (
            <Text style={{ fontFamily: 'Langar', fontSize: 20 }}>Gymingo</Text>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: 'transparent'
          },
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerTitle: 'ZENFITNESS',
          headerTitleStyle: {
            fontSize: 20, fontWeight: 'bold'
          },
        }}
      />
    </Tabs>
  );
};

export default Layout;
