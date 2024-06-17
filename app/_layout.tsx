import { Stack } from 'expo-router';
import { useFonts, Langar_400Regular } from '@expo-google-fonts/langar';
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
          name="admin"
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="trainer"
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </Stack>
    </SharedContext>
  );
};

export default Layout;
