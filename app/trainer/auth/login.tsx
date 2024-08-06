import { Link } from 'expo-router';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import {
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import HeaderContainer from '../../../components/headerContainer';
import LoginVerificationInput from '../../../components/loginVerificationInput';

const Login = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.mainContainer}>
        <KeyboardAvoidingView
          behavior="position"
          style={styles.mainContainer}
          keyboardVerticalOffset={-80}
        >
          <View
            style={styles.container}
          >
            <HeaderContainer title={'Enter Unique Identification Number'} />
            <View
              style={styles.subContainer}
            >
              <LoginVerificationInput path={'trainer/(tabs)/trainer/[id]'} />
              <Text>
                New user!{' '}
                <Link href="" style={styles.link}>
                  Contact Your Admin
                </Link>
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    paddingHorizontal: 30,
    marginTop: 20
  },
  subContainer: {
    width: '100%',
    height: '70%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  link: {
    color: '#4280EF'
  }
})

export default Login;
