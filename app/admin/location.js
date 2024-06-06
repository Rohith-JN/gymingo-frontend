import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useState, useEffect, useRef, useContext } from 'react';
import { useRouter, Stack } from 'expo-router';
import * as Location from 'expo-location';
import { GOOGLE_MAPS_API } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SharedContext } from '../context';

const LocationPage = () => {
  const { setSharedData, sharedData } = useContext(SharedContext);
  const router = useRouter();
  const [latitude, setLatitude] = useState(
    sharedData ? sharedData.latitude : null
  );
  const [longitude, setLongitude] = useState(
    sharedData ? sharedData.longitude : null
  );
  const [location, setLocation] = useState(
    sharedData
      ? { latitude: sharedData.latitude, longitude: sharedData.longitude }
      : { latitude: 0, longitude: 0 }
  );
  const [initialLocation, setInitialLocation] = useState(
    sharedData
      ? { latitude: sharedData.latitude, longitude: sharedData.longitude }
      : { latitude: 0, longitude: 0 }
  );
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLongitudeFocused, setIsLongitudeFocused] = useState(false);
  const longitudeInputRef = useRef(null);
  const mapRef = useRef();
  const autocompleteRef = useRef(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setInitialLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
    })();
  }, []);

  useEffect(() => {
    if (sharedData.latitude && sharedData.longitude) {
      setLocation({
        latitude: sharedData.latitude,
        longitude: sharedData.longitude,
      });
      setInitialLocation({
        latitude: sharedData.latitude,
        longitude: sharedData.longitude,
      });
      setLatitude(sharedData.latitude);
      setLongitude(sharedData.longitude);
    }
  }, [sharedData]);

  if (!location.latitude == 0 && !location.longitude == 0) {
    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={{ flex: 1 }}>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
            />
            <View style={{ height: isLongitudeFocused ? '30%' : '50%' }}>
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
                    autocompleteRef.current.setAddressText('');
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
                  setLatitude(String(event.nativeEvent.coordinate.latitude));
                  setLongitude(String(event.nativeEvent.coordinate.longitude));
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
            <View style={{ height: isLongitudeFocused ? '70%' : '50%' }}>
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
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
                fetchDetails={true}
                returnKeyType={'search'}
                onPress={(data, details) => {
                  mapRef.current?.animateToRegion({
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  });
                  setLocation({
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                  });
                  setLatitude(String(details.geometry.location.lat));
                  setLongitude(String(details.geometry.location.lng));
                }}
                query={{
                  key: GOOGLE_MAPS_API,
                  language: 'en',
                }}
              />
              <View
                style={{
                  paddingHorizontal: 20,
                  marginTop: 20,
                  alignItems: 'center',
                }}
              >
                <Text>Couldn't find your gym?</Text>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'flex-start',
                    marginTop: 20,
                    gap: 10,
                  }}
                >
                  <Text style={{}}>Enter geo-coordinates</Text>
                  <TextInput
                    clearButtonMode="always"
                    onFocus={() => setIsLongitudeFocused(true)}
                    onBlur={() => setIsLongitudeFocused(false)}
                    value={sharedData ? sharedData.latitude : latitude}
                    onChangeText={setLatitude}
                    placeholder="Enter latitude"
                    keyboardType="default"
                    placeholderTextColor="grey"
                    style={{
                      paddingVertical: 15,
                      paddingLeft: 13.5,
                      backgroundColor: '#DDDDDF',
                      width: '100%',
                      borderRadius: 8,
                    }}
                  />
                  <TextInput
                    clearButtonMode="always"
                    onFocus={() => setIsLongitudeFocused(true)}
                    onBlur={() => setIsLongitudeFocused(false)}
                    ref={longitudeInputRef}
                    value={sharedData ? sharedData.longitude : longitude}
                    onChangeText={setLongitude}
                    placeholder="Enter longitude"
                    keyboardType="default"
                    placeholderTextColor="grey"
                    style={{
                      paddingVertical: 15,
                      paddingLeft: 13.5,
                      backgroundColor: '#DDDDDF',
                      width: '100%',
                      borderRadius: 8,
                    }}
                  />
                  <View
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      marginTop: 20,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Pressable
                      onPress={() => {
                        if (autocompleteRef.current !== null) {
                          autocompleteRef.current.setAddressText('');
                        }
                        if (latitude && longitude) {
                          mapRef.current?.animateToRegion({
                            latitude: latitude,
                            longitude: longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                          });
                          setLocation({
                            latitude: latitude,
                            longitude: longitude,
                          });
                        }
                        if (!latitude || !longitude) {
                          Alert.alert(
                            'Missing Coordinates',
                            'Please enter both latitude and longitude to proceed.',
                            [
                              {
                                text: 'OK',
                                onPress: () => console.log('OK Pressed'),
                              },
                            ]
                          );
                        }
                      }}
                    >
                      <Text>Get Location!</Text>
                    </Pressable>
                    <Pressable
                      onPress={() => {
                        if (
                          location.latitude == initialLocation.latitude &&
                          location.longitude == initialLocation.longitude
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
