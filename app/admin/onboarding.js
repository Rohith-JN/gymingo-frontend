import {
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useState, useEffect, useContext } from 'react';
import { SharedContext } from '../context';

const OnBoarding = () => {
  const router = useRouter();
  const [location, setLocation] = useState();
  const { sharedData } = useContext(SharedContext);

  useEffect(() => {
    if (sharedData && sharedData.latitude && sharedData.longitude) {
      setLocation({
        latitude: sharedData.latitude,
        longitude: sharedData.longitude,
      });
    }
  }, [sharedData]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView edges={['bottom', 'left', 'right']} style={{ flex: 1 }}>
        <Stack.Screen
          options={{
            headerTitle: '',
            headerRight: () => (
              <Text style={{ fontFamily: 'Langar', fontSize: 20 }}>
                Gymingo
              </Text>
            ),
          }}
        />
        <KeyboardAvoidingView
          behavior="padding"
          style={{ flex: 1 }}
          keyboardVerticalOffset={80}
        >
          <ScrollView>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                marginTop: 20,
              }}
            >
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'start',
                  gap: '10',
                  width: '85%',
                }}
              >
                <View
                  style={{
                    borderRadius: 10,
                    padding: 20,
                    backgroundColor: '#D1E8FD',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 14,
                  }}
                >
                  <Text
                    style={{
                      color: '#5E8CDD',
                      fontWeight: 'bold',
                      fontSize: 13.2,
                    }}
                  >
                    GYM ONBOARDING PROCESS
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 17,
                    width: '100%',
                    flexDirection: 'column',
                    gap: 10,
                  }}
                >
                  <Text>Gym Name</Text>
                  <TextInput
                    placeholder="Enter gym name"
                    placeholderTextColor="black"
                    keyboardType="default"
                    style={{
                      paddingVertical: 11,
                      paddingLeft: 13.5,
                      backgroundColor: '#D1E8FD',
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: '#696767',
                    }}
                  />
                </View>
                <View
                  style={{
                    marginTop: 17,
                    width: '100%',
                    flexDirection: 'column',
                    gap: 10,
                  }}
                >
                  <Text>Gym Location</Text>
                  <Pressable
                    onPress={() => {
                      console.log(location);
                      router.push({
                        pathname: './location',
                      });
                    }}
                    style={{
                      paddingVertical: 11,
                      paddingLeft: 13.5,
                      backgroundColor: '#D1E8FD',
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: '#696767',
                    }}
                  >
                    <Text>
                      {location
                        ? location.latitude
                        : 'Share the exact location of your gym'}
                    </Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    marginTop: 17,
                    width: '100%',
                    flexDirection: 'column',
                    gap: 10,
                  }}
                >
                  <Text>Upload Photo</Text>
                  <Pressable
                    onPress={() => {}}
                    style={{
                      paddingVertical: 11,
                      paddingLeft: 13.5,
                      backgroundColor: '#D1E8FD',
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderStyle: 'dotted',
                      borderColor: '#696767',
                    }}
                  >
                    <Text>Upload IMAGE</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    marginTop: 17,
                    width: '100%',
                    flexDirection: 'column',
                    gap: 10,
                  }}
                >
                  <Text>Proof Of Ownership</Text>
                  <Pressable
                    onPress={() => {}}
                    style={{
                      paddingVertical: 11,
                      paddingLeft: 13.5,
                      backgroundColor: '#D1E8FD',
                      width: '100%',
                      borderRadius: 5,
                      borderStyle: 'dotted',
                      borderWidth: 1,
                      borderColor: '#696767',
                    }}
                  >
                    <Text>Upload FILE ( PDF, IMAGE )</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    marginTop: 17,
                    width: '100%',
                    flexDirection: 'column',
                    gap: 10,
                  }}
                >
                  <Text>Contact Number</Text>
                  <TextInput
                    placeholder="Enter Number"
                    placeholderTextColor="black"
                    keyboardType="numeric"
                    style={{
                      paddingVertical: 11,
                      paddingLeft: 13.5,
                      backgroundColor: '#D1E8FD',
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: '#696767',
                    }}
                  />
                </View>
                <View
                  style={{
                    marginTop: 17,
                    width: '100%',
                    flexDirection: 'column',
                    gap: 10,
                  }}
                >
                  <Text>Email Address</Text>
                  <TextInput
                    placeholder="Enter Email Address"
                    placeholderTextColor="black"
                    keyboardType="default"
                    style={{
                      paddingVertical: 11,
                      paddingLeft: 13.5,
                      backgroundColor: '#D1E8FD',
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: '#696767',
                    }}
                  />
                </View>
                <View
                  style={{
                    marginTop: 20,
                    width: '100%',
                    flexDirection: 'column',
                    gap: 10,
                    alignItems: 'center',
                  }}
                >
                  <Pressable
                    style={{
                      borderRadius: 10,
                      padding: 12,
                      backgroundColor: '#D1E8FD',
                      width: '40%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 14,
                      borderWidth: 1,
                      borderColor: '#696767',
                    }}
                  >
                    <Text>Submit!</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
export default OnBoarding;
