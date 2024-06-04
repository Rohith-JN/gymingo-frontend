import {
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import { Stack, router } from 'expo-router';

const OnBoarding = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView edges={['bottom', 'left', 'right']} style={{ flex: 1 }}>
        <Stack.Screen
          options={{
            headerTitle: '',
            headerLeft: () => (
              <Text style={{ fontFamily: 'Langar', fontSize: 20 }}>
                Gymingo
              </Text>
            ),
          }}
        />
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
                  onPress={() => router.push('./location')}
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
                  <Text>Share the exact location of your gym</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
export default OnBoarding;
