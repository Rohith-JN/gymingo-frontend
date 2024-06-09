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
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}
      />
    </Tabs>
  );
};

export default Layout;
