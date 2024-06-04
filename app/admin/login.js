import { Link, Stack } from 'expo-router';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import {
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import { useRef, useState } from 'react';

const Login = () => {
  const inputRefs = useRef([]);
  const [code, setCode] = useState(Array(6).fill(''));

  const [loadedFonts] = useFonts({
    Langar: Langar_400Regular,
  });
  if (!loadedFonts) {
    return null;
  }

  const handleTextChange = (text, index) => {
    let newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    if (newCode.every((char) => char.length === 1)) {
      const finalCode = newCode.join('');
      // code for use later
    }
  };

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
        <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={-260}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'start',
              height: '100%',
              marginTop: 100,
            }}
          >
            <View
              style={{
                borderRadius: 10,
                padding: 20,
                backgroundColor: '#D1E8FD',
                width: '80%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 14,
              }}
            >
              <Text
                style={{ color: '#5E8CDD', fontWeight: 'bold', fontSize: 13.2 }}
              >
                Enter Unique Identification Number
              </Text>
            </View>
            <View
              style={{
                width: '80%',
                height: '10%',
                marginTop: 70,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '80%',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: '100%',
                  width: '100%',
                }}
              >
                {Array.from({ length: 6 }).map((_, index) => (
                  <TextInput
                    maxLength={1}
                    placeholder=""
                    keyboardType="numeric"
                    style={{
                      paddingVertical: 11,
                      paddingLeft: 13.5,
                      backgroundColor: 'white',
                      width: '14%',
                      height: '60%',
                      borderRadius: 10,
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 1,
                      },
                      shadowOpacity: 0.22,
                      shadowRadius: 2.22,
                      elevation: 3,
                    }}
                    key={index}
                    ref={(ref) => (inputRefs.current[index] = ref)}
                    onChangeText={(text) => handleTextChange(text, index)}
                    value={code[index]}
                  />
                ))}
              </View>
              <Text>
                New user!{' '}
                <Link href="./onBoarding" style={{ color: '#4280EF' }}>
                  Get Onboarded
                </Link>
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
