import { View, Text, Pressable } from 'react-native';
import { Stack } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import MainButton from '../../components/mainButton';

/*
1) OnClick -> location page
2) Page fill -> Map
3) Search field component slide up
4) Search gym on option click show location on map
5) Current location is shown on map
6) On confirm go back to onBoarding
7) Replace placeholder with location
*/

const LocationPage = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  if (!location) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        {errorMsg ? (
          <View>
            <Text>{errorMsg}</Text>
            <MainButton
              title="Open Settings"
              onPress={() => {
                // open privary -> location -> app location options
              }}
            ></MainButton>
          </View>
        ) : (
          <Text>Waiting for location...</Text>
        )}
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={{ height: '50%' }}>
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Your Location"
          />
        </MapView>
      </View>
      <View style={{ height: '50%' }}></View>
    </View>
  );
};

export default LocationPage;
