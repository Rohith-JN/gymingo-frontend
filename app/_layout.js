import { Stack } from 'expo-router';
import { useFonts, Langar_400Regular } from '@expo-google-fonts/langar';
import { Text } from 'react-native';
import SharedContext from './context';

const Layout = () => {
  const [loadedFonts] = useFonts({
    Langar: Langar_400Regular,
  });
  if (!loadedFonts) {
    return null;
  }
  return (
    <SharedContext>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="admin/login"
          options={{
            headerTitle: '',
            headerRight: () => (
              <Text style={{ fontFamily: 'Langar', fontSize: 20 }}>
                Gymingo
              </Text>
            ),
          }}
        />
      </Stack>
    </SharedContext>
  );
};

export default Layout;
