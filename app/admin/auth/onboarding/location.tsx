import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  Alert,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useState, useEffect, useRef, useContext } from 'react';
import { useRouter, Stack } from 'expo-router';
import * as Location from 'expo-location';
import { GOOGLE_MAPS_API } from '@env';
import { GooglePlacesAutocomplete, GooglePlacesAutocompleteRef } from 'react-native-google-places-autocomplete';
import { SharedContext } from '../../../context';

const LocationPage = () => {
  const { setSharedData, sharedData } = useContext(SharedContext);
  const router = useRouter();
  const sharedDataCondition = (sharedData.latitude !== 0 && sharedData.longitude !== 0)
  const [userLocation, setUserLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [location, setLocation] = useState(
    sharedDataCondition
      ? { latitude: sharedData.latitude, longitude: sharedData.longitude }
      : { latitude: 0, longitude: 0 }
  );
  const [initialLocation, setInitialLocation] = useState(
    sharedDataCondition
      ? { latitude: sharedData.latitude, longitude: sharedData.longitude }
      : { latitude: 0, longitude: 0 }
  );
  const [errorMsg, setErrorMsg] = useState<String>("");
  const mapRef = useRef<MapView>(null);
  const autocompleteRef = useRef<GooglePlacesAutocompleteRef>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      let location = await Location.getCurrentPositionAsync({});
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let currentLocation = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setUserLocation(currentLocation);
    })();
  }, []);

  useEffect(() => {
    if (sharedDataCondition) {
      setLocation({
        latitude: sharedData.latitude,
        longitude: sharedData.longitude,
      });
      setInitialLocation({
        latitude: sharedData.latitude,
        longitude: sharedData.longitude,
      });
    }
  }, [sharedData]);

  useEffect(() => {
    if (!sharedDataCondition) {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        let location = await Location.getCurrentPositionAsync({});
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        let currentLocation = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        };
        setUserLocation(currentLocation);
        setInitialLocation(currentLocation);
        setLocation(currentLocation);
      })();
    }
  }, []);

  if (!(userLocation.latitude == 0) && !(userLocation.longitude == 0)) {
    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={{ flex: 1 }}>
            <View style={{ height: isFocused ? '50%' : '78%' }}>
              <MapView
                ref={mapRef}
                style={{ flex: 1 }}
                region={{
                  latitude: initialLocation.latitude,
                  longitude: initialLocation.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                onPress={(event) => {
                  if (autocompleteRef.current !== null) {
                    autocompleteRef.current?.setAddressText('');
                  }
                  mapRef.current?.animateToRegion({
                    latitude: event.nativeEvent.coordinate.latitude,
                    longitude: event.nativeEvent.coordinate.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  });

                  setLocation({
                    latitude: event.nativeEvent.coordinate.latitude,
                    longitude: event.nativeEvent.coordinate.longitude,
                  });
                }}
              >
                <Marker
                  coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                  }}
                />
              </MapView>
            </View>
            <View style={{ height: isFocused ? '50%' : '22%' }}>
              <GooglePlacesAutocomplete
                ref={autocompleteRef}
                placeholder="Find your gym?"
                styles={{
                  container: {
                    paddingTop: 20,
                    flex: 0,
                  },
                  textInput: {
                    backgroundColor: '#DDDDDF',
                    borderRadius: 8,
                    fontSize: 16,
                    paddingLeft: 20,
                  },
                  textInputContainer: {
                    paddingHorizontal: 20,
                    paddingBottom: 0,
                  },
                }}
                textInputProps={{
                  placeholderTextColor: 'grey',
                  clearButtonMode: 'always',
                  onFocus: () => setIsFocused(true),
                  onBlur: () => setIsFocused(false),
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
                fetchDetails={true}
                onPress={(data, details) => {
                  mapRef.current?.animateToRegion({
                    latitude: details!.geometry.location.lat,
                    longitude: details!.geometry.location.lng,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  });
                  setLocation({
                    latitude: details!.geometry.location.lat,
                    longitude: details!.geometry.location.lng,
                  });
                }}
                query={{
                  key: GOOGLE_MAPS_API,
                  language: 'en',
                }}
              />
              <View
                style={{
                  width: '100%',
                  marginTop: 20,
                  paddingHorizontal: 20,
                  justifyContent: 'flex-start',
                  alignItems: 'flex-end',
                }}
              >
                <Pressable
                  onPress={() => {
                    if (
                      location.latitude == userLocation.latitude &&
                      location.longitude == userLocation.longitude
                    ) {
                      Alert.alert(
                        'Missing Coordinates',
                        'Please select a location to proceed.',
                        [
                          {
                            text: 'OK',
                            onPress: () => null,
                          },
                        ]
                      );
                    } else {
                      setSharedData({
                        latitude: location.latitude,
                        longitude: location.longitude,
                      });
                      router.back();
                    }
                  }}
                >
                  <Text>Confirm Location!</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        {errorMsg ? (
          <Text>{errorMsg}</Text>
        ) : (
          <Text>Waiting for location...</Text>
        )}
      </View>
    );
  }
};

export default LocationPage;
