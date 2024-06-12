import {
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useState, useEffect, useContext } from 'react';
import { SharedContext } from '../context';
import * as Location from 'expo-location';
import { LocationGeocodedAddress } from 'expo-location';
import HeaderContainer from '../../components/headerContainer';
import InputField from '../../components/inputField';
import UploadButton from '../../components/uploadButton';

const OnBoarding = () => {
  const router = useRouter();
  const [location, setLocation] = useState<LocationGeocodedAddress[]>();
  const { sharedData } = useContext(SharedContext);

  useEffect(() => {
    if (sharedData.latitude !== 0 && sharedData.longitude !== 0) {
      (async () => {
        let reverseGeocodedAddress = await Location.reverseGeocodeAsync({
          longitude: sharedData.longitude,
          latitude: sharedData.latitude,
        });
        setLocation(reverseGeocodedAddress);
      })();
    }
  }, [sharedData]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.safeArea}>
        <Stack.Screen
          options={{
            headerTitle: '',
            headerRight: () => (
              <Text style={styles.headerRightText}>Gymingo</Text>
            ),
          }}
        />
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.keyboardAvoidingView}
          keyboardVerticalOffset={80}
        >
          <ScrollView>
            <View style={styles.mainContainer}>
              <View style={styles.scrollView}>
                <HeaderContainer title="GYM ONBOARDING PROCESS" />
                <InputField label="Gym Name" placeholder="Enter gym name" keyboardType="default" />
                <View style={{
                  marginTop: 17,
                  gap: 10
                }}>
                  <Text>Gym Location</Text>
                  <Pressable
                    onPress={() => {
                      router.push({ pathname: './location' });
                    }}
                    style={styles.pressable}
                  >
                    <Text>{location ? location[0].name : 'Share the exact location of your gym'}</Text>
                  </Pressable>
                </View>

                <UploadButton label="Photo" onPress={() => { }} />
                <UploadButton label="Proof Of Ownership" onPress={() => { }} />
                <InputField label="Contact Number" placeholder="Enter Number" keyboardType="numeric" />
                <InputField label="Email Address" placeholder="Enter Email Address" keyboardType="default" />
              </View>

              <View style={styles.submitContainer}>
                <Pressable style={styles.submitButton}>
                  <Text>Submit!</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerRightText: {
    fontFamily: 'Langar',
    fontSize: 20,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  mainContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  scrollView: {
    marginTop: 17,
    width: '85%',
    flexDirection: 'column',
    gap: 10
  },
  pressable: {
    paddingVertical: 11,
    paddingLeft: 13.5,
    backgroundColor: '#D1E8FD',
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#696767',
  },
  submitContainer: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
  },
  submitButton: {
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#D1E8FD',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#696767',
  },
});
export default OnBoarding;
